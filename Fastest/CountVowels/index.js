// The program:
// You are required to write a program that finds the number of vowels in each word of a sentence.

// - Words are separated by a single space.
// - The sentence may consist of letters, numbers and/or special characters. Specifically, it may contain any character in the range of characters having an ASCII value of 33 to 126 inclusive.

// INPUT:
// A single line of text consisting of at least one word.

// OUTPUT:
// On a single line, output the number of vowels in each word of the provided sentence. Numbers are separated by a single space.

// CONSTRAINTS:
// 1 ≤ Length of the sentence < 1024

// List of vowels your program needs to consider:
// A
// E
// I
// O
// U
// a
// e
// i
// o
// u

// EXAMPLE:
// Input
// CodinGame rocks
// Output
// 4 1
 

// Solution 

sentence = readline().split(' ');
a=[];
for(i=0;i<sentence.length;i++){
    sentence[i].split('');
    s=0;
    for(j=0;j<sentence[i].length;j++){
        if(sentence[i][j] === 'A' || sentence[i][j] === 'E' || sentence[i][j] === 'I' || sentence[i][j] === 'O' || sentence[i][j] === 'U' || sentence[i][j] === 'a' || sentence[i][j] === 'e' || sentence[i][j] === 'i' || sentence[i][j] === 'o' || sentence[i][j] === 'u' ){
            s+=1;
        } 
    }
    a.push(s);
}
print(a.join(' '))

// Really really bad, but it runs
// Pass 100% unit tests

// Solution with Python
// print(*[sum(map(w.count,"AEIOUaeiou"))for w in input().split()]);
// Amazing :v