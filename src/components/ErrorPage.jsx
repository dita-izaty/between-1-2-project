import React from 'react'
import error from '../assets/cat.png'
import { useNavigate } from 'react-router-dom'

function ErrorPage() {
    let navigate = useNavigate();
    return (
        <div class="error bg-indigo-900 relative overflow-hidden h-screen">
            <img src={error} class="absolute h-full w-full object-cover"/>
            <div class="inset-0 bg-black opacity-25 absolute">
            </div>
            <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
                <div class="w-full font-mono flex flex-col items-center relative z-10">
                    <h1 class="font-bold font-neue text-5xl text-center tracking-widest leading-tight mt-4 text-black">
                        Looks like you've found the doorway to the great nothing!
                    </h1>
                    <button onClick={() => {navigate("/talkthattalk");} }>
                        <p class="underline decoration-double underline-offset-8 py-9 font-mont text-3xl text-jyo hover:text-pinky">Go to there!</p>
                    </button>
                    <p class="font-extrabold text-8xl my-9 animate-bounce">
                        404
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage