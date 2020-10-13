/* 
The break statement "jumps out" of a loop.
continue statement "jumps over" one iteration in the loop.
 */
// * Example-1
let streamingHours = 0;
for (; streamingHours <= 20; streamingHours++) {
    console.log("Watching: " + streamingHours);
    if (streamingHours > 10) {
        console.log("oops! your free streaming hours is open Please Buy More--");
        break;
    }
}

// * Example-2
let isPremiumVideos = false;

for (let videos = 1; videos <= 50; videos++) {
    if (videos % 2 == 0 && videos > 20 && videos < 30) {
        isPremiumVideos = true;
    } else {
        isPremiumVideos = false;
    }

    console.log("Video: " + videos);
    if (isPremiumVideos) {
        console.log("Sorry! Its premium");
        continue;
    }
}

/* 
The break and the continue statements are the only JavaScript statements that can "jump out of" a code block.

$ The continue statement (with or without a label reference) can only be used to skip one loop iteration.

$ The break statement, without a label reference, can only be used to jump out of a loop or a switch.
    $ With a label reference, the break statement can be used to jump out of any code block:
 */

//  To label JavaScript statements you precede the statements with a label name and a colon:
myName: for (let i = 0; i <= 5; i++) {
    console.log(i);
    if (i == 4) {
        break myName;
    }
}