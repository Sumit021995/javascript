let myArray = [5,6,7,8,9];

myArray.forEach(function (num) {
console.log(num);
});

// it prints but it does not return any value out of function
// 5
// 6
// 7
// 8
// 9

let returnforeach = myArray.forEach(function (num) {
    // console.log(num);
    });

    console.log(returnforeach); // undefined

let returnforeach1 = myArray.forEach(function (num) {
    return num;
    });

    console.log(returnforeach1); // undefined

    // nothing is returned out of forEach() .

    // we can add a declered function name in forEach()

    function printMe(num){
        console.log(num);
    }

    myArray.forEach(printMe) // here we just need to give the name of function that is printMe here , no need to execute that is printMe()

    /*
    5
    6
    7
    8
    9
    */

    myArray.forEach((num,index,arr)=>{
        console.log(num,index,arr);
    })

    // result is as follows

    /*
    5 0 [ 5, 6, 7, 8, 9 ]
    6 1 [ 5, 6, 7, 8, 9 ]
    7 2 [ 5, 6, 7, 8, 9 ]
    8 3 [ 5, 6, 7, 8, 9 ]
    9 4 [ 5, 6, 7, 8, 9 ]
    */

    const myCoding = [
        {
            languageName: "javascript",
            languageFileName: "js"
        },
        {
            languageName: "java",
            languageFileName: "java"
        },
        {
            languageName: "python",
            languageFileName: "py"
        }
    ]

    myCoding.forEach((item)=>{
        console.log(item.languageName);
        console.log(item.languageFileName);

    })
 
    //javascript
    // js
    // java
    // java
    // python
    // py
