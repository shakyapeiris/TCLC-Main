const head = document.querySelector(".op");
const tl = new TimelineMax();

tl.fromTo(head, 2, {height:"89vh", opacity:1}, {height:0,opacity:0});

function scrollAppear(){
    var introText = document.querySelector('.counter2');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight/1.3;

    if (introPosition<screenPosition){
        introText.classList.add('intro-appear')
    }
}

function scrollAppear2(){
    var introText = document.querySelector('.counter');
    var pIntro = document.querySelector('.abcont');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight/1.3;

    if (introPosition<screenPosition){
        introText.classList.add('intro-appear2');
        pIntro.classList.add('ab-ef');
    }
}

window.addEventListener('scroll', scrollAppear)
window.addEventListener('scroll', scrollAppear2)