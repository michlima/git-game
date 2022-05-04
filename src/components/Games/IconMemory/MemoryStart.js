import React, {useState, useEffect} from 'react'
import MemoryGame from './memoryGame'
import Online from './Online'
const  MemoryStart= (props) => {
    const [areaDecided, setAreaDecided] = useState(false)
    const [online, setOnline] = useState(false)
    let buttoncls = ' m-2 rounded-full bg-cyan-400 pl-10 pr-10 pt-2 pb-2 hover:scale-125 duration-200'
    const handleSelection= (selected) => {
        selected == 'online' ? setOnline(true) :  setOnline(false)
        setAreaDecided(true)
    }

    return (
        <div class=' bg-slate-900 h-screen flex items-center justify-center'>
            {areaDecided 
            ? online ? <Online/>: <MemoryGame/>
            :
            <div class=' flex flex-col'>
                <button class={buttoncls}onClick={() => handleSelection('local')}>Local</button>
                <button class={buttoncls}onClick={() => handleSelection('online')}>Online</button>
            </div>
            }

            
        </div>
    )
}
export default MemoryStart