const cores = ["Red","Grey","Lightblue","Pink","Orange","Black","White","Green","Yellow","Purple","Beige","Aqua"];
const btn = document.getElementById('btn');
const cor= document.querySelector('.cor');

btn.addEventListener('click',function(){
    const randomNum = getRandomNum();
    console.log(randomNum);
    document.body.style.backgroundColor = cores[randomNum];
    cor.textContent = cores[randomNum];
});

function getRandomNum(){
    return Math.floor(Math.random()*cores.length);
}