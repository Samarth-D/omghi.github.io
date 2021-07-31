//Create a reference for canvas 
canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d");
//Give specific height and width to the car image
greencar_width=75;
greencar_height=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencar_x=5;
greencar_y=225;
function add() {
	//upload car, and background images on the canvas.
	ImgTag_background=new Image();
ImgTag_background.onload=upload_bg;
ImgTag_background.src=parkingLot.jpg;
ImgTag_car=new Image();
ImgTag_car.onload=upload_car;
ImgTag_car.src=car2.png;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
ctx.drawImage(ImgTag.background, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(ImgTag.car, greencar_y, greencar_x, greencar_width, greencar_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car
	if(rover_y>=0)
    {
        rover_y-= 10;
        console.log("when up arrow is pressed x = " + rover_x + " y =  " + rover_y);
        upload_bg();
        upload_rvr();
    }

}

function down()
{
	//Define function to move the car downward
	if(rover_y<=300)
    {
        rover_y+= 10;
        console.log("when up arrow is pressed x = " + rover_x + " y =  " + rover_y);
        upload_bg();
        upload_rvr();
    }

}

function left()
{
	//Define function to move the car left side
	if(rover_x>=0)
    {
        rover_x-= 10;
        console.log("when up arrow is pressed x = " + rover_x + " y =  " + rover_y);
        upload_bg();
        upload_rvr();
	}
}

function right()
{
	//Define function to move the car right side
	if(rover_x<=725)
    {
        rover_x+= 10;
        console.log("when up arrow is pressed x = " + rover_x + " y =  " + rover_y);
        upload_bg();
        upload_rvr();
	}
}