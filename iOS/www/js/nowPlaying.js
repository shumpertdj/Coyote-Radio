//usePDCBanner = true;
freq = [];
evo = "";

$(document).ready(function() {
                  document.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);
	getNowPlaying("http://coyoteradio.csusb.edu/feed/nowplaying.txt");
	setInterval('getNowPlaying("http://coyoteradio.csusb.edu/feed/nowplaying.txt")', 5000);
	$("div.band").css("margin-top", "0");
	//scheduleLogic();
});

function getNowPlaying(path)
{
	$.ajax({type: "GET", url: path, dataType: "text", success: logic});

}

function logic(text)
{
	var a, artist, song, nsong, nartist, data;
	data = text;
	evo = text;
	
	// Create a new p element to properly display the dynamic content
	/*playing = document.createElement('p');
	playing.className = "now";
	played = document.createElement('p');
	played.className = "prev";
	hr = document.createElement('hr');*/

	// Separate text string into artist and song and put it inside array 'a'
	a = data.split('~');
	var tick = /\d{2}:\d{2}:\d{2}/

	// As of now there are 3 items in the array: song name, artist, length in time format: hh:mm:ss
	song = a[0];
	artist = a[1];
	nsong = a[2].replace(tick, "");
	nartist = a[3];
	
	// Update the text node from the new p element
		document.getElementById('currentSong').innerHTML = song;
		document.getElementById('currentArtist').innerHTML = artist;
		document.getElementById('nextSong').innerHTML = nsong;
		document.getElementById('nextArtist').innerHTML = nartist + "    ";
	if(document.getElementById('currentSong').innerHTML != song || document.getElementById('currentArtist').innerHTML != artist){
		Liveclear();	
		document.getElementById('currentSong').innerHTML = song;
		document.getElementById('currentSong').innerHTML = artist;
		document.getElementById('nextSong').innerHTML = nsong;
		document.getElementById('nextSong').innerHTML = nartist;
	}
}
