document.addEventListener("offline", function() {
                          alert("No internet connection. App disabled untill internet connection is reconnected");
                          document.getElementById("tryHard").onclick = null;
                          document.getElementById("tryHard1").onclick = null;
                          document.getElementById("tryHard2").onclick = null;
                          document.getElementById("tryHard3").onclick = null;
                          document.getElementById("tryHard4").onclick = null;
                          document.getElementById("Play").onclick = null;
                          }, false);

            function login(web) {
                var ref = window.open(web, '_blank', 'location=no');
            }
            function onDeviceReady() {
                //
            }
            var myaudio = new Audio('http://media3.csusb.edu');
            
            function playStream(){
                if (myaudio == null){
                    var myaudio = new Audio('http://media3.csusb.edu');
                    this.myaudio.play();
                }
                else  {
                    
                    this.myaudio.play();
                }
            };
            function Pause(){
                myaudio.pause();
                myaudio=null;
                return myaudio = new Audio('http://media3.csusb.edu');
            }