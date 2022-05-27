let slider = document.querySelector('#audioPosition')
let end_value = document.querySelector('#end')
let time = document.querySelector('#time')
let play_btn = document.querySelector('#play')
let stop_btn = document.querySelector('#stop')
let audio = new Audio('music.mp3')
let audio_duration

let isSetTimePosition = false


audio.addEventListener('loadedmetadata', function(){
    audio_duration = audio.duration
    end_value.textContent = (audio_duration/60).toFixed(2)
    slider.setAttribute('max', audio_duration)
})
audio.addEventListener('timeupdate', function(){
    time.textContent = (audio.currentTime/60).toFixed(2)
    if(!isSetTimePosition){
        slider.value = audio.currentTime
    }
    
})
slider.addEventListener('input', function(){
    time.textContent =  (slider.value/60).toFixed(2)
})
slider.addEventListener('mousedown', function(){
    isSetTimePosition = true
})
slider.addEventListener('mouseup', function(){
    isSetTimePosition = false
    audio.currentTime = slider.value
})

play_btn.addEventListener('click', function(){
    audio.play()
})
stop_btn.addEventListener('click', function(){
    audio.pause()
    audio.currentTime = 0
})

mute_btn.addEventListener('click', function(){
         audio.muted = !audio.muted
})