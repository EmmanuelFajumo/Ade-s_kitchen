import { useState } from "react"


const Form = ({balance, setBalance}) => {
    const[amount, setAmount] = useState(0)
    const withdraw = (amount)=>{
        if(amount == ""){
            alert("Oga, how much you want withdraw")
            return false;
        }
        if(amount > balance){
            alert("Insufficieint acount balance")
            return false;
        }
        var amount_to_withdraw = Number(amount);
        setBalance(balance - amount_to_withdraw)

    }

    const deposite = (amount) => {
        if(amount == ""){
            alert("How much do you want to deposite?")
            return false;
        }
        var amount_deposited = Number(amount);
        setBalance(balance + amount_deposited)
        return false;

    }

  return (
    <div className="row">
        <div className="col-md-8 offset-md-2 py-4">
            <div className="mb-2 col-12">
                {/* How to manage input in react */}
                <input className="form-control" type="number" placeholder="Enter amount" value={amount} onChange={(e) =>{
                    setAmount(e.target.value)
                }} />
            </div>
                <div className="mb-2 col-6">
                    <button className="btn btn-danger" onClick={() => withdraw(amount)}>Withdraw</button>
                </div>
                <div className="mb-2 col-6">
                    <button className="btn btn-primary" onClick={() => deposite(amount)}>Deposit</button>
                </div>
        </div>
    </div>
)
}

export default Form