/*
=================plan==========================
iterate through the given array to see how many valid empty plots left
compare the number of valid empty plots and the given n
- if n is greater than or equal to empty plots
    - return true
- if it is not
    - return false
*/

const canPlaceFlowers = (flowerbed, n) => {
    let validPlots = 0;

    for (let i = 0; i < flowerbed.length; i++) {
        const currPlot = flowerbed[i];

        if(currPlot === 0 && (i === 0 || flowerbed[i - 1] === 0) && (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)){
            validPlots += 1;
            flowerbed[i] = 1;
        }
    }

    return validPlots >= n;
}

console.log(canPlaceFlowers([1,0,0,0,1], 1));
console.log(canPlaceFlowers([1,0,0,0,1], 2));
console.log(canPlaceFlowers([1,0,0,0,0,1], 2));
console.log(canPlaceFlowers([0,0,1,0,1], 1));