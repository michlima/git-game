import React, {useState, useEffect} from 'react'
import { AiFillSetting } from "react-icons/ai";
const Online = (props) => {
    const backButton = () => {
        props.handleDecision()
    }
    return(
        <div class=' bg-slate-900 h-screen flex items-center justify-center flex-col text-slate-100'>
            <p class='text-2xl animate-bounce'>
                Coming Soon ... 
                </p>
            <AiFillSetting size={100} class='motion-safe:animate-spin'/>
            <button onClick={() => backButton()} class='m-2 text-slate-900 rounded-full bg-cyan-100 pl-10 pr-10 pt-1 pb-1 hover:scale-105 duration-200'>Back</button>
        </div>
    )
}
export default Online
