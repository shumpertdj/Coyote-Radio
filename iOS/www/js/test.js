$(document).ready(function() {
	adwithurl("test.txt");
	setInterval('adwithurl("test.txt")', 10000);
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
	var URL= new Array();
	var AD = new Array();
	

	b = data.split('~');
	
	for(var k= 0; k < b.length; k++){
		var ex = " ";
		ex = b[k];
		AD.push(ex);
		++k;
		ex = b[k];
		URL.push(ex);
	}
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
           type: 'GET',
           url: 'coyoteradioartist.json',
           dataType: 'json',
           error: function (data){
           console.log("no");
           },
           success: function (data){
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

