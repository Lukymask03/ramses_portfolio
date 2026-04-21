const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("visible");
				observer.unobserve(entry.target);
			}
		});
	},
	{ threshold: 0.2 }
);

reveals.forEach((el) => observer.observe(el));

const contactToggle = document.querySelector(".contact-toggle");
const contactMenu = document.querySelector(".contact-menu");

if (contactToggle && contactMenu) {
	const closeMenu = () => {
		contactMenu.classList.remove("open");
		contactToggle.setAttribute("aria-expanded", "false");
		contactMenu.setAttribute("aria-hidden", "true");
	};

	const openMenu = () => {
		contactMenu.classList.add("open");
		contactToggle.setAttribute("aria-expanded", "true");
		contactMenu.setAttribute("aria-hidden", "false");
	};

	contactToggle.addEventListener("click", (event) => {
		event.stopPropagation();
		const isOpen = contactMenu.classList.contains("open");
		if (isOpen) {
			closeMenu();
			return;
		}
		openMenu();
	});

	document.addEventListener("click", (event) => {
		if (!contactMenu.contains(event.target)) {
			closeMenu();
		}
	});

	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape") {
			closeMenu();
		}
	});
}
