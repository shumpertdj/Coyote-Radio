		var togle='1';
		var play;
		var Audio;
		var playing = false;	

		window.onload=function() {
	   		play=document.getElementById('playStop');
			document.getElementById('Play').onclick=function() {
	   			toggle();
   				return false;
  			};
 		};
 		function toggle(){
			if(togle=='1'){
				setTimeout(function() { play.src="file:///android_asset/www/cory/stop2.png"; }, 13000);
				setTimeout(function() { playing = true; }, 13000);
				play.src="file:///android_asset/www/cory/loader.gif";
				playAudio('http://media3.csusb.edu/');  			
   				togle='0';				
 			}
			else if(togle='0' && playing == true) {
				togle='1';
   				play.src="file:///android_asset/www/cory/play2.png";
   				stopAudio();
  			}
 		};