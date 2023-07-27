import React from 'react'
import { useNavigate } from 'react-router-dom'
import dir from '../assets/dir.png'
import b12 from '../assets/b12.png'
import ttt from '../assets/ttt.png'
import ot9 from '../assets/ot9.png'

function Navbar() {
    let navigate = useNavigate();
    return (
        <>
            <div class="navbar bg-white py-5">
                <div class="navbar-start">
                    <a href="https://twitter.com/ditaizaty" class="btn btn-ghost" target="_blank">
                        <img src={dir} class="w-12 h-12" alt="Let's be friends" />
                    </a>
                </div>
                <div class="navbar-end lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li>
                            <button onClick={() => {navigate("/between1and2");} }>
                                <a>
                                    <img src={b12} class="w-9 h-9" alt="I LOVE YOU" />
                                </a>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => {navigate("/talkthattalk");} }>
                                <a>
                                    <img src={ttt} class="w-9 h-9" alt="Tell Me Know" />
                                </a>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => {navigate("/twiceland");} }>
                                <a>
                                    <img src={ot9} class="w-9 h-9" alt="One In A Million" />
                                </a>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>        
        </>
    )
}

export default Navbar