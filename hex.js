const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn= document.getElementById('btn');
const cor = document.querySelector('.cor');

btn.addEventListener('click', function(){
    let hexCor='#';
    for(let i=0;i<6;i++){
        hexCor+=hex[getRandomNum()] 
    }
 cor.textContent= hexCor;
 document.body.style.backgroundColor=hexCor;
});

function getRandomNum(){
    return Math.floor(Math.random()*hex.length)
}