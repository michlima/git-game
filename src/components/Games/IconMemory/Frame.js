import React, {useState} from 'react'

const Frame =  (props) => {
    const reveal = () => {
        props.reveal(props.picture)
    }

    let styling = 
    props.turn 
    ? ' bg-neutral-100 m-1 p-4 hover:bg-cyan-300 active:bg-neutral-50 place-content-end rounded-md border-2 ...'
    : ' bg-neutral-100 m-1 p-4 hover:bg-emerald-300 active:bg-neutral-50 place-content-end rounded-md border-2 ...'

    return(
        <button 
            onClick={() => reveal()}
            class={props.picture.hasClass ? props.clss : styling }>
            {props.picture.visibility 
            ? <div>{props.picture.picture}</div>
            : <div class='opacity-0'>{props.picture.picture}</div>
        }
        </button>
    )
}

const PointFrame =  (props) => {

    let styling = '  m-1 p-4 place-content-end ...'
    let cl = props.turn 
        ? '  text-cyan-400 m-0 place-content-end  hover:scale-110 ...' 
        : '  text-emerald-400 m-0 place-content-end  hover:scale-110 ...'
    return(
        <p 
            class={''}>
            <div class={cl}>{props.picture}</div>
        </p>
    )
}

export  {Frame, PointFrame}