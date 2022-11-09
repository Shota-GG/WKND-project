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
let climbingp = document.querySelector(".climb p") 
let images = document.querySelectorAll(".section5 div")
let email = document.querySelector(".email")
let emailBtn = document.querySelector(".emailbtn")

function scrollWin(){
        window.scrollBy(0, 2000)
}

account.addEventListener("click", function(){
        signup.style.display = "block"
})
sign.addEventListener("click", function(){
        signup.style.display = "none"
})
search.onclick = function(){
    document.querySelector(".search-box").classList.toggle("active")
}

for(let i = 0; i < images.length; i ++){
        images[i].addEventListener("mouseover", function(){
                section4.style.backgroundImage = `url(${images[i].firstElementChild.src})`
                climbing.innerHTML = images[i].children[1].innerHTML
                climbingp.innerHTML = images[i].children[2].innerHTML
                console.log(images[i].children[1].innerHTML);
        })
        images[i].addEventListener("mouseout", function(){
                section4.style.backgroundImage = "url(../photos/WKND-imagee.png)"
                climbing.innerHTML = "Climbing New Zealand"
                climbingp.innerHTML = "Let us help you make your New Zealand climbing vacation a memory you will cherish forever! Come join us for a guided rock climbing adventure in the mountains that trained Sir Edmund Hilary."
        })
}

emailBtn.addEventListener("click", function(){
        
      let mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if(email.value.match(mailformat)){
        alert("you're signed up")
      }
      else{
        alert("Invalid email address.");
      }
      email.value = ""
})
console.log(email.value);