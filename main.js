

// treat()
// // greet()

// function greet(){
//     let a =67;
//     const b =45
//     var c = 97
//     console.log("greet everyone")
// }

// function treat(){
//     greet()

//     let x =67;
//     const y =45
//     var cz = 97
//     console.log("Treat Everyone with your kind nature")
// }
//First Class Citizens
// var xyz = function(){
//     console.log("hello xyz")
// }

// xyz()


// let arr  = [1,2]

// let args = function(){
//     console.log("hello")
// }

// arr.forEach(args)
// function random(){
//     return function thoughts(){
//         console.log("new Idea")
//     }
// }

// let callablevar = random()
// callablevar()
var b=10;
function a(){

    c()
    function c(){
        console.log("hello c")
        console.log(b)
    }
}

a()

