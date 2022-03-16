const btt = document.querySelector("#back-to-top");
window.addEventListener(
	"scroll",
	() => {
		let scrollTop = window.scrollY;
		if (scrollTop > scrollTop / 3) {
			//btt.className='visible'
			btt.classList.add("visible");
		} else {
			btt.classList.remove("visible");
		}
	},
	false,
);

btt.addEventListener("click", function (e) {
	e.preventDefault();
	document.querySelector(btt.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
});
