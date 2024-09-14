// Async Call Back....

function f1(data) {
    console.log(`hello : f1 : ${data}`);
    f2(); //static funcation.
}

function f2() {
    console.log("hello : f2");
}
setTimeout(f1,3000,"hell") //SetTimeout is a funcation. It'll slows output.

//Sync Call Back....
// Dynamic functions.

function success() {
    console.log("Good Balance")
}

function fail() {
    console.log("Bad Balance")
}

function erroro() {
    console.log("Try Again")
}

//Don't Use "exec" as function name. it'll show error on powershell(in-bulid function).
function exec(data, callback) {
    if (data) {
    console.log(`Balance : ${data}`);
    }

    setTimeout(callback, 3000)
}

function trigger(data) {
    if (data>0){
        exec(data,success)
    }
    else if (data<=0) {
        exec(data,fail)
    }
    else {
        exec("",erroro)
    }
}

trigger(1)
trigger(-1)
trigger("dfs")