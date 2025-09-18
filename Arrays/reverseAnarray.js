function reverseAnarray(arr) {

    // let narr = arr.reverse()
    // return narr

    let narr = []

    for (let i = arr.length-1; i >= 0; i--) {
        narr.push(arr[i])
    }


    return narr

}

console.log(reverseAnarray([12, 5, 2, 7, 9]))