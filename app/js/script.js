const hamburger = document.querySelector(".hamburger");
const showNavbar = document.querySelector(".navbar");
const bodyOverflow = document.querySelector(".body");
const closeNav = document.querySelectorAll(".navbar__link");
const formInput = document.querySelectorAll(".form-input");

// form label turn small on click
formInput.forEach((i) => {
	const formLabel = document.querySelectorAll(".form-label");
	formLabel.forEach((label) => {
		i.addEventListener("click", () => {
			label.style.fontSize = "12px";
		});
	});
});

// close navbar after a click
closeNav.forEach((i) => {
	i.addEventListener("click", () => {
		showNavbar.classList.remove("show-navbar");
		bodyOverflow.classList.remove("bodyOverflow");
		hamburger.classList.remove("active");
	});
});

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
			header.classList.add("shadow");
		}

		if (lastScrollY < 100){
			header.classList.remove("shadow");
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
