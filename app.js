const input  = document.getElementById('input'),
submitBtn = document.getElementById('submit'),
hint = document.getElementById('hint'),
result = document.getElementById('result'),
refreshBtn = document.querySelector('.refresh');


let randomNumber = Math.floor(Math.random() * 10 + 1 );
let guessIn = 1

submitBtn.addEventListener('click',()=>{
    if(input.value == randomNumber){
        hint.innerHTML = `🥰congratulation`
        result.innerHTML = `🥰congratulation you guess in ${guessIn} time`
        result.classList.add('pop')
        refreshBtn.style.display= 'block'
    }
    else if(input.value < randomNumber){
        guessIn++
        hint.innerHTML = `guess a greater number`
    }
    else if(input.value > randomNumber){
        guessIn++
        hint.innerHTML = `guess a smaller number`
    }
    input.value = ''
    
})
refreshBtn.addEventListener('click',()=>{
    window.location.reload()
})