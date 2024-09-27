// display condent inside a calculator screen
function displayContent(content){
    result.value += content

}
// clear condent
function clearCalScreen(){
    result.value=""
}

// result to get
 function displayResult(){
result.value=eval(result.value)
}
// remove last degit
 function removeLastDigit(){
    result.value=result.value.slice(0,-1)
 }