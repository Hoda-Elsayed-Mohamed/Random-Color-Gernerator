let colorFul = document.querySelectorAll('.colored');

colorFul.forEach((num)=>{
    let c = '#'+Math.floor(Math.random()*16777215).toString(16);
    
        num.style.background  = c;
        num.innerHTML=c;

});
