// import { getFish } from './database.js'
// import { fishList } from './fish/fishList.js'
import { mostHolyFish, soldierFish, nonHolyFish } from './fish/fishList.js'
import { tankList, tipList } from './tips/tipList.js'
import { locationList } from './locations/locationList.js'
// const allFish = getFish()

// for (const fish of allFish) {
//     console.log(fish)
// }

// const parentHTMLElement = document.querySelector("#fishList")

// parentHTMLElement.innerHTML = fishList()


// const parentHTMLElementFish = document.querySelector("#fishList")
// parentHTMLElementFish.innerHTML = mostHolyFish()

const fishListHTML = document.querySelector("#fishList")
fishListHTML.innerHTML = mostHolyFish() + soldierFish() + nonHolyFish()



const tipListHTML = document.querySelector("#travelTips")
tipListHTML.innerHTML = tipList()


const tankListHTML = document.querySelector("#tankProcess")
tankListHTML.innerHTML = tankList()


const locationListHTML = document.querySelector("#locationList")
locationListHTML.innerHTML = locationList()