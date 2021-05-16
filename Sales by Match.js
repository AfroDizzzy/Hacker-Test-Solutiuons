function sockMerchant(n, ar) {
    // Write your code here
 // Write your code here
    let socks = ar.sort();
    let pairs = 0;
    let position = 0; 
    while (position < ar.length){
        if (socks[position] == socks[position+1]){
            pairs ++; 
            position = position + 2;
        }else {
            position ++;
        }
        
    }
    return pairs;
}
