const inputBox = document.getElementById("search-box");
const tastlist = document.getElementById("tastlist");

function addTask() {
    if (inputBox.value === '') {
        alert("you must add the task");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        tastlist.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    retaindata();
}
tastlist.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("check");
        retaindata();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        retaindata();
    }
}, false);
function retaindata() {
    localStorage.setItem("data", tastlist.innerHTML)
}
function showtask() {
    tastlist.innerHTML = localStorage.getItem("data");

}
showtask();