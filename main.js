/* 1. Build a function that does currency converter from USD to UAH (1 USD = 8 UAH).*/

function convert(amount) {
    let uan = amount*8;
return uan;
     }
    convert(2) 

/* 2. A function which returns reversed string.*/

    function reverse(str) {
        let splitString = str.split("");
        let  reverseArray = splitString.reverse();
        let joinArray = reverseArray.join("");
        return joinArray;
     }
    reverse('abc') // 'cba'

/* 3. A function which prints the stair picture of size n */
    function printStairs(n) {
        let i;
        let str="#";
        for(i=0; i<=n; i++){
        console.log(str.repeat(i));
    }     
    }

    printStairs(3)

/* 4. A function which returns total sum of a range */
    function sumRange(start, end) {
        let totalSum =0;
        for (i=start; i <= end; i++) {
            totalSum += i;
        }
        return totalSum;        
    }

    console.log(sumRange(2, 4)) // 9
    console.log(sumRange(-1, 3)) // 5

/* 5. Write a function which returns the smallest of three numbers. */
    function min(a, b, c) {
        return Math.min(a, b, c);
    }

    min(10, 5, 11) // 5
    min(3, 8, 4) // 3

/* 6. A function which prints the pyramid picture of size n */
    function printPyramid(n) {
        
    }
    printStairs(3)

