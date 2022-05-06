import React, {useState, useEffect} from 'react'
import data from './memoryPics'
import {Frame, PointFrame} from './Frame';

const MemoryGame = (props) => {
    
    const [pics, setPics] = useState([])
    const [myPoints, setMyPoints] = useState([])
    const [versusPoints, setVersusPoints] = useState([])
    const [init, setInit] = useState(true)
    const [choicePair, setChoisePair] = useState(true)
    const [turn, setTurn] = useState(true)
    const [processing, setProcessing] = useState(false)
    const [pick, setPick] = useState({
        picId: -1,
        id: -1,
    })
    

    useEffect(() => {
        if(init){
            let puzzle = []
            let puzzleMirror = []
            let size = props.gridSize / 2
            for(let i = 0; i < size;i++){
                puzzle.push({
                    picture: data[i],
                    visibility: false,
                    isFound: false,
                    picId: i,
                    hasClass: false,
                    clss: ''
                })
                puzzleMirror.push({
                    picture: data[i],
                    visibility: false,
                    isFound: false,
                    picId: i,
                    hasClass: false,
                    clss: ''
                })
            }
            puzzle.push(... puzzleMirror)
            let final = shuffle(puzzle)
            setPics(final)
            setInit(false)
        }
    })
    const shuffle =  (puzzle) => {
        let len = puzzle.length
        let shuffledPuz = []
        let id = 0
        while(len > 0){
            let index = Math.floor(Math.random() * len)
            shuffledPuz.push({... puzzle[index], id: id})
            puzzle.splice(index,1)
            id+=1
            len-=1
        }
        return shuffledPuz
    }

    const reveal =  async (picture) => {
        let id = picture.id
        let picId = picture.picId
        let puzzle = []
        if(pick.id != id && !processing && !picture.isFound){
            setPick({picId,id})
            for(let i = 0; i < pics.length; i++){
                if(pics[i].id == id){
                    puzzle.push({
                        picture: pics[i].picture,
                        visibility: true,
                        isFound: pics[i].isFound,
                        picId: pics[i].picId,
                        id: pics[i].id,
                        hasClass: pics[i].hasClass,
                        clss: pics[i].class
                    })
                } else {
                    puzzle.push(pics[i])
                }
            }    
            setPics(puzzle)
     
            if(!choicePair){
                setProcessing(true)
                sleep(500).then(() => {
                check (picture)
                });
                
            }
            if(pick)
            setChoisePair(!choicePair)
        }
    }
    const check = (picture) => {
        let id = picture.id
        let picId = picture.picId
        let puzzle = []
        let cl = turn 
        ? '  bg-cyan-400 m-1 p-4  place-content-end border-2 ...' 
        : '  bg-emerald-400 m-1 p-4  place-content-end border-2 ...'

        if(pick.picId == picId) {
            let iconID = -1
            for(let i = 0; i < pics.length;i++) {
                if(pick.picId == pics[i].picId){
                    puzzle.push({
                        picture: pics[i].picture,
                        visibility: true,
                        isFound: true,
                        picId: pics[i].picId,
                        id: pics[i].id,
                        hasClass: true,
                        clss: cl
                    })
                    iconID = i
                } else {
                    puzzle.push(pics[i])
                }
            }
            let icons = turn ? myPoints : versusPoints
            icons.push(pics[iconID])
            turn ? setMyPoints(icons) : setVersusPoints(icons)
        } else {
            for(let i = 0; i < pics.length;i++) {
                if(pics[i].isFound){
                    puzzle.push(pics[i])
                } else {
                    puzzle.push({
                        picture: pics[i].picture,
                        visibility: false,
                        isFound: false,
                        picId: pics[i].picId,
                        id: pics[i].id,
                        hasClass: false,
                        clss: ''
                    })
                }
            }
            setTurn(!turn)
        } 
        setPick([])        
        setPics(puzzle)
        setChoisePair(!choicePair)
        setProcessing(false)
    }
    function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }
    


    return(
        <div class=' flex items-center flex-row justify-center  bg-slate-900 h-screen p-0 ...'>
            <div class={props.gridCls}>
                {pics.map((e) => {
                    return(
                        <Frame 
                        picture={e}
                        reveal={reveal}
                        turn={turn}
                        clss={e.clss}
                        />
                    )
                })}
            </div>     
            <div class=' flex flex-row  h-96 w-96'>
                <div class='    flex flex-col w-48'>
                    <p class=' text-slate-100 subpixel-antialiased'>Player 1</p>
                    <div class='inline-grid grid-cols-5'>
                        {myPoints.map(e => {
                            return(
                                <PointFrame
                                    picture={e.picture}
                                    turn={true}
                                />
                            )
                        })}
                    </div>
                </div>
                <div class='flex flex-col w-48'>
                    <p class=' text-slate-100 subpixel-antialiased '>Player 2</p>
                    <div class='inline-grid grid-cols-5 m-0'>
                        {versusPoints.map(e => {
                            return(
                                <PointFrame
                                    picture={e.picture}
                                    turn={false}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MemoryGame