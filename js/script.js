var playlist = document.querySelector('ul.tracklist');
var track = document.getElementsByTagName('li').length;

playlist.addEventListener('click', function(e){
	e.preventDefault();

	var songName = e.target.getAttribute('data-src');
	for (var i = 0; i < track; i++) {
		if (document.getElementsByTagName('li')[i].getAttribute('data-src')===songName){
			break;
		}
	};

	var Jukebox = document.querySelector('#player')

	if( Jukebox ){
		if(songName===Jukebox.getAttribute('src')){
			if(Jukebox.paused){
			Jukebox.play();
			e.target.id = 'playing';

		} else  {
			Jukebox.pause();
			e.target.id = 'paused';
		}

	}	else{
			Jukebox.src = songName;
			Jukebox.play();
			if(document.querySelector('#playing')){
				document.querySelector('#playing').id = '';
			}
		}
	}
		else {
		var Jukebox = document.createElement('audio');
		Jukebox.id = 'player';
		e.target.id = 'playing';
		Jukebox.src = songName;
		document.body.appendChild(Jukebox);
		Jukebox.play();
		}
});

document.getElementById("add").onclick = function() {
    var text = document.getElementById("upload").value;
		var songs = document.getElementById("list")

		text = text.split('\\');
		text = text.pop();

    songs.append(text);
}
