

const Header = () => {
    return (
        <header
            className="masthead"
            style={{ backgroundImage: 'url("assets/img/about-bg.jpg")' }}
        >
            <div className="container position-relative px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="page-heading">
                            <h2>Man must explore, and this is exploration at its greatest</h2>
                            <span className="subheading">Posted by Charles Smith.</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header