import React, {useState, useEffect} from 'react'
import MemoryGame from './memoryGame'
import { Slider } from '@mui/material';
import { Box } from '@mui/system';
import Online from './Online'
import { Frame } from './Frame';

const  MemoryStart= (props) => {
    const [areaDecided, setAreaDecided] = useState(false)
    const [online, setOnline] = useState(false)
    const [steps, setSteps] = useState(4)
    const [value, setValue] = useState(40)
    const [gridSize, setGridSize] = useState(0)
    const [grid, setGrid] = useState([])
    const [gridCls, setGridCls] = useState('inline-grid grid-cols-10 gap-0 mb-10 mr-10 ...')
    let buttoncls = ' m-2 w-24 rounded-full pl-6 bg-cyan-400 pr-10 pt-1 pb-1 hover:scale-125 duration-200'
    const handleSelection= (selected) => {
        selected == 'online' ? setOnline(true) :  setOnline(false)
        setAreaDecided(true)
    }
    useEffect(() => {
        if(gridSize != value) {
            setGridSize(value)
            let render = []
            for(let i = 0; i < value; i ++){
                render.push({e: ''})
            }
            setGrid(render)
            console.log('grid')
        }
    })


    const handleDecision = () => {
        setAreaDecided(!areaDecided)
    }


    const slideChange = (event, newValue) => {
        if (typeof newValue === 'number') {
          setValue(newValue);
        }
        let newStep = newValue < 24 ? 4 : newValue < 36 ? 6 : newValue < 48 ? 12 : newValue < 80 ? 8 : 10
        let newSteps = newValue > 90 ? 12 : newValue > 81 ? false : 10
        setGridCls('inline-grid grid-cols-10 gap-0 mb-10 mr-10 ...')
        if(newValue > 81){
            let cls = newValue < 96 ? 'inline-grid grid-cols-11 gap-0 mb-10 mr-10 ...'
                    :  'inline-grid grid-cols-12 gap-0 mb-10 mr-10 ...'
            setGridCls(cls)
        }
        if(!newSteps){setValue(88)} else {setSteps(newSteps)}
        
        console.log(newSteps)

      };


    return (
        <div class=' bg-slate-900 h-screen flex items-center flex flex-col'>
            {areaDecided 
            ? online ? <Online handleDecision={handleDecision}/>: <MemoryGame gridSize={value} gridCls={gridCls}/>
            :

            <div class=' flex flex-col h-96 flex items-center '>
                <button class={buttoncls}onClick={() => handleSelection('local')}>Local</button>
                <button class={buttoncls}onClick={() => handleSelection('online')}>Online</button>
                <Box width={200}>
                    <Slider
                    defaultValue={value}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    value={value}
                    onChange={slideChange}
                    step={steps}
                    min={60}
                    max={108}
                    />
                </Box>
                <div class={gridCls}>
                {grid.map((e) => {
                    return(
                        <Frame 
                        picture={e}
                        reveal={false}
                        turn={true}
                        clss={e}
                        />
                    )
                })}
                
            </div>
            
            
            </div>}
            
        </div>
    )
}
export default MemoryStart

