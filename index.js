// //console.log("I like pizza")
// let count =0;
// document.getElementById("decreaseBtn").onclick = function(){
//     count-=1;
//     document.getElementById("countLabel").innerHTML = count;
// }
// document.getElementById("increaseBtn").onclick = function(){
//     count+=1;
//     document.getElementById("countLabel").innerHTML = count;

// }
// document.getElementById("resetBtn").onclick = function(){
//     count = 0;
//     document.getElementById("countLabel").innerHTML = count;
// }
let temp = 0;
document.getElementById("submitButton").onclick = function(){
    let temp = document.getElementById("textBox").value;
    temp= Number(temp);

    if(document.getElementById("cButton").checked){
       temp = toCelcious(temp);
       document.getElementById("tempLabel").innerHTML = temp + "°C"
    }
    else if (document.getElementById("fButton").checked){
       temp = toFahrenheit(temp);
       document.getElementById("tempLabel").innerHTML = temp + "°F"
    }
    else {
        console("you need to chose a conversion method")
    }
}

function toCelcious(temp){
    return (temp -32)*(5/9);
}

function toFahrenheit(temp){
    return temp*9/5+32;
}