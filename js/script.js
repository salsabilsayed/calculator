const input = document.querySelector('input');
const buttons = document.querySelectorAll('.grid-item');
const resetBtn = document.querySelector('.reset-btn');
const deleteBtn = document.querySelector('.del-btn');
const equalBtn = document.querySelector('.equal-btn');
const toggle = document.querySelector('.toggle');
const circleToggle = document.querySelector('.circle-toggle');
const head = document.querySelector('head');
let newStyle;
let newStyle2;


function displayValue(){
    buttons.forEach(btn => {
        btn.addEventListener('click', e => {
            if(e.target.innerHTML != 'RESET' && e.target.innerHTML != 'DEL' && e.target.innerHTML != '='){
                let btnValue = e.target.innerHTML;
                input.value += btnValue;
            }
           
        })
    })
}

displayValue();


////////// reset function

function reset(){
    input.value = '';
}

resetBtn.addEventListener('click',reset);

///////// delete function 

function deleteOperation(){

    const inputValue = input.value.split('');
    inputValue.pop();
    input.value = inputValue.join('');
}

deleteBtn.addEventListener('click', deleteOperation);

/////////// operations function

function operations(){
    if(input.value.includes('+')){
        const values = input.value.split('+');
        
            input.value = Number(values[0]) + Number(values[1]);
    }
    else if(input.value.includes('-')){
        const values = input.value.split('-');
        input.value = Number(values[0]) - Number(values[1]);
    }
    else if(input.value.includes('x')){
        const values = input.value.split('x');
        input.value = Number(values[0]) * Number(values[1]);
    }
    else if(input.value.includes('/')){
        const values = input.value.split('/');
        if(values[1]== 0){
            alert('can not divide by zero')
        }else{
            input.value = Number(values[0]) / Number(values[1]);
        }
    }

    
}

equalBtn.addEventListener('click',operations);

/////////// toggle function

function changeTheme(){
    
    if(circleToggle.style.transform != 'translateX(20px)' && circleToggle.style.transform != 'translateX(40px)'){
        circleToggle.style.transform = 'translateX(20px)';
        newStyle = document.createElement('link');
        newStyle.setAttribute('href','css/light.css');
        newStyle.setAttribute('rel','stylesheet');
        head.appendChild(newStyle);
    }
    else if(circleToggle.style.transform != 'translateX(40px)'){
        circleToggle.style.transform = 'translateX(40px)';
        newStyle2 = document.createElement('link');
        newStyle2.setAttribute('href','css/dark.css');
        newStyle2.setAttribute('rel','stylesheet');
        head.appendChild(newStyle2);
    }
    else if(circleToggle.style.transform = 'translateX(40px)'){
        circleToggle.style.transform = 'translateX(0px)';
        newStyle.remove();
        newStyle2.remove();
    }
   
}

toggle.addEventListener('click', changeTheme)