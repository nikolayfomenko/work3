//Земля
function createEarth(x,y,width,height) {
let div = document.createElement("div");
	document.body.appendChild(div);
	div.style.position = "absolute";
	div.style.width =width + '%';
	div.style.height =height + '%';
	div.style.border = '1px solid';
	div.style.left=x + "%";
	div.style.top=y +"%";
	div.style.background='cyan';
}

//первый шар




function createBall(left,top,width,height,color){
	let div2 = document.createElement("div");
	document.body.appendChild(div2);
	div2.style.position = "absolute";

	div2.style.left=left + "px";
	div2.style.top=top + "px";

	div2.style.width = width + 'px';
	div2.style.height = height + 'px';
	
	div2.style.border = '1px solid';
	div2.style.borderRadius = "50%";
	div2.style.background= color;
	

}



/*
	createBall(650,200,200,200)
	createBall(700,100,100,100)
*/