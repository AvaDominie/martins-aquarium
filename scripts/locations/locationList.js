import { getLocation } from "../database.js"



export const locationList = () => {
    const listLocation = getLocation()

    let htmlString = '<article class="locationList"> <h2>List of location</h2>'

for (const location of listLocation) {
    
    htmlString += `<dl class="location card">
    <dt class="location_location"><strong>${location.location}</strong></dt>
    <dd class="location_waterInfo">${location.waterInfo}</dd>
    <dd class="location_fishInfo">${location.fishInfo}</dd>
    </dl>`

}
htmlString += `</article>`
return htmlString

}