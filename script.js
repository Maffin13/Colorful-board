const board = document.querySelector('.board');


let number = 506;

let colors = ['#ffc3a0', '#ffafbd', '#6dd5ed', '#2193b0', '#cc2b5e', '#753a88', '#42275a', '#734b6d', '#bdc3c7', '#2c3e50', '#de6262', '#ffb88c']

for (let i = 0; i<number; i++){
    let div = document.createElement('div');
    
    div.addEventListener('mouseover', () => {
        let color = randomColor();
        div.style.background = color;
        div.style.boxShadow = '0 0 2px #a27ac9'
    })
    
    div.addEventListener('mouseleave', () => {
        div.style.background = '#151529'
        div.style.boxShadow = '0 0 2px #151529'
    })
    
    
    div.classList.add('box')
     board.appendChild(div)
}


function randomColor() {
    let index = Math.floor(Math.random() * colors.length);
    return colors[index]
}