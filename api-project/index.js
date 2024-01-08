let myData;
let url = 'https://jacintodesign.github.io/quotes-api/data/quotes.json'

// document.getElementById("start").addEventListener("click", () => {
//   fetch("https://jacintodesign.github.io/quotes-api/data/quotes.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     myData = this.data;
// console.log(data);
//   console.log(typeof data); // object
//   console.log(data.length); // 8261
//   console.log(data[0].text); // Today is the tomorrow we worried about yesterday.
//     let randomNo = parseInt(Math.random() * 8261 + 1);
//   console.log(randomNo);
//     return data[randomNo].text;
//   })
//   .then((text) => {
//     document.getElementById("outputText").innerText = `${text}`;
//   })
//     .catch((error) => {
//       console.log(error);
//     });
//   });

async function getMyDetails (){
  try {
    fetch()
  } catch (error) {
    
  }
}

fetch("url")
  .then((response) => {
    console.log(response.json());
    return response.json();
  }).then((data)=>{
    myData = data;
    console.log(myData);
  })
 .catch((error) => {
    console.log(error);
  });

// document.getElementById("outputText").innerText =`${myData[parseInt(Math.random()*8261 + 1)]}`;
console.log(myData);