// function calculator(val){

//      document.getElementById("display").value += val;
// }
// function solution (){
//   let solution = eval(document.getElementById("display").value);
//   document.getElementById("display").value=solution;
// }

function calculator(val){
  document.getElementById("display").innerText += val;
}
function show(){
  

   let expression = document.getElementById("display").innerText;
  expression = expression.replace(/%/g, '/100');

  let sol = eval(expression);
  document.getElementById("display").innerText=sol;

}
function clearDisplay() {
  document.getElementById("display").innerText = "";
}

function deleteLast() {
  let display = document.getElementById("display");
  display.innerText = display.innerText.slice(0, -1);
}