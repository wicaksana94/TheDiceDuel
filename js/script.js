//check for Navigation Timing API support
if (window.performance) {
  console.info("window.performance works fine on this browser");
}
  if (performance.navigation.type == 1) {
    console.info( "This page is reloaded" );
    RollingDice();
  } else {
    console.info( "This page is not reloaded" );
  }

function RollingDice() {
	let dice_1 = Math.floor(Math.random()*6)+1;
	// console.log("Dice 1 = "+dice_1);

	let dice_2 = Math.floor(Math.random()*6)+1;
	// console.log("Dice 2 = "+dice_2);

	let img_dice_1 = document.createElement('img'); 
	    img_dice_1.src = './images/'+dice_1+'.png';
	    document.getElementsByClassName('dice_1')[0].appendChild(img_dice_1);

	let img_dice_2 = document.createElement('img'); 
	    img_dice_2.src = './images/'+dice_2+'.png';
	    document.getElementsByClassName('dice_2')[0].appendChild(img_dice_2); 

	let dice_result;

	if (dice_1>dice_2) {
		dice_result = "Player 1 wins";
	} else if (dice_1<dice_2) {
		dice_result = "Player 2 wins";
	} else {
		dice_result = "Draw";
	}

	let final_result = document.getElementsByClassName("result");
	final_result[0].innerHTML = dice_result;
}