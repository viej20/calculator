function add (x, y){
    x= parseFloat(x);
    y= parseFloat(y);
    return x+y;
}

function subtract (x, y){
    return x-y;
}

function multiply (x, y){
    return x*y;
}

function divide (x, y){
    return x/y;
}

function operate (number, operator, number2){
    switch(operator){
        case '+':
            return add(number, number2);
        break;
        
        case '-':
            return subtract(number, number2);
        break;

        case '/':
           return divide(number, number2);
        break;

        case '*':
            return multiply(number, number2);
        break;
        default:
            return "hmmm something ain't right here";
    }
}

function calculator (){
    const buttons = document.querySelectorAll('button');

    const screen = document.getElementById("screen");

    let currentScreenNum = screen.firstChild.textContent.trim();

    let num =0;

    let operator;

    buttons.forEach((button) => {
        button.addEventListener('click', () =>{
            const digit = button.textContent;
           currentScreenNum += digit;
           screen.firstChild.textContent+=digit;

            if(button.textContent == "+" || button.textContent == "-" || button.textContent == "*" || button.textContent == "/"){
                num = currentScreenNum;
                operator = num[num.length-1];
                num= num.substring(0, num.length -1);
                console.log(num);
                currentScreenNum = "";
            }
            console.log(currentScreenNum);

            if(button.textContent == "="){
                screen.firstChild.textContent="";
                currentScreenNum= currentScreenNum.substring(0, currentScreenNum.length-1);
                console.log("num: "+num);
                console.log("operator: " +operator);
                console.log("currentScreenNum: "+currentScreenNum);
                let result = operate(num, operator, currentScreenNum);
                screen.firstChild.textContent = result;
                currentScreenNum = result;
            }

            if(button.textContent == "CE"){
                screen.firstChild.textContent ="";
                currentScreenNum = 0;
                num = 0;
                operator = "";
            }

        });
    });

}

calculator();