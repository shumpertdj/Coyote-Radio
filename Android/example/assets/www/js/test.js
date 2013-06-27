$(document).ready(function() {
	adwithurl("file:///android_asset/www/test.txt");
	setInterval('adwithurl("file:///android_asset/www/test.txt")', 10000);
});


function adwithurl(path)
{
	$.ajax({type: "GET", url: path, dataType: "text", success: tryhard});

}

	
var i = 0;
var j = 0;	
	

function tryhard(text)
{
	
	var b, ads;
	data = text;
	evo = text;
	/*var URL= new Array(3);
	URL[0]= " ";
	URL[1]= " ";
	URL[2]= " ";
	var AD= new Array(3);
	AD[0]= " ";
	AD[1]= " ";
	AD[2]= " ";
	*/
	var URL= new Array();
	var AD = new Array();
	

	b = data.split('~');
	
	for(var k= 0; k < b.length; k++){
		var ex = " ";
		ex = b[k];
		AD.push(ex);
		k++;
		ex = b[k];
		URL.push(ex);
	}
	
	/*
	AD[0] = b[0];
	URL[0] = b[1];
	AD[1] = b[2];
	URL[1] = b[3];
	AD[2] = b[4];
	URL[2] = b[5];
	*/
	ads=document.getElementById('ad');
	ads.src= AD[i];
	document.getElementById('adUrl').onclick=function() {
   			login(URL[j]);
    		return false;
  	};
  	i++;
	j++;
	if(i == AD.length){
		i = 0;
		j = 0;
		}
}


function artistBio(){
    $.ajax({
           url: file:///android_asset/www/coyoteradioartist.txt,
           dataType: 'json',
           error: function (data){
           console.log("no");
           },
           success: function (data){
           console.log("yes");
           var artistcheck = false;
           var artistPlaying = "";
           artistPlaying = document.getElementById('currentArtist').innerHTML;
           var test = "";
           $.each(data, function(i,item){
                  if(i == artistPlaying)
                  $.each(item, function(k, t){
                         test = t.bio;
                         navigator.notification.alert(test, check(), artistPlaying, "Back To The Music!");
                         artistcheck = true;
                         });
                  });
           if(artistcheck == false){
                    console.log(artistPlaying);
                    navigator.notification.alert("No artist bio available", check(), artistPlaying, "Back To The Music!");
           }
           }
           });

}

function check(){
    // Nada
}

function openArtist(){
    artistBio();
}