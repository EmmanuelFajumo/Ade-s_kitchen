
const Table = () => {
    return (
        <>
            <table className="table table-hover table-bordered table-striped">
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Product</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Kerosene</td>
                        <td>N400</td>
                    </tr>
                     <tr>
                        <td>2</td>
                        <td>Diesel</td>
                        <td>N900</td>
                    </tr>
                     <tr>
                        <td>3</td>
                        <td>Bitum</td>
                        <td>N400</td>
                    </tr>
                </tbody>
            </table>
        
        </>
    )
}

export default Table