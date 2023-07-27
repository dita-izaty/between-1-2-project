import React from 'react'
import Header from './Header'

function Twiceland() {
  return (
    <>
        <Header />
        <div class="card card-normal w-120 bg-gradient-to-r from-jyo to-sana outline-double outline-neon-magenta">           
            <figure>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Q4Rb5_kjS2M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </figure>   
            <div class="card-body card-normal">
                <div class="py-2">
                    <button class="px-4 w-full font-varela font-semibold outline outline-2 outline-offset-2 text-tzu hover:outline-dashed hover:bg-apricot hover:text-chae">
                        <a href="https://twice.jype.com/" target="_blank" class="antialiased md:subpixel-antialiased">TWICE Site </a>
                    </button>
                </div>

                <button class="px-4 w-full font-varela font-semibold outline outline-2 outline-offset-2 text-tzu hover:outline-dashed hover:bg-apricot hover:text-chae">
                    <a href="https://youtube.com/playlist?list=PLyo6W3g1j4QYag-QY_Im0OYoHijdxiXmb" target="_blank" class="antialiased md:subpixel-antialiased">"The Real TWICE" Documentary </a>
                </button>
                
                <div class="py-2">
                    <button class="px-4 w-full font-varela font-semibold outline outline-2 outline-offset-2 text-tzu hover:outline-dashed hover:bg-apricot hover:text-chae">
                        <a href="https://twiceguide.crd.co/" target="_blank" class="antialiased md:subpixel-antialiased">Guide to TWICE</a>
                     </button>
                </div>

                <button class="px-4 w-full font-varela font-semibold outline outline-2 outline-offset-2 text-tzu hover:outline-dashed hover:bg-apricot hover:text-chae">
                    <a href="https://www.youtube.com/c/twice" target="_blank" class="antialiased md:subpixel-antialiased">TWICE Videos </a>
                </button>
                
                <div class="py-2">
                    <button class="px-4 w-full font-varela font-semibold outline outline-2 outline-offset-2 text-tzu hover:outline-dashed hover:bg-apricot hover:text-chae">
                        <a href="https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0?si=BmulRCBwSWCrgbhs-IZb0A" target="_blank" class="antialiased md:subpixel-antialiased">TWICE Music</a>
                    </button>
                </div>

                <figure class="px-4 w-full justify-center p-5">
                    <img src="https://jypfanscdn.azureedge.net/portal/TWICE_Fan_s_cover_1100x350(1).jpg" alt="TWICE" />
                </figure>
            </div>
        </div>
        
        
    </>
    
  )
}

export default Twiceland