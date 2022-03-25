const hamburger = document.querySelector(".hamburger");
const showNavbar = document.querySelector(".navbar");
const bodyOverflow = document.querySelector(".body");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	showNavbar.classList.toggle("show-navbar");
	bodyOverflow.classList.toggle("bodyOverflow");
});

// check for saved 'darkMode' in localStorage
let blueMode = localStorage.getItem("blueMode");
const Toggle = document.querySelector(".toggle");

const enableBlueMode = () => {
	// 1. Add the class to the body
	document.body.classList.add("dark_blue_theme");
	// 2. Update darkMode in localStorage
	localStorage.setItem("blueMode", "enabled");
};

const disableBlueMode = () => {
	// 1. Remove the class from the body
	document.body.classList.remove("dark_blue_theme");
	// 2. Update darkMode in localStorage
	localStorage.setItem("blueMode", null);
};

// If the user already visited and enabled darkMode
// start things off with it on
if (blueMode === "enabled") {
	enableBlueMode();
}

// When someone clicks the button
Toggle.addEventListener("click", () => {
	// get their darkMode setting
	blueMode = localStorage.getItem("blueMode");

	// if it not current enabled, enable it
	if (blueMode !== "enabled") {
		enableBlueMode();
		// if it has been enabled, turn it off
	} else {
		disableBlueMode();
	}
});

// Enable hidden nav bar
{
	const header = document.querySelector(".header");
	let lastScrollY = window.scrollY;

	window.addEventListener("scroll", () => {
		if (lastScrollY < window.scrollY) {
			header.classList.add("header-hidden");
		} else {
			header.classList.remove("header-hidden");
		}

		lastScrollY = window.scrollY;
	});
}

// preloader
window.addEventListener("load", () => {
	const loader = document.querySelector(".preloader");

	loader.classList.add("preloader--hidden");

	loader.addEventListener("transitionend", () => {
		document.body.removeChild(preloader);
	});
});
