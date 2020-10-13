// OUR MAIN MODULE HERE WE IMPOrt ALL THE SUB_MODULES:

//-- Default Import
import Nokia from "./mobile.js";

// Making objet of Nokia class here in another module:
const N1100 = new Nokia("1100", "100$");
N1100.info();

//-- Named Import
import { show } from "./mobile.js";
show();

// -- Multiple Named Import-->
import { Samsung, samsungUser, priceOfSamsung } from "./mobile.js";
const note8 = new Samsung("Note8", "RS.68,000");
note8.info();
samsungUser();
console.log(priceOfSamsung);

// -- Import All-->
import * as device from "./mobile.js";
const redmiY = new device.MI("RedmiY", "RS.12,000");
redmiY.info();

device.miUser();
console.log(device.priceOfMI);

// -- Importing Default and Named-->
//* import Nokia, { show } from "./mobile.js";