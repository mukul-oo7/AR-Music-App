let guitar = new Howl({
    src: ['./audio/guitar.mp3']
});

let drums = new Howl({
    src: ['./audio/drums.mp3']
});

let mic = new Howl({
    src: ['./audio/mic.mp3']
});

let piano = new Howl({
    src: ['./audio/piano.mp3']
});

let song = new Howl({
    src: ['./audio/song.mp3']
});

// guitar.play();
// drums.play();
// mic.play();
// piano.play();

window.onload = function(){
    let drumsMarker = document.getElementById('drumsMarker');
    let guitarMarker = document.getElementById('guitarMarker');
    let pianoMarker = document.getElementById('pianoMarker');
    let micMarker = document.getElementById('micMarker');

    drums.play();
    guitar.play();
    piano.play();
    mic.play();


    drumsMarker.addEventListener('markerFound', function(){
        drums.mute(false);
    });

    drumsMarker.addEventListener('markerLost', function(){
        drums.mute(true);
    });



    guitarMarker.addEventListener('markerFound', function(){
        guitar.mute(false);
        console.log('guitar found');
    });
    
    guitarMarker.addEventListener('markerLost', function(){
        guitar.mute(true);
        console.log('guitar lost');
    });


    pianoMarker.addEventListener('markerFound', function(){
        piano.mute(false);
    });

    pianoMarker.addEventListener('markerLost', function(){
        piano.mute(true);
    });


    micMarker.addEventListener('markerFound', function(){
        mic.mute(false);
    });

    micMarker.addEventListener('markerLost', function(){
        mic.mute(true);
    });
}

