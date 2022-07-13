let homeScore = 0
let guestScore = 0
let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
homeScoreEl.textContent = homeScore
guestScoreEl.textContent = guestScore

let homePlusOne = document.getElementById("plus-one-home")
let homePlusTwo = document.getElementById("plus-two-home")
let homePlusThree = document.getElementById("plus-three-home")

function incrementHomeOne() {
    homeScore += 1
}

