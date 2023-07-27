import React from 'react'
import { useNavigate } from 'react-router-dom'

function Between1and2() {
    let navigate = useNavigate();
    return (
        <div class="py-0 ">
            <div class="mockup-code border bg-base-300 outline-double outline-neon-magenta">
                <pre data-prefix="$" class="type text-start text-sm text-nay "><code>ttt create twice-once@1020.1103</code></pre> 
                    
                <pre data-prefix="$" class="type1 text-start text-sm text-nay"><code>dir jype twice/once between-1-2-project</code></pre>
                    
                <pre data-prefix="$" class="type2 text-start text-sm text-nay"><code>ttt cd between-1-2-project</code></pre>
                    
                <pre data-prefix="$" class="type3 text-start text-sm text-nay"><code>ttt install</code></pre>
                    
                <pre data-prefix=">" class="type5 text-jeong text-sm text-start"><code>beep beep beep beep beep...</code></pre>
                
                <pre data-prefix=">" class="type5 text-jeong text-sm text-start"><code>[###220826-installing]......</code></pre> 
                    
                <pre data-prefix=">" class="type6 text-sm text-start"><code>Done!</code></pre>
                    
                <pre data-prefix="$" class="type7 text-sm text-start text-nay"><code>ttt run inyou</code></pre>

                <pre class="type7 text-center py-5 text-apricot hover:text-neon-magenta font-monologue text-xl font-normal tracking-widest">
                    <button onClick={() => {navigate("/talkthattalk");} }> OPeN TWICe-ONCe PR0JeCT</button>
                </pre>
            </div>
        </div>   
    )
}

export default Between1and2