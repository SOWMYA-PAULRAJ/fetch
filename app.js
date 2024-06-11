let main = document.getElementById("box")
function show(){

  
  
  
  
  let data= fetch("https://type.fit/api/quotes")
  .then((data)=>{
    let dummyData = data.json()
    // console.log(dummyData)
    return dummyData
  }) 
  .then((dummyData)=>{
    let actualData = dummyData
    console.log(actualData)
    let ranPick = Math.floor(Math.random()*dummyData.length)
    console.log(dummyData[ranPick].text)
    console.log(dummyData[ranPick].author)
    let title = document.getElementById("quote")
    title.innerHTML = dummyData[ranPick].text
    let aut = document.getElementById("author")
    aut.innerHTML = dummyData[ranPick].author
    
  })
}















    



