console.log("Welcome to Music Play");
let songindex=0;
let audioelement1=new Audio('https://cdn.glitch.global/0cecac80-7ef7-4c1a-951f-10ccd133059f/Ranjha%20-%20Shershaah%20128%20Kbps.mp3?v=1689936314265');
let audioelement2=new Audio('https://cdn.glitch.global/0cecac80-7ef7-4c1a-951f-10ccd133059f/Jab%20Tak%20(M%20S%20Dhoni%20-%20The%20Untold%20Story)%20128.mp3?v=1689936315636');
let audioelement3=new Audio('https://cdn.glitch.global/0cecac80-7ef7-4c1a-951f-10ccd133059f/Tum%20Hi%20Ho.mp3?v=1689936373341');
let audioelement4=new Audio('https://cdn.glitch.global/0cecac80-7ef7-4c1a-951f-10ccd133059f/Tere%20Vaaste%20Zara%20Hatke%20Zara%20Bachke%20128%20Kbps.mp3?v=1689936330665');
let audioelement5=new Audio('https://cdn.glitch.global/0cecac80-7ef7-4c1a-951f-10ccd133059f/Kesariya(PagalWorld.com.se).mp3?v=1689936360244');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let songitems=Array.from(document.getElementsByClassName('songitem'));



//audioelement.play();

