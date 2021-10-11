// const colorBtn = document.querySelector(".colorBtn");
// const bodyBg = document.querySelector("body");

// const colors = ["green","yellow","red","cyan","blue","grey",,];

// colorBtn.addEventListener("click", changeColor);

// function changeColor(){
//     // bodyBg.style.backgroundColor = colors[0];
//     let randomColor = Math.ceil(Math.random()*colors.length);
//     bodyBg.style.backgroundColor = colors[randomColor];
// }


const colorBtn = document.getElementById('colorBtn');
const bodyBgColor = document.querySelector('body');

colorsElement = ['grey','blue','green','tomato','red','cyan','yellow'];

colorBtn.addEventListener('click',function(){
    // console.log('some one clicked me! ');
    // bodyBgColor.style.backgroundColor = 'green';
    const randomColor = Math.floor(Math.random()*colorsElement.length);
    bodyBgColor.style.backgroundColor = colorsElement[randomColor];
});



