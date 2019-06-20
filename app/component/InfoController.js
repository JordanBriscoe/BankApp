import InfoService from "./InfoService.js";


let _infoService = new InfoService

function drawInfo(){
    let infoCopy = _infoService.Info
    let infoElem = document.querySelector('#info-details')
    infoElem.innerHTML = infoCopy.Template
}



export default class InfoController{
    constructor(){
        _infoService.addSubscriber('info', drawInfo)
        drawInfo()
        console.log('Controller says hi')
    }

    deposit(){
        _infoService.deposit()
    }

    withdraw(){
        _infoService.withdraw()
    }
}