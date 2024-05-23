/*
declare two queue
1. r - store the index of R party senate
2. d - store the index of D party senate
compare the index of two queues
 - pop off the senate index from both queues
 - the greater index senate will be ban by smaller index senate
    --> add the smaller index into queue again
keep doing this until one party queue become 0
return the winner
*/


const predictPartyVictory = senate => {
    const rQueue = [];
    const dQueue = [];

    for(let i = 0; i < senate.length; i++) {
        if (senate[i] === "R") {
            rQueue.push(i)
        } else {
            dQueue.push(i)
        }
    }

    while(rQueue.length > 0 && dQueue.length > 0) {
        let r = rQueue.shift();
        let d = dQueue.shift();

        if (r < d) {
            rQueue.push(r + senate.length)
        } else {
            dQueue.push(d + senate.length)
        }
    }

    return rQueue.length > 0 ? "Radiant" : "Dire"
}

console.log(predictPartyVictory("RD"));
console.log(predictPartyVictory("RDD"));