


export default class Info{
    constructor(data){
    this.userName = data.userName
    this.balance = data.balance
    }

    get Template(){
        return `
        <div class="card">
            <h4>Username: ${this.userName}</h4>
            <h4>Balance: ${this.balance}</h4>
        </div>
        `
    }
}