function onDeviceReady()
	{
    	PhoneListener.start(onPhoneStateChanged,onError);
    	// or...
    	// PhoneListener.stop(onSuccess,onError);
	}

	function onPhoneStateChanged(phoneState) 
	{
	    switch (phoneState) {
	        case "RINGING":
	            Pause();
	            break;
	        case "OFFHOOK":
	            console.log('Phone is off the hook.');
	            break;
	        case "IDLE":
	            playAudio('http://media3.csusb.edu/');
    	        break;
       		 default:
       		     // no default...
   		 }
	}

	function onError(error) {
    	// do something...
	}
	function onSuccess() {
	    // do something else...
	}