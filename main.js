const gallery = document.getElementById("gallery");
let windowWidth = window.innerWidth;
const padding = 32
const thumbnail = 311
const gap = 40
let columnsOnPage = 0
let paintingsData

columnsCount(windowWidth)
window.addEventListener("resize", () =>{
    windowWidth = window.innerWidth
   /*  console.log(windowWidth) */
    columnsCount(windowWidth)
})

function columnsCount(width){

    let gridWidth = width - padding

        let columns = 0
        let usableSpace = gridWidth
        while (usableSpace > 350){

            usableSpace = usableSpace - 350
            columns++
/*             console.log(columns) */
    }

            //Only call the method to populate if the number of columns
            //is not equal to what is already there, Starting at 0
            if (columnsOnPage != columns){
                populateColumns(columns)
            }

}
// method to populate columns
function populateColumns(num){
    gallery.innerHTML = ""
    columnsOnPage = num
            for (let i=0; i<num; i++){
            
            gallery.innerHTML += `<div class="gal-col" id="${i}"></div>`
        }
}
let galCols = document.getElementsByClassName("gal-col");
console.log(galCols.length)
fetch("./data.json")
.then(res => res.json())
.then(data => {
/*     console.log(data); */
    paintingsData = data

    currentColumn = 1
    for (let painting of paintingsData){
        if (currentColumn > columnsOnPage){
            currentColumn = 1
        }


        document.getElementById(currentColumn-1).innerHTML += `
        <a href="slide.html?id=${paintingsData.indexOf(painting)}">
        <div class="thumbnail-painting-div">
    <img src="${painting.images.thumbnail}" class="thumbnail-painting-img">
    <div class="thumbnail-details">
  <p class="tp2m bold text-white">${painting.name}</p>
  <p class="text-white-75 tp5">${painting.artist.name}</p>
  </div>
  </div>
  </a>
        `
        console.log(paintingsData.indexOf(painting))
    currentColumn++
    
    }







/*     for (let painting of paintingsData){
        gallery.innerHTML += `
        <div class="thumbnail-painting-div">
    <img src="${painting.images.thumbnail}" class="thumbnail-painting-img">
    <div class="thumbnail-details">
  <p class="tp2m bold text-white">${painting.name}</p>
  <p class="text-white-75 tp5">${painting.artist.name}</p>
  </div>
  </div>
        `
    } */

})



