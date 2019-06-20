import InfoController from "./component/InfoController";



class App{
    constructor(){
        this.controllers = {
            infoController: new InfoController
        }
    }
}
window['app'] = new App