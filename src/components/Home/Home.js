import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import GameCapsule from '../GameCapsule/GameCapsule'
import list from '../gameList'
import Hexagon from 'react-hexagon'


const  Home= (props) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [screenHeight, setScreenHeight] = useState(window.innerHeight)


    useEffect(() => {
        
    }, []);

    return( 
        <div class=' bg-slate-900 justify-items-center flex items-center justify-center flex-col h-full '>        
            <a href='https://github.com/michlima/jsGames' class='text-2xl bg-purple-600 transition-all hover:scale-125 mt-10 mb-10 h-20 w-1/6  flex items-center justify-center rounded-lg flex-col p-20 ...'>
                <div class='flex-row'><span class=' font-semibold text-teal-400'>Mi</span>Games </div>
                <br/><span class='text-xs text-slate-900'>source code</span>    
            </a>
            <p class='text-slate-200'>
                MiGames is an <span class='font-semibold'>OpenSource</span> platform <br/> 
                where any developer can <span class='font-semibold'>develope and post their own games.</span> <br/>
                <span class='text-xs text-slate-400'>In order to post your game just follow the link to the source code in GitHub and create a pull request!</span>
            </p>
            {list.map(e => {
                return(
                <GameCapsule 
                    link= {e.link}
                    name={e.name}
                />
                )
            })}
            <p class='text-slate-400 text-xs mb-5'> © Copyright Stuff 
             source code : <a href='https://github.com/michlima/jsGames'>https://github.com/michlima/jsGames</a></p>
        </div>         
    )
}

export default Home