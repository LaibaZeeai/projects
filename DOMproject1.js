const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
//buttons[2].style.backgroundColor = 'blue';
buttons.forEach(function (button){
     button.addEventListener('click',function(e){
    //    console.log(e);
        // console.log(e.target);
        if(e.target.id ==='grey'){
            body.style.backgroundColor = e.target.id;}
        if(e.target.id ==='white'){
            body.style.backgroundColor = e.target.id;}
        if(e.target.id ==='blue'){
            body.style.backgroundColor = e.target.id;}
        if(e.target.id ==='violet'){
            body.style.backgroundColor = e.target.id;}    
        
    }) 
});