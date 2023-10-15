let myDate = new Date();
console.log(myDate);// 2023-10-15T17:18:51.781Z
console.log((myDate).toString());// Sun Oct 15 2023 22:51:49 GMT+0530 (India Standard Time) 
console.log((myDate).toISOString());// 2023-10-15T17:26:58.157Z
console.log((myDate).toJSON());// 2023-10-15T17:26:58.157Z 
console.log((myDate).toDateString());// Sun Oct 15 2023
console.log((myDate).toTimeString());// 22:56:58 GMT+0530 (India Standard Time) 
console.log((myDate).toLocaleDateString());// 15/10/2023 
console.log((myDate).toLocaleTimeString());// 10:56:58 pm 
console.log((myDate).getTimezoneOffset());// -330 
console.log((myDate).toUTCString());// Sun, 15 Oct 2023 17:26:58 GMT

let myNewDate = new Date(2023,0,23);
console.log(myNewDate.toDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);// 1697394064699 in milli second from 1 jan 1970
console.log(myNewDate.getTime());// 1674412200000 in milli second from 1 jan 1970
console.log(Math.floor(Date.now()/1000));// 1674412200000 in milli second from 1 jan 1970


let newDate1 = new Date();
console.log(newDate1.getTime());// 2023-10-15T18:52:20.908Z
console.log(newDate1.getFullYear());// 2023
console.log(newDate1.getDay());// 1-Monday(0-Sunday,1-Mondsy,2-Tuesday,3-Wednesday,4-Thrusday,5-Friday,6-Saturday)
console.log(newDate1.getDate());// 16
console.log(newDate1.getMonth());// 9 is october(10th month) month start from 0-11   
console.log(newDate1.getMonth() + 1);// 10th as 1 is added



console.log(newDate1.toLocaleString('default',{
    weekday: "long",
    month: "long"

}));// October Monday





