import Header from "./playground_components/Header"
import Content from "./playground_components/Content"
import Footer from "./playground_components/Footer"
import pix from "./assets/post.jpg"

//I want tp se hook useState() I need to import it from react
import {useState} from "react"




const Playground = () =>{
    // function sayHello(){
    //     alert("Hello Mr Akpan")
    // }


    


    // we sent a request to an api and we got back appname


    // Prop - way a parent component can send properties to its children: syntax - key={}
    var appname = "Blogger"


    const [count, setCount] = useState(0) //count is the container and setCount is te only one that can change the count value. 
    //var count = 0; //because count wil be changing, we cannot ke
    var fruits = ['Mango', "Orange", "Banana"]
    var products =  [
        {
            id:1,
            name: "Apple cide Vinegar",
            price: 2000
        },
        {
            id:2,
            name: "Orange cide Vinegar",
            price: 5000
        },
         {
            id:3,
            name: "Cashew",
            price: 9000
        }
    ]

    //stae is used to keep a data that could be changing: reacht will update it by itself. Everywhere the state is used
    return(
        <>
            <Header xyz={appname} abc={count} />
            {/* The process of passing data from parent component to a child component us called Prop drilling  */}
            <Content count={count} fruits={fruits} products={products} updater={setCount} />  
            <Footer />






           {/* How to display an image inside the public folder */}
           <img src="/assets/img/home-bg.jpg" alt=""  className="img-fluid"/>

           {/* How to display an image inside the src folder */}
           <img src={pix} alt="" />

        
        </>
    )
}

export default Playground