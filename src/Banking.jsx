import { useState } from "react"

import AccountBalance from "./banking_components/AccountBalance"
import Form from "./banking_components/Form"
import Hi from "./banking_components/Hi"
import Hello from "./banking_components/Hello"



const Banking = () => {
    const[balance, setBalance] = useState(0)
//   The balance state has to be her in the parent because mre than one compnents need it


  return (
   <>


    <div className="container">
        {/* Other components assembled here */}
        {
            balance > 100 ? <p className="text-center text-success">You are doing well</p> : <p className="text-center text-warning">You are poor</p>
        }

        <Hello />
        <Hi />
         <AccountBalance balance={balance} />
        <Form balance={balance} setBalance={setBalance} />
    </div>
   
   </>
  )
}

export default Banking