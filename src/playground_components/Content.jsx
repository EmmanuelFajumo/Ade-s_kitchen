const Content = ({count, fruits, products, updater}) =>{
    //count = 4 props must not be mutated

    const fruit = fruits.map(function(fru, index){
        return <li key={index}>{fru}</li>
    })

    const increase = () =>{
        updater(count  +1)
    }

    const decrease = () =>{
        updater(count-1)
    }
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Count : {count}</h1>
                        <ul>
                            {fruit}
                        </ul>
                    </div>
                    <div className="col-12">
                        <p>Available Products</p>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>product Name</th>
                                    <th>Product Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map(function(pro){
                                        return(
                                            <tr key={pro.id}>
                                                <td>{pro.id}</td>
                                                <td>{pro.name}</td>
                                                <td>{pro.price}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>

                        <button onClick={increase}> Increase </button>
                        {/* calling a function that responds to an event */}
                        <button onClick={decrease}> Decrease </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Content