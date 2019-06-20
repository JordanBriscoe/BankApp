import InfoService from "./InfoService.js";


let _infoService = new InfoService

function drawInfo(){
    let infoCopy = _infoService.Info
    let infoElem = document.querySelector('#info-details')
    infoElem.innerHTML = infoCopy.Template
}


export default class InfoController{
    constructor(){
        drawInfo()
        console.log('Controller says hi')
    }

}