import { getTravel, getTank } from '../database.js'

export const tipList = () => {
    const tips = getTravel()

    let htmlString = '<article class="travelTips"> <h2>Travel Tips</h2>'

    for (const tip of tips) {
        
        htmlString += `<ul class ="travel card">
        <li class="travel_tip">${tip.info}</li>
        </ul>
        `
    }
    htmlString += `</article>`
    return htmlString


}



export const tankList = () => {
    const tanktip = getTank()
    
    let htmlString = '<aside class ="tankProcess"> <h2>Tank Process</h2>'

    for (const tank of tanktip) {

        htmlString += `<dl class="tank card">
        <dt class ="tank_tip"><strong>${tank.tip}</strong></dt>
        <dd class ="tank_info">${tank.info}</dd>
        </dl>`
        
    }
    htmlString += `</aside>`
    return htmlString
}