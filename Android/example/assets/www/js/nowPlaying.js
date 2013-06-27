//usePDCBanner = true;
freq = [];
evo = "";

$(document).ready(function() {
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
		document.getElementById('nextSong').innerHTML = nsong + "  ";
		document.getElementById('nextArtist').innerHTML = nartist;
	if(document.getElementById('currentSong').innerHTML != song || document.getElementById('currentArtist').innerHTML != artist){
		Liveclear();	
		document.getElementById('currentSong').innerHTML = song;
		document.getElementById('currentSong').innerHTML = artist;
		document.getElementById('nextSong').innerHTML = nsong+ "  ";
		document.getElementById('nextSong').innerHTML = nartist;
	}
}

function attachSong(xml)
{
	var nowBand = $(xml).find("now").find("band");
	var prevBand = $(xml).find("previous").find("band");
	$("#nowPlayingBg").append('<p class="now">' + $(nowBand).find("song").text() + ' by ' + $(nowBand).find("name").text() + '</p>');
	$("#nowPlayingBg").append('<p class="prev"><span class="la">Previous</span>' + $(prevBand).find("song").text() + ' by ' + $(prevBand).find("name").text() + '</p>');
}

function Liveclear()
{
	$("#nowPlayingBg").text("");
}

function getLocalBands(path)
{
	$.ajax({type: "GET", url: path, dataType: "xml", success: attachBands});
}

// This function is for displaying a pool of random local bands
function attachBands(xml)
{
	var selection = [];
	var pot = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
	var choice = pot;
	for (var j = 0; j < 3; j++)
	{
		var num = Math.floor(Math.random() * choice.length);
		selection.push(choice[num]);
		choice37 = choice.splice(num, 1);
	}
	var bands = $(xml).find("band");
	var first = selection[0], second = selection[1], third = selection[2];
	$("#localBandsBg").append('<p><a href="' + $(bands[first].lastElementChild).text() + '">' + $(bands[first].firstElementChild).text() + '</a></p>');
	$("#localBandsBg").append('<p><a href="' + $(bands[second].lastElementChild).text() + '">' + $(bands[second].firstElementChild).text() + '</a></p>');
	$("#localBandsBg").append('<p><a href="' + $(bands[third].lastElementChild).text() + '">' + $(bands[third].firstElementChild).text() + '</a></p>');
}

function getTextFile(path)
{
	// Define variables
	var playing, played, a, artist, song, lsong, lartist;
	
	// Create a new p element to properly display the dynamic content
	playing = document.createElement('p');
	playing.className = "now";
	played = document.createElement('p');
	played.className = "prev";

	// Load text file and attach contents to the text node of the new p element
	$(playing).load(path);


	// Separate text string into artist and song and put it inside array 'a'
	a = playing.textContent.split('~');

	// As of now there are 3 items in the array: song name, artist, length in time format: hh:mm:ss
	song = a[0];
	artist = a[1];
	
	// Create copies of now playing which will be used as the last played song and artist
	if (freq[0] === undefined)
	{
		freq.push(song);
		freq.push(artist);
	}
	else if (freq[0] != song && freq[1] != artist)
	{
		freq.push(song);
		freq.push(artist);
	}

	if (freq[2] === undefined)
	{
		lsong = song;
		lartist = artist;
	}
	else
	{
		lsong = freq[2];
		lartist = freq[3];
	}
	// Update the text node from the new p element

	$(playing).text(song + " by " + artist);
	$(played).text(lsong + " by " + lartist);
	$("div#nowPlayingBg").append(playing);
	$("div#nowPlayingBg").append(played);
}

function winNow()
{
	// Check for the various File API support.
	if (window.File && window.FileReader && window.FileList && window.Blob) {
	  // Great success! All the File APIs are supported.
	} else {
	  alert('The File APIs are not fully supported in this browser.');
	}
}
/*
function scheduleLogic()
{
	"use strict";
	var pattern = /tabs-[0-9]/;
	
	// Get current Date
	var d = new Date;
	var Day = [0, "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
	var day = Day[d.getDay()];

	// Grab current date tab
	var cid = $($("li a:contains('"+ day +"')")[0]).attr("href");

	// Remove all active classes
	$("#hoverColor li").removeClass("ui-state-active ui-tabs-selected");

	// Add active class to current day
	$("li a:contains('"+ day +"')").parent().addClass("ui-state-active ui-tabs-selected");

	// Hide all tables with schedule content
	$("div").filter(function() {
		return this.id.match(pattern);
	}).addClass("ui-tabs-hide");

	// Add current day schedule to view or display current day schedule (English grammer in coding...)
	$("div#" + cid).removeClass("ui-tabs-hide");
}*/