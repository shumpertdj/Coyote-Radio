function onLoad() {
                document.addEventListener("deviceready", onDeviceReady, true);
            };

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
            };