var DISPLAY = getElement("display");
var input = "";
var result = 0;
var operator;
var error = false;
var dot = false;
function getElement(id){
  return document.getElementById(id);
}

function toggleNumber(number){
  if(number == '0' && input * 1 == 0){
    input = 0;
  }
  else{
    if(input == 0) {
      input = number;
    }
    else {
      input += number;
    }
  }
  DISPLAY.innerHTML = input;
}
function doOperation(op){
  if(!operator){
    result += input*1;
    input = "";
    operator = op;
  }
  else{
    printResult();
    operator = op;
  }
  dot = false;
}
function clearDisplay() {
  dot = false;
  result = 0;
  input = '';
  operator = '';
  DISPLAY.innerHTML = '0';
}
function changeChar() {
  input *= -1;
  DISPLAY.innerHTML = input;
}
function addDot() {
  if(dot == false){
    if(input == ''){
      input = 0;
    }
    input += '.';
    dot = true;
  }
  DISPLAY.innerHTML = input;
}
function printResult(){
  if(operator == '%') {
    result *= 0.01;
    result *= input;
  }
  else if(operator == '+'){
    result += input*1;
  }
  else if(operator == '-'){
    result -= input*1;
  }
  else if(operator == 'x'){
    result *= input*1;
  }
  else if(operator == '/'){
    if(input == '0'){
      error = true;
    }
    else{
      result /= input*1;
    }
  }
  if(error == true) {
    dot = false;
    result = 0;
    input = '';
    operator = '';
    error = false;
    DISPLAY.innerHTML = 'error';
  }
  else {
    DISPLAY.innerHTML = result;
  }
  input = "";
  dot = false;
}
