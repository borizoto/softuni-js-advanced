function createAssemblyLine() {
    const library = {
        hasClima(object) {
            object.temp = 21;
            object.tempSettings = 21;
            object.adjustTemp = function () {
                if (object.temp < object.tempSettings) {
                    object.temp++;
                } else if (object.temp > object.tempSettings) {
                    object.temp--;
                }
            };
        },

        hasAudio(object) {
            object.currentTrack = { name: null, artist: null };
            object.nowPlaying = function () {
                if (object.currentTrack !== null) {
                    console.log(`Now playing '${object.currentTrack.name}' by ${object.currentTrack.artist}`)
                }
            };
        },

        hasParktronic(object) {
            object.checkDistance = function (distance) {
                if (distance < 0.1) {
                    console.log("Beep! Beep! Beep!");
                } else if (distance < 0.25) {
                    console.log("Beep! Beep!");
                } else if (distance < 0.5) {
                    console.log("Beep!");
                } else {
                    console.log("");
                }
            }
        },
    }

    return library;
}