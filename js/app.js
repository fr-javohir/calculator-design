const switchBtn = document.querySelector('.circle')
const click = document.querySelector('.click')
const theme = document.querySelector('.theme')
const hero = document.querySelector('.hero')
const header = document.querySelector('header')
const screen = document.querySelector('.screen')
const main = document.querySelector('main')
const del = document.querySelector('.del')
const num = document.querySelectorAll('.number')
const equal = document.querySelector('.equal')
const reset = document.getElementById('reset')
const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')

let currentMode = 1




switchBtn.addEventListener('click', function(){
    if( currentMode == 1){
    theme.classList.add('two') 
    theme.classList.remove('three')
    hero.classList.add('hero-second')
    header.classList.add('header-second')
    click.classList.add('click-second')
    screen.classList.add('screen-second')
    main.classList.add('main-second')
    del.classList.add('del-second')
    reset.classList.add('reset-second')
    equal.classList.add('equal-second')
    num.forEach(function(color){
        color.classList.remove('number-third')
    })
    currentMode++
}else if(currentMode == 2){
    switchBtn.style.background = 'hsl(180, 64%, 49%)'
    theme.classList.add('three') 
    hero.classList.add('hero-third')
    header.classList.add('header-third')
    click.classList.add('click-third')
    screen.classList.add('screen-third')
    main.classList.add('main-third')
    del.classList.add('del-third')
    reset.classList.add('reset-third')
    equal.classList.add('equal-third')
    num.forEach(function(color){
        color.classList.add('number-third')
    })
    currentMode++
}else if(currentMode == 3){
    switchBtn.style.background = 'hsl(4,64%,49%)'
    theme.classList.remove('two')  
    theme.classList.remove('three') 
    theme.classList.add('one')
    hero.classList.remove('hero-second', 'hero-third')
    header.classList.remove('header-second', 'header-third')
    click.classList.remove('click-second', 'click-third')
    screen.classList.remove('screen-second', 'screen-third')
    main.classList.remove('main-second', 'main-third')
    del.classList.remove('del-second', 'del-third')
    reset.classList.remove('reset-second', 'reset-third')
    equal.classList.remove('equal-second', 'equal-third')
    num.forEach(function(color){
        color.classList.remove('number-third')
    })
    currentMode = 1
}

})





















// three.addEventListener('click', function(){
//     theme.classList.add('three')
// })
// one.addEventListener('click',function(){
//     theme.classList.remove('two')
//     theme.classList.remove('three')
//     theme.classList.add('one')
// })