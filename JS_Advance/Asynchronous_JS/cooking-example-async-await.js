/* 
>> Scenario...The recipe for such soup may be something of the following:
--1.Chop some carrots.
--2.Chop some onions.
--3.Add water into a pot, turn the stove on and wait for it to boil.
--4.Add carrots into a pot and let it cook for 5 minutes.
--5.Add onions into a pot and let it cook for another 10 minutes.

These instructions are simple and clear, but if any of you out there reading this actually do cook, you’ll realize this isn’t the most time-efficient way to cook. For those of you who aren’t experienced cooks, here’s why:

--Steps 3, 4, and 5 don’t actually require you as the chef to do anything, other than watch the pot and keeping track of the time.
--Steps 1 and 2 do require you to actively do something.

Hence, a more adept chef might do the following:
>>Start boiling a pot of water
>>Whilst waiting for the pot of water to boil, start chopping up some carrots.
>>By the time you finish chopping carrots, the water should be boiling, so add the carrots.
>>Whilst the carrots are cooking in the pot, chop up the onions.
>>Add the onions and then cook for another 10 minutes.

Whilst there’s still the same number of things to do, you can hopefully see how this would be much faster and more efficient. This is exactly the same core concept as asynchronous programming: You never want to sit around purely waiting for something whilst there are other things you can spend your effort on.


*/

//$ Synchronous way to above task..
//-- synchronous functions representing tasks that don’t require waiting for anything at all.
function chopCarrots() {
  /**
   * Some long computational task here...
   */
  console.log("Done chopping carrots!");
}

function chopOnions() {
  /**
   * Some long computational task here...
   */
  console.log("Done chopping onions!");
}

function addOnions() {
  console.log('Add Onions to pot!');
}

function addCarrots() {
  console.log('Add Carrots to pot!');
}

//$ Now The Asynchronous Way-->So for our asynchronous functions (representing steps 3–5 of making vegetable soup):
async function letPotKeepBoiling(time) {
  return /* A promise to let the pot keep boilng for certain time */
}

async function boilPot() {
  return /* A promise to let the pot boil for time */
}

//>> So now, we just need to put this all together:

async function makeSoup() {
  const pot = boilPot();
  //Note that, on line 2, I call the asynchronous boilPot() function without an await keyword, because we don’t actually want to wait for the pot to boil before starting to chop up carrots. 
  chopCarrots();
  chopOnions();
  await pot;
  addCarrots();
  await letPotKeepBoiling(5);
  addOnions();
  await letPotKeepBoiling(10);
  //We only await the Promise(d) pot before we need to put in the carrots into the pot, since we don’t want do that before the water is boiling.
  console.log("Your vegetable soup is ready!");
}

makeSoup();

//$ What about explicit Promises?
// Explicit promises are, in my opinion, the half-way between using old-style callbacks and the new sexy async/await syntax. 

// --So take a brief visit in our time machine to callback hell:

function callbackHell() {
  boilPot(() => {
    addCarrots();
    letPotKeepBoiling(
      () => {
        addOnions();
        letPotKeepBoiling(
          () => {
            console.log("Your vegetable soup is ready!");
          },
          1000,
        );
      },
      5000
    )
  },
  5000,
  chopCarrots(),
  chopOnions(),
  );
}

// --And, as promised (hehe), using explicit Promises:

function makeSoup() {
  return Promise.all([
    new Promise((reject, resolve) => {
      chopCarrots();
      chopOnions();
      resolve();
    }),
    boilPot()
  ]).then(() => {
    addCarrots();
    return letPotKeepBoiling(5);
  }).then(() => {
    addOnions();
    return letPotKeepBoiling(10);
  }).then(() => {
    console.log("Vegetable soup done!");
  });
}