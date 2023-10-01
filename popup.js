const btn = document.getElementById("btn");
const modelbox = document.getElementById("modelbox")

// btn.addEventListener("click", ()=>{
//     overlay.style.display = "inline-block";

// })

btn.addEventListener("click", myFunction);

function myFunction() {
    modelbox.style.display = "inline-block"
}

function closeModel(){
    modelbox.style.display = "none"
}
