import React from 'react'

const Frame =  (props) => {

    const reveal = () => {
        props.reveal(props.picture.id)
    }

    return(
        <button 
            onClick={() => reveal()}
            class='  bg-blue-200 m-1 p-6 hover:bg-blue-300 active:bg-blue=150 rounded-lg place-content-end ...'>
            {props.picture.visibility ? 
            props.picture.picture
            :
            <div class=''><h1 ></h1></div>
        }
            
        </button>
    )
}
export default Frame