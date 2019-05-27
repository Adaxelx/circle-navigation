let spans = document.querySelectorAll('span')
const h1 = document.querySelector('.title')
const section2 = document.querySelector('section:nth-of-type(2)')
const p = document.querySelector('.word')


let i,index;
let scrollX = 0;
let w = 0;
const words = [
    'Start',
    'About',
    'Kontakt'
]

/* dodać zmiany słów przy scrollowaniu */

let word = [];
let spanTags = []

const createIndex = () => {
    if(scrollY>0 && scrollY<section2.offsetHeight-150) {
        index = 0;
    } else if (scrollY > section2.offsetHeight - 150 && scrollY < section2.offsetHeight - 150 + section2.offsetTop){
        index = 1;
    }else if (scrollY > section2.offsetHeight - 150 + section2.offsetTop){
        index = 2;
    }
    console.log(index)
}

const animateWord = (x) => {
    i=0
    spans.forEach((span) => {
        span.style.transform = `rotate(${i * 30}deg) translateY(${x}%`;
        i++;
    })
}
const showWord = () => {
    h1.style.transform = `translateY(${(scrollY)}px) translateX(0px)`
    animateWord(0);
}
const hideWord = () => {
    h1.style.transform = `translateY(${(scrollY)}px) translateX(-10px)`
    animateWord(75);
}

const changeWord = () => {
    createIndex();
    word = [];
    for(let j =0;j<words[index].length;j++){
        word[j] = words[index][j];
    }
    p.innerHTML = '';
    const spanArr = word.map(letter => `<span>${letter}</span>`)
    p.innerHTML = `${spanArr}`
    spans = document.querySelectorAll('span')
}

const checkWord = () => {
    if (scrollY > section2.offsetHeight - 150 && scrollY< section2.offsetHeight - 50 ){}
}

animateWord(0);

const handleScroll = () => {
    const scrollY = window.scrollY;
    h1.style.transform = `translateY(${(scrollY)}px)`
    if(scrollY>50){
        hideWord()
    }
    else{
        showWord()
    }if(scrollY>section2.offsetTop-50){
        showWord();
    }
    if(scrollY > section2.offsetTop+50){
        hideWord();
    }
    if (scrollY > (section2.offsetTop*2)-50){
        showWord();
    }
}


window.addEventListener('scroll', handleScroll)
