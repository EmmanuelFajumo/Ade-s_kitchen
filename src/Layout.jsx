import Header from "./Header.jsx"
import Banner from "./Banner.jsx"
import Content from "./Content.jsx"
import Table from "./Table.jsx"

function Layout(){
    return (
        <div className="container">
            <div classNaame="row">
                <div className="col-12">
                    <Header />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Banner />
                </div>
            </div>
            <div className="row py-4">
                <Content />
            </div>
            <div className="row">
                <div className="col-12">
                    <Table />
                </div>
            </div>
        </div>
    )

}
export default Layout