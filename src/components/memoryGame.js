import React, {useState, useEffect} from 'react'
import Icon from "react-icons/ai";
import data from './memoryPics'
import Frame from './Frame'

const MemoryGame = (props) => {
    
    const [pics, setPics] = useState([])
    const [init, setInit] = useState(true)

    useEffect(() => {
        if(init){
            let puzzle = []
            for(let i = 0; i < data.length;i++){
                puzzle.push({
                    id: i + 1,
                    picture: data[i],
                    visibility: false,
                })
                puzzle.push({
                    id: (i * -1) - 1,
                    picture: data[i],
                    visibility: false,
                })
            }
            setPics(puzzle)
            console.log(puzzle)
            setInit(false)
        }
    })

    const reveal = (id) => {
        console.log(id)
        let puzzle = []
        for(let i = 0; i < pics.length; i++){
            if(pics[i].id == id){
                puzzle.push({
                    id: pics[i].id,
                    picture: pics[i].picture,
                    visibility: true,
                })
            } else {
                puzzle.push(pics[i])
            }
        }    
        setPics(puzzle)
        console.log(puzzle)
    }

    return(
        <>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
            <div class='inline-grid grid-cols-10 gap-0 ...'>
                {pics.map((e) => {
                    return(
                        <Frame 
                        picture={e}
                        reveal={reveal}/>
                    )
                })}
            </div>
        </>
    )
}

export default MemoryGame