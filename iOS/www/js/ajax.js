var http = createRequestObject();
function createRequestObject() {
   var xmlhttp;
   var browser = navigator.appName;
   if(window.XMLHttpRequest){
   xmlhttp = new XMLHttpRequest();
   }
      
   else{
   xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      
   }
   return xmlhttp;
}

function getNewContent(){
   http.open('get','http://coyoteradio.csusb.edu/feed/nowplaying.txt');
   http.onreadystatechange = updateNewContent;
   http.send(null);
   return false;
}

function updateNewContent(){
   if(http.readyState == 4){
      document.getElementById('mySentence').innerHTML = http.responseText;
   }
}