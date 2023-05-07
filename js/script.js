let counter = 0;
let scrolling = false;

function play_sound(sound_name) {
    let audio = new Audio();
    audio.preload = 'auto';
    audio.src = 'Sounds/' + sound_name;
    audio.play();
}


function redirect(url) {
    play_sound('click.mp3')
    window.open(url, '_blank').focus();
}


function scroll_to_up() {
    play_sound('click.mp3')
    window.scrollTo({top:0,behavior:"smooth"})
}
