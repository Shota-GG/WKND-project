let account = document.querySelector(".acc")
let signup = document.querySelector(".signup")
let sign = document.querySelector(".sign")
let search = document.querySelector(".search")
let section4 = document.querySelector(".section4")
let img1 = document.querySelector(".img1")
let climbing = document.querySelector(".climbing")
let img2 = document.querySelector(".img2")
let img3 = document.querySelector(".img3")
let img4 = document.querySelector(".img4")


account.addEventListener("click", function(){
        signup.style.display = "block"
})
sign.addEventListener("click", function(){
        signup.style.display = "none"
})
search.onclick = function(){
    document.querySelector(".search-box").classList.toggle("active")
}

img1.addEventListener("mouseover", mouseOver)
img1.addEventListener("mouseout", mouseOut)
function mouseOver(){
        section4.style.backgroundImage = "url(../photos/WKND-teaser1.1.png)"
        climbing.innerHTML = "Whistler Mountain"
}
function mouseOut(){
        section4.style.backgroundImage = "url(../photos/WKND-image.png)"
        climbing.innerHTML = "Climbing New Zealand"
}

img2.addEventListener("mouseover", mouseOver)
img2.addEventListener("mouseout", mouseOut)
function mouseOver(){
        section4.style.backgroundImage = "url(../photos/WKND-teaser1.2.png)"
        climbing.innerHTML = "Surf Camp In COSTA RICA"
}
function mouseOut(){
        section4.style.backgroundImage = "url(../photos/WKND-image.png)"
        climbing.innerHTML = "Climbing New Zealand"
}
img3.addEventListener("mouseover", mouseOver)
img3.addEventListener("mouseout", mouseOut)
function mouseOver(){
        section4.style.backgroundImage = "url(../photos/WKND-teaser1.3.png)"
        climbing.innerHTML = "Ski Touring MONT BLANC"
}
function mouseOut(){
        section4.style.backgroundImage = "url(../photos/WKND-image.png)"
        climbing.innerHTML = "Climbing New Zealand"
}
img4.addEventListener("mouseover", mouseOver)
img4.addEventListener("mouseout", mouseOut)
function mouseOver(){
        section4.style.backgroundImage = "url(../photos/WKND-teaser1.4.png)"
        climbing.innerHTML = "Riverside Camping"
}
function mouseOut(){
        section4.style.backgroundImage = "url(../photos/WKND-image.png)"
        climbing.innerHTML = "Climbing New Zealand"
}