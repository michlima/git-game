import React from 'react'
import { GiAbstract069 } from "react-icons/gi";
import { Link } from 'react-router-dom';


const TopBar = (props) => {
    return(
        <div>
            <div class=' bg-slate-200 h-14 p-1 flex flex-row border-2 border-b-blue-900 ...'>
                <Link to='/'>
                    <GiAbstract069 size={40} class=' hover:animate-spin'/>
                </Link>
                <h2 class='mt-1 ml-2'>migames</h2>
            </div>
        </div>
    )
}
export default TopBar