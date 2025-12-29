function registerNavFunctions(nav) {
	nav.addEventListener("click", (e) => {
		let clickerTab = e.target.closest(".tab");
		if (clickerTab == null) {
			return;
		}

		nav.querySelectorAll(".selected").forEach((tab) => {
			tab.classList.remove("selected");
		});

		clickerTab.classList.add("selected");
	});
}

let mainEl = document.querySelector("main");
let visibleMainContent = mainEl.querySelector(".visible-main-content");

function setMainContent(el) {
	visibleMainContent.innerHTML = "";
	visibleMainContent.append(el);
}

function getSettingsPage() {
	let template = mainEl.querySelector(".settings-tab-template").content;
	return template.querySelector(".settings").cloneNode(true);
}

function getHomePage() {
	let template = mainEl.querySelector(".home-tab-template").content;
	return template.querySelector(".toggleContainer").cloneNode(true);
}

if (visibleMainContent.innerText.trim() == "") {
	setMainContent(getHomePage());
}

let mainTab = document.querySelector(".main-tab");
registerNavFunctions(mainTab);

mainTab.querySelector(".main-tab .home-tab").addEventListener("click", () => {
	setMainContent(getHomePage());
});

mainTab.querySelector(".main-tab .settings-tab").addEventListener("click", () => {
	setMainContent(getSettingsPage());
});


