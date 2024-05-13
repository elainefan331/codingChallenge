/*
For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

=====================plan=========================

*/ 

const gcdOfStrings = (str1, str2) => {
    const str1Length = str1.length;
    const str2Length = str2.length;
    const maxLength = Math.min(str1Length, str2Length)
    const divisorsArr = [];

    for (let i = maxLength; i > 0; i--) {
        if (str1Length % i === 0 && str2Length % i === 0) {
            divisorsArr.push(i)
        }
    }

    for (let i = 0; i < divisorsArr.length; i++) {
        const str1Times = str1Length / divisorsArr[i];
        const str2Times = str2Length / divisorsArr[i];
        const subStr1 = str1.substring(0, divisorsArr[i]);
        const subStr2 = str2.substring(0, divisorsArr[i]);
       
        if(subStr1 === subStr2) {
            const newSubStr1 = subStr1.repeat(str1Times)
            const newSubStr2 = subStr2.repeat(str2Times)

            if((newSubStr1 === str1) && newSubStr2 === str2) return subStr1;
        }
    }

    return "";
}

console.log(gcdOfStrings("ABCABC", "ABC"));
console.log(gcdOfStrings("ABABAB", "ABAB"));
