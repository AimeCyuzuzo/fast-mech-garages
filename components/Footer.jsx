import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return ( 
        <footer>
            <div className="container-fluid">
            <div className="row p-0 justify-content-center">
                <section className="col-12 p-3">
                    <div className="container-fluid">
                        <div className="row p-0 justify-content-between">
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-10 col-11">
                                <div>
                                    <img src="/logo.svg" alt="" />
                                </div>
                                <div className="text-gray">
                                    <p>PrivaCy policy</p>
                                    <p>Terms of use</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-10 col-11">
                                <div>
                                    <h2>Quick nav</h2>
                                    <p className="footerHeaderUnderline"></p>
                                </div>
                                <div>
                                    <ul>
                                        <li>About</li>
                                        <li>Sign up</li>
                                        <li>Log in</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-10 col-11">
                                <div>
                                    <h2>Useful links</h2>
                                    <p classNameName="footerHeaderUnderline"></p>
                                </div>
                                <div>
                                    <ul>
                                        <li>Video appointment</li>
                                        <li>Manage</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        </footer>
     );
}
 
export default Footer;