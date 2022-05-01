import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const GameCapsule = (props) => {
    
    return (
        <div class=' bg-slate-900 justify-items-center flex items-center justify-center flex-col'>        
            <Link to={props.link} class=' hover:ml-10 transition-all bg-cyan-600 hover:rounded-full text-slate-50 mt-5 mb-5 w-50  flex items-center justify-center rounded-br-lg p-10 duration-1000 ...'> 
                <p class=''>{props.name }</p>
            </Link>
        </div> 
    )
}
export default GameCapsule