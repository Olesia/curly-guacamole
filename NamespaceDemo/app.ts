///<reference path = "utility-functions.ts" />
const result = Utility.maxBooksAllowed(12);
console.log(result);

import util = Utility.Fees;
const fee = util.calculateLateFee(3);
console.log(fee);