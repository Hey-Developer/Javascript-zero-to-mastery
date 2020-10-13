// # Target VS CurrentTarget
// Target is on which u click or we can say from the propagation start.
// currentTarget is the target comes after each propagation.
document.getElementById("one").addEventListener(
    "click",
    function(e) {
        console.log(`1`);
        console.log(`Target= ${e.target.dataset.name}`);
        console.log(`currentTarget= ${e.currentTarget.dataset.name}`);
    },
    false
);
document.getElementById("two").addEventListener(
    "click",
    function(e) {
        console.log(`2`);
        console.log(`Target= ${e.target.dataset.name}`);
        console.log(`currentTarget= ${e.currentTarget.dataset.name}`);
    },
    false
);
document.getElementById("three").addEventListener(
    "click",
    function(e) {
        console.log(`3`);
        console.log(`Target= ${e.target.dataset.name}`);
        console.log(`currentTarget= ${e.currentTarget.dataset.name}`);
    },
    false
);
document.getElementById("four").addEventListener(
    "click",
    function(e) {
        console.log(`4`);
        console.log(`Target= ${e.target.dataset.name}`);
        console.log(`currentTarget= ${e.currentTarget.dataset.name}`);
    },
    false
);