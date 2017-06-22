// keyCode/letter hash
var code = 
{
	65: "a",	66: "b",	67: "c",	68: "d",	69: "e",	70: "f",
	71: "g",	72: "h",	73: "i",	74: "j",	75: "k",	76: "l",
	77: "m",	78: "n",	79: "o",	80: "p",	81: "q",	82: "r",
	83: "s",	84: "t",	85: "u",	86: "v",	87: "w",	88: "x",
	89: "y",	90: "z"
};

// generates images and sound players
for(i=65; i<(65+Object.keys(code).length); i++){	
	var image = document.createElement("img");
	image.setAttribute("id", "img_"+code[i]);
	image.setAttribute("src", "images/"+code[i]+".png");

	var sound = document.createElement("audio");
	sound.setAttribute("id", code[i]);

	var sound_source = document.createElement("source");
	sound_source.setAttribute("src", "sounds/"+code[i]+".mp3");
	sound_source.setAttribute("type", "audio/mpeg");

	if(i>=65 && i<=73){
		document.getElementById("row1").appendChild(image);
	}else if(i>=74 && i<=82){
		document.getElementById("row2").appendChild(image);
	}else{
		document.getElementById("row3").appendChild(image);
	}

	document.body.appendChild(sound);
	sound.appendChild(sound_source);
}

// adds events(sound effect and fade animation) on keys from a to z
document.addEventListener("keydown", function(e){
	document.getElementById(code[e.keyCode]).play();
	var fadeTime = 600; // fade duration in milliseconds
	document.getElementById("img_"+code[e.keyCode]).classList.toggle("selected");
	setTimeout(function(){
		document.getElementById("img_"+code[e.keyCode]).classList.toggle("selected");
	}, fadeTime);
});