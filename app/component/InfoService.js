import Info from "../model/info.js";


let _info = new Info({userName: 'Wes', balance: 1})

export default class InfoService{
    constructor(){
        console.log('Service says hi')
    }
}