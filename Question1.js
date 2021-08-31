//q1
//create promise that is resolved and rejected based on random boolean condition
var random_boolean = Math.random() < 0.5;
// this how to get random boolean 


const MyPromise = new Promise((resolve, reject) => {

    if(random_boolean){
        resolve("Success")
    }
    else {
        reject("Fail")
    }

});

MyPromise.then(
    (resolved) => console.log(resolved),
    (rejected) => console.log(rejected)
);

//q1.b 
//execute the promise and let it print 'success' if resolved and 'fail' is rejected 
//note that the print shouldn't be inside the promise declaration !!