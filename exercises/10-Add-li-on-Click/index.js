let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
    //your code here

    let lista = document.querySelector("#myList")
    let li = document.createElement("li");
    li.innerHTML = "Forth element"
    lista.appendChild(li);
});