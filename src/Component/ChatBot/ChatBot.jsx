// // App.jsx
// import React, { useState, useEffect } from "react";
// import { Client } from "@gradio/client";

// const ChatBot = () => {
//   const [message, setMessage] = useState("");
//   const [chatResponse, setChatResponse] = useState("");
//   const [suggestions] = useState([
//     "ما هو أفضل تراك أبدأ بيه لو أنا مبتدئ؟",
//     "هل لازم أكون كويس في الماث؟",
//     "إزاي أختار التراك المناسب؟",
//   ]);
//   const [selectedSuggestion, setSelectedSuggestion] = useState("");

//   const [client, setClient] = useState(null);

//   useEffect(() => {
//     const initClient = async () => {
//       const newClient = await Client.connect("elhamibrahim/AI-Spark-chat");
//       setClient(newClient);
//     };
//     initClient();
//   }, []);

//   const sendMessage = async () => {
//     if (!message || !client) return;
//     const result = await client.predict("/chat_interface", { message });
//     setChatResponse(result.data);
//   };

//   const handleSuggestion = async (value) => {
//     setSelectedSuggestion(value);
//     if (!client) return;
//     const result = await client.predict("/handle_suggestion", {
//       selected: value,
//     });
//     setChatResponse(result.data);
//   };

//     return <>
//         <div className="mx-auto p-6 bg-white rounded-2xl shadow-md space-y-4 mt-[21%]">
//             <h1 className="text-2xl font-bold text-center mb-4">🤖 AI Spark Chatbot</h1>
//             <div className="mt-4 p-4 bg-gray-100 rounded-lg min-h-[100px]">
//               <p>{chatResponse || "منتظر السؤال..."}</p>
//             </div>
//             <div className="space-y-2">
//               <label className="block font-semibold">اكتب سؤالك هنا / Type your question:</label>
//               <input
//               type="text"
//               className="w-full p-2 border rounded-lg"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               placeholder="اكتب سؤالك هنا..."
//               />
//               <div>
//         {/* <label className="block font-semibold mb-2">اقتراحات جاهزة:</label> */}
//         <div className="space-y-2 flex gap-4">
//           {suggestions.map((sugg, idx) => (
//             <div key={idx} className="flex items-center space-x-2">
//               <input
//                 type="radio"
//                 name="suggestion"
//                 value={sugg}
//                 checked={selectedSuggestion === sugg}
//                 onChange={() => handleSuggestion(sugg)}
//               />
//               <label>{sugg}</label>
//             </div>
//           ))}
//         </div>
//       </div>
//               <button
//               onClick={sendMessage}
//               className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
//               >
//               إرسال
//               </button>
//             </div>

      

//     </div>
//     </>
// }

// export default ChatBot;

import React, { useState, useRef, useEffect } from "react";
import { Client } from "@gradio/client"; // تأكد أن مكتبة Gradio client مثبّتة
import toast from "react-hot-toast";

const ChatBot = () => {
  const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(true);
  const [input, setInput] = useState("");
  const textAreaRef = useRef();
  const clientRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions] = useState([
    "ما هو أفضل تراك أبدأ بيه لو أنا مبتدئ؟",
    "ايه أدوات الذكاء الاصطناعي اللي موجودة على المنصة؟",
    "📩 إرسال استفسار للمسؤول عن المنصة",
    "رشحلي لابتوب مناسب لتراك الـ Graphics.",
    "Best laptop for Databse track?",
    "What AI tools do you offer for students?",
    "What tracks are available on AI Spark?",
  ]);
  const [client, setClient] = useState(null);
  const [selectedSuggestion, setSelectedSuggestion] = useState("");

  // إنشاء Client مرة واحدة عند تحميل الصفحة
  useEffect(() => {
    const initClient = async () => {
      try {
        const client = await Client.connect("elhamibrahim/AI-Spark-chat");
        clientRef.current = client;
      } catch (err) {
        console.error("فشل الاتصال بـ Gradio Client:", err);
      }
    };
    initClient();
  }, []);

