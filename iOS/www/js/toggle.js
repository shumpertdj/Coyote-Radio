var togle=1;
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
                if(togle == 1){
                    setTimeout(function() { play.src="brandon/stop.png"; }, 8000);
                    togle=3;
                    setTimeout(function() { playing = true; } , 8000);
                    play.src="brandon/loader.gif";
                    playStream();
                    togle=0;
                }
                else if(playing == true){
                    play.src="brandon/play.png";
                    Pause();
                    togle='1';
                    playing = false;
                }
                else{
                    //
                }
            };