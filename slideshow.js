let paintingsData
let slideId = Number(window.location.search.split('=')[1])
const modal = document.getElementById("modal");
console.log(window.location.search.split('=')[1])


fetch(`data.json`)
.then(res => res.json())
.then(data => {
    /* console.log(data[slideId]) */
    paintingsData = data
    console.log(paintingsData.length)
    
    updateSlide(paintingsData[slideId])
})

function updateSlide(slide){
    console.log(slide)
    document.getElementById("progress").style.width = `${(slideId +1) / paintingsData.length*100}%`

    if (window.innerWidth > 767){
        document.getElementById("painting").src = slide.images.hero.large
    } else{
        document.getElementById("painting").src = slide.images.hero.small
    }
    
    document.getElementById("modal-img").src = slide.images.gallery
    document.getElementById("painting-name").textContent = slide.name
    document.getElementById("player-name").textContent = slide.name
    document.getElementById("painting-artist-name").textContent = slide.artist.name
    document.getElementById("player-artist-name").textContent = slide.artist.name
    document.getElementById("year").textContent = slide.year
    document.getElementById("description").textContent = slide.description
    document.getElementById("artist-img").src = slide.artist.image
    document.getElementById("source-link").href = slide.source
}

function playerSwitch(dir){
    if (dir === "next"){
        if(slideId < paintingsData.length-1){
        slideId = slideId +1
        console.log(" to show" + slideId)
        updateSlide(paintingsData[slideId])}
    } else {
        if (slideId > 0){
        slideId = slideId -1
        updateSlide(paintingsData[slideId])}
    }
}

function showModal(){
    modal.style.display="block"
}

function closeModal(){
    modal.style.display="none"
}