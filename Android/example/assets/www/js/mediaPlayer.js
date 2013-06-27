function onLoad() {
        	document.addEventListener("deviceready", onDeviceReady, true);
        };
 //Launches ChildBrowser
 	   function login(web) {
        	var ref = window.open(web, '_parent', 'location=yes');
       }
       function onDeviceReady() {
            //HeadsetWatcher.watch(callback);
           
       }

       
       // Audio player
       //
       var my_media = null;
       var mediaTimer = null;
	   
       // Play audio
       //
       function playAudio(src) {
           // Create Media object from src
          
                       
           my_media = new Media(src, onSuccess, onError);

           // Play audio
           my_media.play();
           
           // Update my_media position every second
           if (mediaTimer == null) {
               mediaTimer = setInterval(function() {
                    // get my_media position
                    my_media.getCurrentPosition(
                        // success callback
                        function(position) {
                            if (position > -1) {
                                setAudioPosition((position) + " sec");
                            }
                        },
                        // error callback
                        function(e) {
                            console.log("Error getting pos=" + e);
                            setAudioPosition("Error: " + e);
                        }
                    );
                }, 1000);
            }
        }

        // Stop audio
        // 
        function stopAudio() {
            if (my_media) {
                my_media.stop();
                my_media.release();
            }
            clearInterval(mediaTimer);
            mediaTimer = null;
        	playing = false;
        }

        // onSuccess Callback
        //
        function onSuccess() {
            // alert("playAudio():Audio Success");
            play=document.getElementById('playStop');
            play.src="file:///android_asset/www/cory/pla.png"
            togle = '1';
        }

        // onError Callback 
        //
        function onError(error) {
            //alert('code: '    + error.code    + '\n' +      'message: ' + error.message + '\n');
            play=document.getElementById('playStop');
            play.src="file:///android_asset/www/cory/pla.png";
            setTimeout(function() { play.src="file:///android_asset/www/cory/pla.png"; }, 12000);
            togle = '1';
        }
        

        // Set audio position
        // 
        function setAudioPosition(position) {
            document.getElementById('audio_position').innerHTML = position;
        }
        