//handle play/pause click
let song1=document.getElementById('songItemPlay1')
let song2=document.getElementById('songItemPlay2');
let song3=document.getElementById('songItemPlay3');
let song4=document.getElementById('songItemPlay4');
let song5=document.getElementById('songItemPlay5');
//handle play/pause click
song1.addEventListener('click',()=>{
    if(audioelement1.paused || audioelement1.currentTime<=0 ){
        audioelement1.play();
        audioelement2.pause();
        song2.classList.add('fa-play-circle');
        audioelement3.pause();
        song3.classList.add('fa-play-circle');
        audioelement4.pause();
        song4.classList.add('fa-play-circle');
        audioelement5.pause();
        song5.classList.add('fa-play-circle');
        song1.classList.remove('fa-play-circle');
        song1.classList.add('fa-pause-circle');
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        masterplay.addEventListener('click',()=>{
            if(audioelement1.paused || audioelement1.currentTime<=0){
                audioelement1.play();
                audioelement2.pause();
                audioelement3.pause();
                audioelement4.pause();
                audioelement5.pause();
                masterplay.classList.remove('fa-play-circle');
                masterplay.classList.add('fa-pause-circle');
                gif.style.opacity=1;
                    audioelement2.currentTime=0;
            }
            else{
                audioelement1.pause();
                masterplay.classList.remove('fa-pause-circle');
                masterplay.classList.add('fa-play-circle');
                gif.style.opacity=0;
            }
        })
        
        
    }
    else{
        audioelement1.pause();
        song1.classList.remove('fa-pause-circle');
        song1.classList.add('fa-play-circle');
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
        masterplay.addEventListener('click',()=>{
            if(audioelement1.paused || audioelement1.currentTime<=0){
                audioelement1.play();
                audioelement2.pause();
                audioelement3.pause();
                audioelement4.pause();
                audioelement5.pause();
                masterplay.classList.remove('fa-play-circle');
                masterplay.classList.add('fa-pause-circle');
                gif.style.opacity=1;
            }
            else{
                audioelement1.pause();
                masterplay.classList.remove('fa-pause-circle');
                masterplay.classList.add('fa-play-circle');
                gif.style.opacity=0;
            }
        })
    }
})
song2.addEventListener('click',()=>{
    if(audioelement2.paused || audioelement2.currentTime<=0){
        audioelement2.play();
        audioelement1.pause();
        song1.classList.add('fa-play-circle');
        audioelement3.pause();
        song3.classList.add('fa-play-circle');
        audioelement4.pause();
        song4.classList.add('fa-play-circle');
        audioelement5.pause();
        song5.classList.add('fa-play-circle');
        song2.classList.remove('fa-play-circle');
        song2.classList.add('fa-pause-circle');
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
            audioelement2.currentTime=0;
        masterplay.addEventListener('click',()=>{
                if(audioelement2.paused || audioelement2.currentTime<=0){
                    audioelement2.play();
                    audioelement1.pause();
                    audioelement3.pause();
                    audioelement4.pause();
                    audioelement5.pause();
                    masterplay.classList.remove('fa-play-circle');
                    masterplay.classList.add('fa-pause-circle');
                    gif.style.opacity=1;
                }
                else{
                    audioelement2.pause();
                    masterplay.classList.remove('fa-pause-circle');
                    masterplay.classList.add('fa-play-circle');
                    gif.style.opacity=0;
                }
            })
    }
    else{
        audioelement2.pause();
        song2.classList.remove('fa-pause-circle');
        song2.classList.add('fa-play-circle');
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
song3.addEventListener('click',()=>{
    if(audioelement3.paused || audioelement3.currentTime<=0){
        audioelement3.play();
        audioelement2.pause();
        song2.classList.add('fa-play-circle');
        audioelement1.pause();
        song1.classList.add('fa-play-circle');
        audioelement4.pause();
        song4.classList.add('fa-play-circle');
        audioelement5.pause();
        song5.classList.add('fa-play-circle');
        song3.classList.remove('fa-play-circle');
        song3.classList.add('fa-pause-circle');
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
            audioelement3.currentTime=0;
        masterplay.addEventListener('click',()=>{
            if(audioelement3.paused || audioelement3.currentTime<=0){
                audioelement3.play();
                audioelement1.pause();
                audioelement2.pause();
                audioelement4.pause();
                audioelement5.pause();
                masterplay.classList.remove('fa-play-circle');
                masterplay.classList.add('fa-pause-circle');
                gif.style.opacity=1;
            }
            else{
                audioelement3.pause();
                masterplay.classList.remove('fa-pause-circle');
                masterplay.classList.add('fa-play-circle');
                gif.style.opacity=0;
            }
        })

    }
    else{
        audioelement3.pause();
        song3.classList.remove('fa-pause-circle');
        song3.classList.add('fa-play-circle');
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
song4.addEventListener('click',()=>{
    if(audioelement4.paused || audioelement4.currentTime<=0){
        audioelement4.play();
        audioelement2.pause();
        song2.classList.add('fa-play-circle');
        audioelement3.pause();
        song3.classList.add('fa-play-circle');
        audioelement1.pause();
        song1.classList.add('fa-play-circle');
        audioelement5.pause();
        song5.classList.add('fa-play-circle');
        song4.classList.remove('fa-play-circle');
        song4.classList.add('fa-pause-circle');
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
            audioelement4.currentTime=0;
        masterplay.addEventListener('click',()=>{
            if(audioelement4.paused || audioelement4.currentTime<=0){
                audioelement4.play();
                audioelement1.pause();
                audioelement2.pause();
                audioelement3.pause();
                audioelement5.pause();
                masterplay.classList.remove('fa-play-circle');
                masterplay.classList.add('fa-pause-circle');
                gif.style.opacity=1;
            }
            else{
                audioelement4.pause();
                masterplay.classList.remove('fa-pause-circle');
                masterplay.classList.add('fa-play-circle');
                gif.style.opacity=0;
            }
        })
    }
    else{
        audioelement4.pause();
        song4.classList.remove('fa-pause-circle');
        song4.classList.add('fa-play-circle');
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
song5.addEventListener('click',()=>{
    if(audioelement5.paused || audioelement5.currentTime<=0){
        audioelement5.play();
        audioelement2.pause();
        song2.classList.add('fa-play-circle');
        audioelement3.pause();
        song3.classList.add('fa-play-circle');
        audioelement4.pause();
        song4.classList.add('fa-play-circle');
        audioelement1.pause();
        song1.classList.add('fa-play-circle');
        song5.classList.remove('fa-play-circle');
        song5.classList.add('fa-pause-circle');
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
            audioelement5.currentTime=0;
        masterplay.addEventListener('click',()=>{
            if(audioelement5.paused || audioelement5.currentTime<=0){
                audioelement5.play();
                audioelement1.pause();
                audioelement2.pause();
                audioelement3.pause();
                audioelement4.pause();
                masterplay.classList.remove('fa-play-circle');
                masterplay.classList.add('fa-pause-circle');
                gif.style.opacity=1;
            }
            else{
                audioelement5.pause();
                masterplay.classList.remove('fa-pause-circle');
                masterplay.classList.add('fa-play-circle');
                gif.style.opacity=0;
            }
        })
    }
    else{
        audioelement5.pause();
        song5.classList.remove('fa-pause-circle');
        song5.classList.add('fa-play-circle');
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
if(song1){

audioelement1.addEventListener('timeupdate',()=>{
   
progress=parseInt((audioelement1.currentTime/audioelement1.duration)*100);
myprogressbar.value=progress;
})
myprogressbar.addEventListener('change',()=>{
    audioelement1.currentTime=myprogressbar.value*audioelement1.duration/100;
})


}
if(song2){
    
    audioelement2.addEventListener('timeupdate',()=>{
        
        progress=parseInt((audioelement2.currentTime/audioelement2.duration)*100);
        myprogressbar.value=progress;
        })
        myprogressbar.addEventListener('change',()=>{
            audioelement2.currentTime=myprogressbar.value*audioelement2.duration/100;
        })
}
if(song3){
    
    audioelement3.addEventListener('timeupdate',()=>{
   
        progress=parseInt((audioelement3.currentTime/audioelement3.duration)*100);
        myprogressbar.value=progress;
        })
        myprogressbar.addEventListener('change',()=>{
            audioelement3.currentTime=myprogressbar.value*audioelement3.duration/100;
        })
}
if(song4){
    
    audioelement4.addEventListener('timeupdate',()=>{
   
        progress=parseInt((audioelement4.currentTime/audioelement4.duration)*100);
        myprogressbar.value=progress;
        })
        myprogressbar.addEventListener('change',()=>{
            audioelement4.currentTime=myprogressbar.value*audioelement4.duration/100;
        })
}
if(song5){
    
    audioelement5.addEventListener('timeupdate',()=>{
   
        progress=parseInt((audioelement5.currentTime/audioelement5.duration)*100);
        myprogressbar.value=progress;
        })
        myprogressbar.addEventListener('change',()=>{
            audioelement5.currentTime=myprogressbar.value*audioelement5.duration/100;
        })
}