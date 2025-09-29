let div = document.getElementById("div");
let div2 = document.getElementById("div2");
div.addEventListener("click",() => {
	alert("Да, я")
})
div.addEventListener("click", (a)=>{});

const foo = () => {
	alert("Да, я 2")
}
div.removeEventListener("click", foo);

