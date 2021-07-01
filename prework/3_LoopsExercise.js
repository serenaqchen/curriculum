// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let count = 1

while (count <= 5) {
  console.log(count);
  count ++;
}

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

let count = 1
do{
  console.log(count);
  count ++;
}
while (count <= 5)

// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

for (let num = 1; num <=5; num++){
  console.log(num);
}

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.

let count1 = 10
do{
  console.log(count1);
  count1 -- ;
}
while (count1 > 0);

let count2 = 10

while (count2 > 0) {
  console.log(count2);
  count2 --;
};

for (let num = 10; num > 0; num--){
  console.log(num);
};

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

let count1 = 7
do{
  console.log(count1);
  count1 ++ ;
}
while (count1 <= 27);

let count2 = 7

while (count2 <= 27) {
  console.log(count2);
  count2 ++;
};

for (let num = 7; num <= 27; num++){
  console.log(num);
};

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

let count1 = 10
do{
  console.log(count1);
  count1 += 10 ;
}
while (count1 <= 100);

let count2 = 10

while (count2 <= 100) {
  console.log(count2);
  count2 += 10;
};

for (let num = 10; num <= 100; num+= 10){
  console.log(num);
};
// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

// The while loop is infinite because counterFour starts off as 1 which is less that 2.
// Therefore, the loop will run and subtract from counterFour. 
// Since it is always subtracting from counterFour, the condition of counterFour < 2 will always be met 
// and the while loop will always run. Hence, you'll have an infinite loop. 

let counterFour = 1;
while (counterFour > -100) {
  console.log("HELP ME!");
  counterFour--;
}

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.

let favNum = 8;

for (let num = 0; num <= favNum; num ++){
  console.log(num);
}

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)

let favNum = 8;

for (let num = 0; num <= 100; num ++){
  if (num === favNum){
    console.log(num + " my favorite number!");
  } else {
    console.log(num + " not my favorite number");
  }
}


// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:
//

// In general you should use a for loop when you know exactly how many times you want to run the loop.
// You should use a while loop when you want the loop to break based on a certian condition
// and you don't have a specific number of interations in mind. 
// The do while and while loop are similar, but different in the sense that the do while checks the 
// condition AFTER the loop is ran. Therefore the loop will always run at least once. 
// The while loop checks condition BEFORE it may run the loop, so it may run the loop 0 or more times

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {
  console.log("counting down from", outsideCounter);
  for (let insideCounter = outsideCounter; insideCounter > 0; insideCounter-- ) {
    console.log("inside", insideCounter)
  }
  console.log("***********************************");
}

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//

// Email your file to us or commit your file to GitHub and email us a link.