const [messages, setMessages] = useState([
  { sender: "bot", text: "مرحبًا بك في منصة Spark AI التعليمية!\nكيف يمكنني مساعدتك اليوم؟" },
]);
  

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
    setInput("");
    if (textAreaRef.current) textAreaRef.current.style.height = "auto";

    setIsLoading(true);
    setMessages((prev) => [...prev, { sender: "bot", text: "loading" }]);

    try {
      const result = await clientRef.current.predict("/chat_interface", {
        message: userMessage,
      });

      console.log("نتيجة Gradio API:", result);

      let botReply = "";
      if (Array.isArray(result?.data)) {
        botReply = result.data[0][0][1] || "⚠️ تعذر فهم الرد.";
      } else if (typeof result?.data === "string") {
        botReply = result.data;
      } else {
        botReply = "⚠️ تعذر فهم رد المساعد.";
      }

      // استبدال رسالة "loading" بالرد الحقيقي
      setMessages((prev) =>
        prev.map((msg) =>
          msg.sender === "bot" && msg.text === "loading"
            ? { sender: "bot", text: botReply }
            : msg
        )
      );
    } catch (error) {
      console.error("خطأ أثناء الاتصال بالـ API:", error);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.sender === "bot" && msg.text === "loading"
            ? { sender: "bot", text: "عذرًا، حدث خطأ أثناء المعالجة." }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

const linkify = (text) => {
  if (typeof text !== "string") return text;
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(urlRegex, (url) => `<a href="${url}" class="text-blue-500 underline" target="_blank">${url}</a>`);
  };
  
const handleSuggestion = async (value) => {
  setSelectedSuggestion(value);
  setMessages((prev) => [...prev, { sender: "user", text: value }]);
  setIsLoadingSuggestions(true); // بدء التحميل

  if (!clientRef.current) return;

  try {
    const result = await clientRef.current.predict("/handle_suggestion", {
      selected: value,
    });

    console.log("رد السيرفر:", result);

    // التحقق من صحة البيانات المستلمة
    let reply;
    if (
      result?.data &&
      Array.isArray(result.data) &&
      Array.isArray(result.data[0]) &&
      Array.isArray(result.data[0][0]) &&
      typeof result.data[0][0][1] === "string"
    ) {
      reply = result.data[0][0][1];
    } else {
      throw new Error("تنسيق البيانات غير متوقع");
    }

    setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    setChatResponse(reply);
  } catch (err) {
    
  } finally {
    setIsLoadingSuggestions(false); // إيقاف التحميل مهما كانت النتيجة
  }
};



  return (
    <div className="flex mt-28 text-center flex-col min-h-64 justify-center bg-gray-100 py-8 px-6 mx-6 mb-12" dir="rtl">
      <div className="w-full bg-white rounded-2xl shadow-lg flex flex-col">
        <div className="p-4 bg-[#3055d1] text-white font-bold text-lg flex items-center justify-center gap-2 shadow-md">
          {/* <i className="text-2xl fas fa-robot" /> */}
          <span>AI Spark Chatbot </span>
        </div>

        <div className="flex-1 overflow-y-auto py-12 px-6 space-y-2 bg-gray-50 flex flex-col items-start">
          {messages.map((msg, index) =>
            msg.sender === "bot" ? (
              msg.text === "loading" ? (
                <div
                  key={index}
                  className="p-3 rounded-xl max-w-xs bg-gray-200 self-start text-right text-sm shadow-sm whitespace-pre-line animate-pulse text-gray-500"
                >
                  جاري المعالجة...
                </div>
              ) : (
                <div
  key={index}
  className="p-3 rounded-2xl bg-gray-200 self-start text-sm shadow-sm whitespace-pre-line break-words text-right max-w-[50%]"
  dir={/[\u0600-\u06FF]/.test(msg.text) ? "rtl" : "ltr"}
  dangerouslySetInnerHTML={{ __html: linkify(msg.text) }}
/>

              )
            ) : (
              <div
  key={index}
  className="p-3 rounded-2xl bg-blue-100 self-end text-sm shadow-sm whitespace-pre-line break-words text-right max-w-[80%]"
  dir={/[\u0600-\u06FF]/.test(msg.text) ? "rtl" : "ltr"}
>
  {msg.text}
</div>

            )
          )}
        </div>

        <div className="p-4 border-t flex gap-2">
          <textarea
            ref={textAreaRef}
            rows={1}
            className="flex-1 border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none overflow-hidden"
            placeholder="اكتب رسالتك..."
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              e.target.style.height = "auto";
              e.target.style.height = `${e.target.scrollHeight}px`;
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
          />
          <button
  onClick={sendMessage}
  className="bg-[#3055d1] text-white p-3 rounded-full hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
  disabled={isLoading}
>
  <i className="fas fa-arrow-up text-lg"></i>
</button>
        </div>
<div className="m-6">
        {/* <label className="block font-semibold mb-2">اقتراحات جاهزة:</label> */}
        <div className="flex flex-wrap justify-center gap-4 p-4 bg-gray-50 rounded-xl shadow-md">
          {suggestions.map((sugg, idx) => (
            <div key={idx} className={`px-4 py-2 rounded-2xl shadow-sm border border-gray-300 bg-white hover:bg-blue-50 transition text-sm 
                  ${/[\u0600-\u06FF]/.test(sugg) ? "text-right rtl" : "text-left ltr"}`}
                  dir={/[\u0600-\u06FF]/.test(sugg) ? "rtl" : "ltr"}>
              <label className="flex items-center gap-2 cursor-pointer w-full">
              <input
                type="radio"
                name="suggestion"
                value={sugg}
                checked={selectedSuggestion === sugg}
                onChange={() => handleSuggestion(sugg)}
                className="my-4"
              />
                <label className="">{sugg}</label>
              </label>
            </div>
          ))}
        </div>
      </div>


      </div>
    </div>

  );
};

export default ChatBot;
