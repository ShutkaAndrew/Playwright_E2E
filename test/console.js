// console.log(12);
// console.log(123)
// console.log(1234);

const Condition = true;
const willPromise = new Promise(function(resolve,rejected) {


    if (Condition) {
let message = 'Code passed'
resolve(message);
    }
    else {
        let reasonWhy = new Error('Code failed')
        rejected(reasonWhy)
    }
})