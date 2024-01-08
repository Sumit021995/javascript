document.getElementById('start').addEventListener('click',()=>{
    setInterval(()=>{
        fetch('https://jacintodesign.github.io/quotes-api/data/quotes.json')
        .then((response)=>{
          return response.json()
        }).then((data)=>{
          // console.log(data);
        //   console.log(typeof data); // object
        //   console.log(data.length); // 8261
        //   console.log(data[0].text); // Today is the tomorrow we worried about yesterday.
          let randomNo= parseInt(Math.random()*8261 + 1);
        //   console.log(randomNo);
          return data[randomNo].text 
        }).then((text)=>{
              document.getElementById('outputText').innerText = `${text}`
        })
        .catch((error)=>{
          console.log(error);
        })
    
    },2000)
})



//   fetch('https://jacintodesign.github.io/quotes-api/data/quotes.json')
//   .then((response)=>{
//     return response.json()
//   }).then((data)=>{
//     // console.log(data);
//     console.log(typeof data); // object
//     console.log(data.length); // 8261
//     console.log(data[0].text); // Today is the tomorrow we worried about yesterday.
//     let randomNo= parseInt(Math.random()*8261 + 1);
//     console.log(randomNo);
//     return data[randomNo].text 
//   }).then((text)=>{
//         document.body.innerHTML = `<div>${text}</div>`
//   })
//   .catch((error)=>{
//     console.log(error);
//   })


  
