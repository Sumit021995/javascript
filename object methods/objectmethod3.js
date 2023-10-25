// destructuring
 const course = {
    coursename:'js in hindi',
    price:'999',
    cousreInstructor: 'sumit'
 }

 // new syntax to use the key multiple times in an object
 // const{key}= object name;

 const {cousreInstructor} = course;
 console.log(cousreInstructor); // sumit

 //we can also change the name of any key of an object
 // const{key:changed name}= object name;

 const {cousreInstructor: instructor} = course;
 console.log(instructor);// sumit 

 // some methods to react
// some props,destructuring objects in react
//syntex

//  const navbar = ()=>{
//  }
// navbar(company = 'sumit')


// concept of APIs
// simply when we put our work on another person or say if we give our work to another system then another system
//work as APIs and help us doing our work

// In older days the API work with XML (structure) files that are complex
// Now a days APIs  work with JSON file
// JSON is just like an object

// JSON file Syntex // keys and values both are strings
// {
//    'name':'Sumit',
//    'coursename':'js in hindi',
//    'price':'free'
// }

//APIs in Arrays formats
// [
//     {},
//     {},
//     {}
// ]


//lets check APIs = randomuser me api
/*
lets search on google = randomuser me api
and then on website randomuserme copy the link given in the api text section
and paste it on browser the we get an api formal response
now lets open JSON formatter to evaluate or study about API
After pasting the response in left side of the json formatter
we get the result in the right side we can see that response in (code,form,text,tree,view) format
*/ 
//JSON-javascript object notation

