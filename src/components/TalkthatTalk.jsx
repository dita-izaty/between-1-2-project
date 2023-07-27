import React from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import tw12 from '../assets/2129.png'

function TalkthatTalk() {
    let navigate = useNavigate();
    return (
        <>
            <Header />
            {/* Start - Window Mockup */}
            <div class="mockup-window content-center border bg-base-300 outline-double outline-neon-magenta">
                {/* Window Board */}
                <div class="flex items-start justify-center px-4 py-5 bg-momo">
                    {/* Board Content */}
                    <div class="card lg:card-side bg-base-100">
                        {/* Youtube Video */}
                        <figure>
                            <iframe width="560" height="310" src="https://www.youtube.com/embed/k6jqx9kZgPM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </figure>
                        {/* Title Text */}
                        <div class="card-body card-normal">
                            <h2 class="text-3xl items-center font-neue tracking-wide text-neon-magenta">TWICE NEW ALBUM IS RELEASED!!</h2>
                            <p class="items-center font-varela text-sm tracking-wide text-dub ">Watch the MV and let's talk about that..
                                <p>Tell me everything and let me know about the mv and the song.. Tell me what you want ~~</p>
                            </p>
                            {/* Button */}
                            <div class="py-4">
                                <button class="px-4 w-full font-varela outline outline-2 outline-offset-2 text-jeong hover:outline-dashed hover:bg-apricot hover:text-pink-500">
                                    <a href="https://www.youtube.com/watch?v=k6jqx9kZgPM&list=OLAK5uy_nNgxv_Lb9t9-t6Yhwv1Lfw3GAOPRfl0WY" target="_blank" class="antialiased md:subpixel-antialiased">It sounds so good, show me more 😍</a>
                                </button>
                            </div>

                            <div class="">
                                <button class="px-4 w-full font-varela outline outline-2 outline-offset-2 text-jeong hover:outline-dashed hover:bg-apricot hover:text-pink-500" href="" target="_blank">
                                    <a href="https://youtube.com/playlist?list=PLy9cJbD6gV2m-5AuLH18xmBHHieV4GS_3" target="_blank">I like it, makes me fall deeper with TWICE 🍭</a>
                                </button>
                            </div>

                            <div class="py-4">
                                <button class="px-4 w-full font-varela outline outline-2 outline-offset-2 text-jeong hover:outline-dashed hover:bg-apricot hover:text-pink-500">
                                    <a href="https://open.spotify.com/album/3NZ94nQbqimcu2i71qhc4f?si=-UV0I2moRF6LMU3Hwuauig" target="_blank">This has to be my fav song, want it more 🤩</a>
                                </button>
                            </div>

                            <div class="">
                                <button class="px-4 w-full font-varela outline outline-2 outline-offset-2 text-jeong hover:outline-dashed hover:bg-apricot hover:text-pink-500">
                                    <a href="https://www.tiktok.com/@twice_tiktok_official" target="_blank">Can't stop and just replay replay 🥳</a>
                                </button>
                            </div>

                            <div class="py-4">
                                <button class="px-4 w-full font-varela outline outline-2 outline-offset-2 text-jeong hover:outline-dashed hover:bg-apricot hover:text-pink-500">
                                    <a href="https://youtube.com/playlist?list=PLyo6W3g1j4QYag-QY_Im0OYoHijdxiXmb" target="_blank" class="antialiased md:subpixel-antialiased">Just 1 word talk that talk L-O-V-E 🥰</a>
                                </button>
                            </div>

                            <div class="">
                                <button class="px-4 w-full font-varela outline outline-2 outline-offset-2 text-jeong hover:outline-dashed hover:bg-apricot hover:text-pink-500">
                                    <a href="https://twitter.com/JYPETWICE" target="_blank">I like it all, 1 to 10 and A to Z 👏</a>
                                </button>
                            </div>

                            <div class="py-4">
                                <button class="px-4 w-full font-varela outline outline-2 outline-offset-2 text-jeong hover:outline-dashed hover:bg-apricot hover:text-pink-500">
                                    <a href="https://www.instagram.com/twicetagram/" target="_blank">Pretty nice, I like it all 👍</a>
                                </button>
                            </div>

                            <div class="text-center py-6 text-nay hover:text-neon-magenta font-monologue text-2xl font-normal tracking-widest">
                                <button onClick={() => {navigate("/twiceland");} }>
                                    <p class="underline decoration-wavy underline-offset-8">VISIT TWICeLaND</p>
                                </button>
                            </div>
                        </div>
                        
                        

                    </div>
                </div>
            </div>
        </>
  )
}

export default TalkthatTalk