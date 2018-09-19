document.getElementById("menuButton").addEventListener("click", function () {
	let navBar = document.getElementsByTagName("nav")[0];

	if (navBar.style.display === "none") {
		navBar.style.display = "block";
	} else {
		navBar.style.display = "none";
	}
});