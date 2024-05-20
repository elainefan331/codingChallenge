/*
declare max = 0
iterate through the array gain
calculate the new altitude
    - if the new altitude is greater than max --> update max
*/ 
const largestAltitude = (gain) => {
    let max = 0;
    let currentAlt = 0;

    for (let i = 0; i < gain.length; i++) {
        let alt = gain[i];
        currentAlt += alt;
        max = Math.max(max, currentAlt) 
    }

    return max;
}

console.log(largestAltitude([-5,1,5,0,-7]));
console.log(largestAltitude([-4,-3,-2,-1,4,3,2]));