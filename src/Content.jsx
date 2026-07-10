import her from "./assets/hero.png"


const Content = () => {

    let myStyle = {
        color:"yellow", 
        backgroundColor:"purple"
    }
    return (
        <>
            <div className="col-md-5">
                <img src={her} alt="" className="img-fluid rounded shadow-sm" />
                <h3 style={myStyle}>Title</h3>
                <p>This is the description for this particulat blog post</p>
                <button className="btn btn-dark shadow-lg hover mt-2" onClick={function(){alert("You are welcoem to our page")}}>Learn More</button>
            </div>
            <div className="col-md-6">
                <img src={her} alt="" className="img-fluid rounded shadow-sm" />
                <h3 style={myStyle}>Title</h3>
                <p>This is the description for this particulat blog post</p>
                <button className="btn btn-dark shadow-lg hover mt-2" onClick={function(){alert("You are welcoem to our page")}} >Learn More</button>
            </div>
        </>
    )
}
export default Content