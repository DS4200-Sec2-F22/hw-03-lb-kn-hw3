function ShowText(elementID) {
	document.getElementById(elementID).style.display="inline";
}

function RevealText(elementID) {
	elementID = elementID
	document.getElementById(elementID).onclick = function() {  
		ShowText(elementID)
	}
}