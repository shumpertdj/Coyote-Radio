document.addEventListener("offline", function() {
                          alert("No internet connection. App disabled untill internet connection is reconnected");
                          document.getElementById("tryHard").onclick = null;
                          document.getElementById("tryHard1").onclick = null;
                          document.getElementById("tryHard2").onclick = null;
                          document.getElementById("tryHard3").onclick = null;
                          document.getElementById("tryHard4").onclick = null;
                          document.getElementById("Play").onclick = null;
                          }, false);
                          
    
//Hides divs
 		function hide(status){
 			if (status =="hidden") {
 				document.getElementById("in").style.display ="none";
 				document.getElementById("se").style.display ="block";
 				document.getElementById("contact").style.display ="none";
 			}
 			else if (status =="contact"){
 				document.getElementById("in").style.display ="none";
 				document.getElementById("se").style.display ="none";
 				document.getElementById("contact").style.display ="block";
 			}
 			else {
 				document.getElementById("in").style.display ="block";
 				document.getElementById("se").style.display ="none";
 				document.getElementById("contact").style.display ="none";
 			}
 		}