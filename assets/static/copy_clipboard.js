function copy_to_clipboard(element1, element2) {
	var copied_text = document.getElementById(element1);
	navigator.clipboard.writeText(decodeURIComponent(copied_text.innerHTML));

	var tooltip = document.getElementById(element2);
	tooltip.innerHTML = 'Copied!';
}
function mouse_hover_out(element1) {
	var tooltip = document.getElementById(element1);
	tooltip.innerHTML = 'Copy to clipboard';
}
