import React from 'react'
import style from './Loading.module.css'
import { FadeLoader } from 'react-spinners';
const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};
export default function Loading() {
    return <>
        <div className="sweet-loading py-12 flex justify-center items-center mt-28">
            <FadeLoader
                color={'#3055d1'}
                cssOverride={override}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    </>


}
