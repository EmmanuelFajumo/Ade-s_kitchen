const Header = (props) =>{
    console.log(props)
    return(
        <>
           <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Welcome to {props.xyz}</h1>
                    <p>Count : {props.abc}</p>
                </div>
            </div>
           </div>
        </>
    )
}
export default Header