const banner = [document.getElementById("banner-1"), document.getElementById("banner-2"), document.getElementById("banner-3")]
let i = 0, j = 1

setInterval(()=> {
    banner[i].style.display = 'none'
    banner[j].style.display = 'block'
    i++
    j++
    if (i === 3) i = 0
    if (j === 3) j = 0
}, 4000);

//change