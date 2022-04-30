import React, {useState, useEffect} from 'react'
import Icon from "react-icons/ai";
import data from './memoryPics'
import Frame from './Frame'

const MemoryGame = (props) => {
    
    const [pics, setPics] = useState([])
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
            for(let i = 0; i < data.length;i++){
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
            console.log(final)
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
        console.log(shuffledPuz)
        return shuffledPuz
    }

    const reveal =  async (picture) => {
        let id = picture.id
        let picId = picture.picId
        let puzzle = []
        console.log(turn)
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
        ? '  bg-blue-400 m-1 p-6 rounded-lg place-content-end border-2 border-cyan-500...' 
        : '  bg-emerald-400 m-1 p-6  rounded-lg place-content-end border-2 border-green-500...'

        if(pick.picId == picId) {
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
                } else {
                    puzzle.push(pics[i])
                }
            }
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
        setPics(puzzle)
        setChoisePair(!choicePair)
        setProcessing(false)
    }
    function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }
    


    return(
        <>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <div class='inline-grid grid-cols-12 gap-0 ...'>
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
        </>
    )
}

export default MemoryGame