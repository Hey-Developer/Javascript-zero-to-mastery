//-- Default Export:
export default class Nokia {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }

    info() {
        console.log(`Model=${this.model} Price=${this.price}`);
    }
}

//! ERROR : only one default export per module;
// export default function show() {
//     console.log("I am from mobile.js module");
// }

//-- Named Export
export function show() {
    console.log("I am from mobile.js module");
}

// -- Multiple Named Export:
class Samsung {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }

    info() {
        console.log(`Model=${this.model} Price=${this.price}`);
    }
}

function samsungUser() {
    console.log("CNU IS A USER OF SAMsung Mobile");
}

const priceOfSamsung = "Rs.20,000";

export { Samsung, samsungUser, priceOfSamsung };

class MI {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }

    info() {
        console.log(`Model=${this.model} Price=${this.price}`);
    }
}

function miUser() {
    console.log("PUNIT IS A USER OF MI Mobile");
}

const priceOfMI = "Rs.20,000";

export { MI, miUser, priceOfMI };