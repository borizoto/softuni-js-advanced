function timeToWalk(steps, footPrintInMeters, speedInKmh) {
   
    const distanceInM = steps * footPrintInMeters;
    const slowerer = Math.floor(distanceInM / 500);
    const time = distanceInM / (speedInKmh / 3.6);
 
    let hours = Math.trunc(time / 60 / 60);
    let minutes = Math.trunc(time / 60) + slowerer;
    let seconds = Math.round(time % 60);
    
    hours = hours < 10 ? `0${hours}` : `${hours}`;
    minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
 
    console.log(`${hours}:${minutes}:${seconds}`)
 }