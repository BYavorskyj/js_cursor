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
        for (var i = 0; i < n; i++) {
            var str = '';
            for (var j = 1; j < n-i; j++) {
              str = str + ' ';
            }
            for (var k = 1; k <= (2*i+1); k++) {
              str = str + '*';
            }
            console.log(str);
          }
    }
    printPyramid(3)

/* 7. A function which transforms first and last letter to uppercase (use built in string’s method). */
    function firstAndLastToUpper(str) {
        let first;
        let last;
        first=str[0].toUpperCase();
        last=str[(str.length)-1].toUpperCase();
        return first+str.slice(1,(str.length-1))+last;
    }


    firstAndLastToUpper('abc') // 'AbC'

// 8. A function which returns true if string contains ironman or cursor or ostap otherwise returns false. The function must be case-insensitive.
    function cursorCheck(str) {
    return str.toLowerCase().includes('ironman') || str.toLowerCase().includes('cursor') || str.toLowerCase().includes('ostap');
    }
    console.log(cursorCheck('IroNman'));
    console.log(cursorCheck('Hello I am OstaP')); // true
    console.log(cursorCheck('Superman is here')); // false

// 9. A function which returns a string with all letters in uppercase (without built in string’s method). The function supports only english alphabet.
    function toUppercase(str) {
        let upper = str.toUpperCase();
    return upper;
    }
toUppercase('abc') // 'ABC'

// 10.A function which removes duplication of letters in string. The function must be case-insensitive. //
    function removeDuplicationLetters(str) {
        return str
        .split('')
        .filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
        })
        .join('');
    }

    removeDuplicationLetters('Hello I am Iron Man') // 'Helo I am rn '

 // 11. A function that when given a number n returns the n-th number in the Fibonacci Sequence. The sequence starts from 1 and looks like this: 1, 1, 2, 3, 5, 8, 13, 21…
    function fibonacci(n) {
        let a = 1
        let b = 1;
    for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

    fibonacci(3) // 2
    fibonacci(5) // 5
    fibonacci(7) // 13
