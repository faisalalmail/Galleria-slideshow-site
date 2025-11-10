/* function GetURLParameter(id)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}​

console.log(GetURLParameter) */

let paintingsData
let slideId = window.location.search.split('=')[1]
console.log(window.location.search.split('=')[1])

fetch(`data.json`)
.then(res => res.json())
.then(data => {
    /* console.log(data[slideId]) */
    paintingsData = data
    console.log(paintingsData.length)
    console.log(slideId / paintingsData.length*100)
    document.getElementById("progress").style.width = `${slideId / paintingsData.length*100}%`
})


