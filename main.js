const addition = (a,b) => a+b;
const substract = (a,b) => a-b;
const divide = (a,b) => a/b;
const multiplay = (a,b) => a*b;
const percent = (a) => a/100;
function operate(a,operator, b){
    switch(operator){
        case "+":
        return addition(a,b)
        case "-":
        return substract(a,b);
        case "/":
        return divide(a,b);
        case "*":
        return multiplay(a,b); 
        case "%": 
        return percent(a);     
        default: "asdas";
    }
}
function isNumber(){
    let reg = /^\d+$/;
    reg.test(display.value)? true : display.value = "";
}
function addDot(){
    display.value.includes(".")? false: display.value+= ".";
}

const para = document.querySelector("p");
const btnNumb = document.querySelectorAll(".btnNumber")
let display = document.querySelector("input");
display.addEventListener("input",isNumber)
btnNumb.forEach(num => {    //display number 
    num.addEventListener("click", function(){
            display.value += num.dataset.key
            para.textContent =""
    })
});
const tab = [];
const btnOperate = document.querySelectorAll(".btnOperate");
btnOperate.forEach(operator =>{
    operator.addEventListener("click", function(){
        if(display.value.length == 0)
        {
            para.textContent = "Error" // error when user clicking = * / etc
        }
        else{
            if(tab.length == 0){  // 
                if(operator.dataset.key == "%"){
                    display.value = percent(display.value)
                }
                else if(operator.dataset.key == "."){
                    addDot();
                }
                else{
                    let action = {
                        numA: Number(display.value),
                        operator: operator.dataset.key
                    }
                    tab.push(action);
                    display.value = ""
                }    
            }
            else{
                if(Number(display.value) == 0 && tab[0].operator == "/"){
                    para.textContent = "Don't divide by zero Ok?"
                }else{
                    let numb = operate(tab[0].numA, tab[0].operator, Number(display.value))
                    display.value = Math.round(numb*100)/100;
                    tab.shift();
                }
            }   
        }    
    }) 
})
const btnClear = document.querySelector(".btnClear")
btnClear.addEventListener("click", clearInput)
function clearInput(){ 
    display.value = "";
    tab.splice(0,tab.length);
    para.textContent = "";
}

