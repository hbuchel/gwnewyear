var l = Snap('#laurenSVG');
var lauren = l.select('.lauren');


var rightArm = l.select('.right-arm');
var rightBottomArm = l.select('.right-lower-arm');

lauren.transform('scale(7)');

lauren.hover(laurenHoverIn,laurenHoverOut);

function laurenHoverIn() {
	
	rightArm.animate({
		transform: 'rotate(-15,7,6)'
	},300);
	rightBottomArm.animate({
		transform: 'rotate(-150,7.5,15)'
	},300);
	
}
function laurenHoverOut() {
	rightArm.animate({
		transform: 'rotate(0,7,6)'
	},300);
	rightBottomArm.animate({
		transform: 'rotate(0,7.5,15)'
	},300);
	
}


