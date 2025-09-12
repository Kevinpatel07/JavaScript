// function task1(cb){
//     setTimeout(()=>{
//         console.log("Task 1 Completed")
//         cb()
//     },1000)
// }

// function task2(cb){
//     setTimeout(()=>{
//         console.log("Task 2 Completed")
//         cb()
//     },1000)
// }

// function task3(cb){
//     setTimeout(()=>{
//         console.log("Task 3 Completed")
//         cb()
//     },1000)
// }

// function task4(cb){
//     setTimeout(()=>{
//         console.log("Task 4 Completed")
//         cb()
//     },1000)
// }

// task1(()=>{
//     task2(()=>{
//         task3(()=>{
//             task4(()=>{
//                 console.log("All Task Done")
//             })
//         })
//     })
// })


function task1(){
    return new Promise((resolve , rej)=>{
        setTimeout(() => {
            resolve("Task1")
        },1000 );
    })
}

function task2(){
    return new Promise((resolve , rej)=>{
        setTimeout(() => {
            resolve("Task2")
        },1000 );
    })
}

function task3(){
    return new Promise((resolve , rej)=>{
        setTimeout(() => {
            resolve("Task3")
        },1000 );
    })
}

function task4(){
    return new Promise((resolve , rej)=>{
        setTimeout(() => {
            resolve("Task4")
        },1000 );
    })
}

task1()
.then((res)=>{
    console.log(res)
    return task2()
})
.then((res)=>{
    console.log(res)
    return task3()
})
.then((res)=>{
    console.log(res)
    return task4()
})
.then((res)=>{
    console.log(res)
})
.finally(()=> console.log("All Task done"))

