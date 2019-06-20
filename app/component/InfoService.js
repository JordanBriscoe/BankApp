import Info from "../model/info.js";


let _info = new Info({userName: 'Wes', balance: 1})

export default class InfoService{
    constructor(){
        console.log('Service says hi')
    }

    get Info(){
        return new Info(_info)
        // return _info this doesn't break reference
    }
}