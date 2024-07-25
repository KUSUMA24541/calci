
function handleclick(param){
    if(param== '+'|| param=='%'|| param=='/'|| param=='*'|| param=='-' || param=='.'){
        document.getElementById("typed").innerHTML += param;
        document.getElementById("typing").innerHTML = '';
    }
    else{
        document.getElementById("typed").innerHTML += param;
        document.getElementById("typing").innerHTML += param;
    }
}
function result(){
    let value = eval (document.getElementById ('typed').innerHTML)
    document.getElementById("typing").innerHTML = value
}
function C(){
    document.getElementById("typing").innerHTML = '0'
}
function CE(){
    document.getElementById("typing").innerHTML = '0'
    document.getElementById("typed").innerHTML = ''
}


let col = "dark";
function mode(){
    if(col === "dark"){
        dark()
    }
    else{
        light()
    }
}


function dark(){
    document.getElementById("calci").style.backgroundColor="rgb(7, 29, 4)"
    document.getElementById("typed").style.color="white"
    document.getElementById("typing").style.color="white"
    document.getElementById("mode").style.backgroundColor="white"
    col="light"

}

function light(){
    document.getElementById("calci").style.backgroundColor="white"
    document.getElementById("typed").style.color="black"
    document.getElementById("typing").style.color="black"
    document.getElementById("mode").style.backgroundColor="black"
    col="dark"
}