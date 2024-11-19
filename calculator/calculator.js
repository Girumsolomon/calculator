let display = document.getElementById('result');

function calculate(){
    try{
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
function toggleSign() {
    if (display.value.charAt(0) === '-') {
        display.value = display.value.slice(1);
    } else {
        display.value = '-' + display.value;
    }
}
document.querySelectorAll('input[type="button"]').forEach(button => {
    button.addEventListener('click', () => {
        let value = button.value;
        if(value==='C'){
            clearDisplay();
        }else if(value==='='){
            calculate();
        }else if(value==='x'){
            backspace();
        }else if(value==='+/-'){
            toggleSign();
        }else {
            update(value);
        }
       
    });
});
