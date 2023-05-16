const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');


    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation ='none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './Images/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
    }

}, 10);

document.addEventListener('keydown', jump)
