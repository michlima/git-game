import React, {useState} from 'react'

const Frame =  (props) => {
    const reveal = () => {
        props.reveal(props.picture)
    }

    let class1 = '  bg-neutral-100 m-1 p-4 hover:bg-neutral-200 active:bg-neutral-50 rounded-lg place-content-end border-2 border-green-600 ...'
    let class2 = '  bg-neutral-100 m-1 p-4 hover:bg-neutral-200 active:bg-neutral-50 rounded-lg place-content-end border-2 border-cyan-600 ...'

    return(
        <button 
            onClick={() => reveal()}
            class={props.picture.hasClass ? props.clss : props.turn ? class2 : class1}>
            {props.picture.visibility 
            ? <div>{props.picture.picture}</div>
            : <div class='opacity-0'>{props.picture.picture}</div>
        }
            
        </button>
    )
}
export default Frame