const speedLimit = 70;
if (speed <= speedLimit) {
    console.log("ok");
}else {
    const excessSpeed = speed -speedLimit;
    const demeritpoint = Math.floor (excessSpeed / 5);
    if (demeritPoint > 12){
        console.log("License suspended");
    }else {
        console.log(`Points; ${demeritPoint}`);
    }
    }

     calculatePoints(/* Enter your input*/);