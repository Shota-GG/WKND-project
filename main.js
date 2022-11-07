let account = document.querySelector(".acc")
let signup = document.querySelector(".signup")
let sign = document.querySelector(".sign")
let search = document.querySelector(".search")

account.addEventListener("click", function(){
        signup.style.display = "block"
})
sign.addEventListener("click", function(){
        signup.style.display = "none"
})
search.onclick = function(){
    document.querySelector(".search-box").classList.toggle("active")
}