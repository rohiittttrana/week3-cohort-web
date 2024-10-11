
// function greeting(name, callback) {
//     console.log("Hello, " + name + "!");
//     callback();  
//   }
//   function info(name , callback)
//   {
//     console.log(name+"hey there ");
//     callback(name,afterGreeting);
//   }
//   function afterGreeting() {
//     console.log("This is a callback function being executed.");
//   }
 
//   greeting("Lydia", afterGreeting);
//   info("rohit",greeting);
  
//   function callback()
//   {
//     console.log("hi your function is fetching....")
//     setTimeout(()=>{
//         console.log("hi there i am cool")
//         setTimeout(()=>
//         {
//             console.log("hi there i am another cool satement")
//         },4000)
//     },2000)
//   }
//   callback();
function callback()
{
    console.log("hi function is started ")
    setTimeout(()=>{
        console.log("hi")
        setTimeout(()=>{
            console.log("hello")
            setTimeout(()=>{
                console.log("hi there")
            },5000)
        },2000)
    },1000)
}
callback() ;

