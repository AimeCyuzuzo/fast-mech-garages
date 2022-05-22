import { Facebook, Instagram, Twitter } from "@material-ui/icons";

const NavBar = () => {
    return ( 
        <div>
           <header>
            <div className="container-fluid p-1">
                <div className="row p-0 justify-content-around">
                    <section className="col-1 headerLogoContainer">
                        {/* <img src="/logo.svg" alt="" />  */}
                        <h1>FMGs</h1>
                    </section>
                    <section className="col-4">
                        <nav className="navbar navbar-expand-sm">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Forum
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="admin/dashboard">
                                        Manage
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div className="navbar-for-small">
                            <button className="uk-button" type="button">&#9776;</button>
                            <div uk-dropdown>
                                <ul className="uk-nav uk-dropdown-nav">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Pricing</a></li>
                                    <li><a href="#">Chat Forum</a></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className="col-xl-2 col-lg-2 col-md-2 col-sm-10 col-10">
                        <div className="row movingIcons">
                            <div className="col-4 icon1">
                                {/* <img src="/getcertified.jpg" alt="" /> */}
                                <Instagram />
                            </div>
                            <div className="col-4 icon2">
                                {/* <img src="/getcertified.jpg" alt="" /> */}
                                <Facebook />
                            </div>
                            <div className="col-4 icon3">
                                {/* <img src="/getcertified.jpg" alt="" /> */}
                                <Twitter />
                            </div>
                        </div>
                    </section>
                </div>
                </div>
        </header>
        </div>
     );
}
 
export default NavBar;