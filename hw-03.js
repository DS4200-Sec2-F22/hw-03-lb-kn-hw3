// shows text and hides button
function ShowText(elementID, buttonID) {

	// gets text div by Id, replaces hidden display with inline
	let text = document.getElementById(elementID);
	text.classList.remove("hide-display");
	text.classList.add("inline-display");

	// gets button by Id, hides display
	let button = document.getElementById(buttonID);
	button.classList.add("hide-display");

}