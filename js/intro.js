var end = view.bounds.width;
var fromTop = view.bounds.height - 300;

var topCorner = new Point(0, fromTop);
var bottomCorner = new Point(0,view.bounds.height);


var path = new Path({		
	fillColor: {
		gradient: {
			stops: ['#ccc','#fff','#aaa']
		},
		origin: topCorner,
		destination: bottomCorner	
	}
});	


path.add(topCorner); 
path.add(new Point(end,fromTop));
path.add(new Point(end,view.bounds.height));
path.add(bottomCorner);
path.closed = true;


// The amount of snowflakes we want to make:
var count = 30;


// Create Snowflake shapes
var snowflake = new Path.Star({
	center: new Point(view.center),
	points: 10,
	radius1: 5,
	radius2: 10,
	strokeColor: '#fff'
});


var snowflakeTwo = new Path.Star({
	center: new Point(view.center),
	points: 5,
	radius1: 3,
	radius2: 7,
	strokeColor: '#fff',
	shadowColor: new Color(255,255,255),
	shadowBlur: 10,
	shadowOffset: new Point(1,1)
	
});




var symbol = new Symbol(snowflake);
console.log(symbol);
console.log(symbol.definition);

var symbolTwo = new Symbol(snowflakeTwo);

for(var i = 0; i < count; i++) {
	var center = [Point.random().x*view.size.width, Point.random().y*view.size.height];			
	var placedSymbol = symbol.place(center);
	placedSymbol.scale(i/count);
	

	var centerTwo = [Point.random().x*view.size.width, Point.random().y*view.size.height];			
	var placedSymbolTwo = symbolTwo.place(centerTwo);
	placedSymbolTwo.scale(i/count);			
} 


onFrame = function(event) {
	for(var i = 1; i < count * 2; i++) {		
		
		var item = project.activeLayer.children[i];

		item.position.y += item.bounds.height/15;
		
		if(item.bounds.bottom > view.size.height) {
			item.position.y = -item.bounds.height;
		}	
	}
}
view.draw(); 

