import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer font-small indigo">
                <div className="container">
                    <div className="row text-center d-flex justify-content-center pt-5 mb-3">
                        <div className="col-md-2 mb-3">
                            <h6 className="text-uppercase font-weight-bold">
                                <a href="#!">About us</a>
                            </h6>
                        </div>
                        <div className="col-md-2 mb-3">
                            <h6 className="text-uppercase font-weight-bold">
                                <a href="#!">Products</a>
                            </h6>
                        </div>
                        <div className="col-md-2 mb-3">
                            <h6 className="text-uppercase font-weight-bold">
                                <a href="#!">Awards</a>
                            </h6>
                        </div>
                        <div className="col-md-2 mb-3">
                            <h6 className="text-uppercase font-weight-bold">
                                <a href="#!">Help</a>
                            </h6>
                        </div>
                        <div className="col-md-2 mb-3">
                            <h6 className="text-uppercase font-weight-bold">
                                <a href="#!">Contact</a>
                            </h6>
                        </div>

                    </div>
                    <hr className="rgba-white-light" />
                    <div className="row d-flex text-center justify-content-center mb-md-0 mb-4">
                        <div className="col-md-8 col-12 mt-5">
                            <h1 className={'title01'}>The Wardrobe</h1>
                        </div>

                    </div>
                    <hr/>


                </div>
                <div className="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="//localhost:3000"> wardrobe.com</a>
                </div>

            </footer>
        );
    }
}

export default Footer;
