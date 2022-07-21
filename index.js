let homeScore = 0
let guestScore = 0
let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
homeScoreEl.textContent = homeScore
guestScoreEl.textContent = guestScore

let resetBtn = document.getElementById("reset-score")
let homePlusOne = document.getElementById("plus-one-home")
let homePlusTwo = document.getElementById("plus-two-home")
let homePlusThree = document.getElementById("plus-three-home")
let guestPlusOne = document.getElementById("plus-one-guest")
let guestPlusTwo = document.getElementById("plus-two-guest")
let guestPlusThree = document.getElementById("plus-three-guest")
homePlusOne.addEventListener("click", function(){
    homeScore += 1
    homeScoreEl.innerHTML = `${homeScore}`
    console.log(homeScore)
})

homePlusTwo.addEventListener("click", function(){
    homeScore += 2
    homeScoreEl.innerHTML = `${homeScore}`
    console.log(homeScore)
})

homePlusThree.addEventListener("click", function(){
    homeScore += 3
    homeScoreEl.innerHTML = `${homeScore}`
    console.log(homeScore)
})

guestPlusOne.addEventListener("click", function(){
    guestScore += 1
    guestScoreEl.innerHTML = `${guestScore}`
    console.log(guestScore)
})

guestPlusTwo.addEventListener("click", function(){
    guestScore += 2
    guestScoreEl.innerHTML = `${guestScore}`
    console.log(guestScore)
})

guestPlusThree.addEventListener("click", function(){
    guestScore += 3
    guestScoreEl.innerHTML = `${guestScore}`
    console.log(guestScore)
})

resetBtn.addEventListener("click", function(){
    homeScore = 0
    guestScore = 0
    homeScoreEl.innerHTML = `${homeScore}`
    guestScoreEl.innerHTML = `${guestScore}`

})