\\see title in hackerrank for problem description

function repeatedString(s, n) {
    // Write your code her
    let numberOfAsInString = 0;
    for(let i = 0; i < s.length; i++){
        if (s[i] == "a"){
            numberOfAsInString ++;
        }
    }
    let modulas = n % s.length; 
    let numberOfAsGivenN = Math.floor(n/s.length)*numberOfAsInString;
    for (let i = 0; i < modulas; i++){
        if (s[i] == "a"){
            numberOfAsGivenN ++;
        }
    }       
    return numberOfAsGivenN; 
}
