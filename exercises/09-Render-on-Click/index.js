let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
    //your code here
    const myDiv = document.createElement("div");
    myDiv.innerHTML = "Hello World";
    myDiv.style.background = "yellow";
    document.body.appendChild(myDiv);
});