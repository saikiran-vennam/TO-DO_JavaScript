var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');

let details = [];


function showall(data) {
    for(let i=0; i<data.length; i++) {
        details.push(data[i]);
        var p = document.createElement("p");
        p.setAttribute("id", "task");
        if(data[i]['completed'] == true) {
            p.setAttribute("style", "color:green");
        }
        else {
            p.setAttribute("style", "color:red"); 
        }
        p.innerHTML = data[i]['title']
        var container = document.querySelector("#todos");
        container.appendChild(p);
    }
}
fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json()).then(data => {
    showall(data);
});

function fun1() {
    var h1 = document.getElementById('heading');
    h1.setAttribute("class", "showAll");
    h1.innerHTML = "Todo List - All";
    var d = document.getElementById("todos");
    d.innerHTML = "";
    fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json()).then(data => {
        showall(data);
});
}

function fun2() {
    var h1 = document.getElementById('heading');
    h1.setAttribute("class", "completed");
    h1.innerHTML = "Todo List - Completed";
    var d = document.getElementById("todos");
    d.innerHTML = "";
    fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json()).then(data => {
    for(let i=0; i<data.length; i++) {
        details.push(data[i]);
        var p = document.createElement("p");
        p.setAttribute("id", "task");
        if(data[i]['completed'] == true) {
            p.setAttribute("style", "color:green");
            p.innerHTML = data[i]['title']
            var container = document.querySelector("#todos");
            container.appendChild(p);
        }
    }
});
}

function fun3() {
    var h1 = document.getElementById('heading');                       // async
    h1.setAttribute("class", "pending");
    h1.innerHTML = "Todo List - Pending";
    var d = document.getElementById("todos");
    d.innerHTML = "";
    fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json()).then(data => {
    for(let i=0; i<data.length; i++) {
        details.push(data[i]);
        var p = document.createElement("p");
        p.setAttribute("id", "task");
        if(data[i]['completed'] == false) {
            p.setAttribute("style", "color:red");
            p.innerHTML = data[i]['title']
            var container = document.querySelector("#todos");
            container.appendChild(p);
        }
    }
});
}


btn1.addEventListener("click", fun1);
btn2.addEventListener("click", fun2);
btn3.addEventListener("click", fun3);