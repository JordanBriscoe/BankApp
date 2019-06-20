import InfoController from "./component/InfoController.js";



class App{
    constructor(){
        this.controllers = {
            infoController: new InfoController
        }
    }
}
window['app'] = new App