import Info from "../model/info.js";


let state = {  //single source of truth for all data that the app cares about
    info: new Info({userName: 'Wes', balance: 1})
}

let subscribers = {
    info: []
}
function setState(propName, val){
    state[propName] = val
    subscribers[propName].forEach(fn => fn())
}

export default class InfoService{
    constructor(){
        console.log('Service says hi')
    }

    addSubscriber(propName, fn){
        subscribers[propName].push(fn)
    }

    deposit(){
        let info = this.Info
        info.balance += 100
        setState('info', info)
    }

    withdraw(){
        let info = this.Info
        info.balance -= 1000
        setState('info', info)

    }

    get Info(){
        return new Info(state.info)
        // return _info this doesn't break reference
    }
}