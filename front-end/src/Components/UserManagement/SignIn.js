import React, {Component} from 'react';

class SignIn extends Component {
    render() {
        return (
            <div className={'container my-5'}>
                <div className={'row'}>
                    <div className={'col-xl-12'}>
                        <div className={'card card-body'}>
                            <h2 className={'text-center header01'}>Sign In</h2>
                            <br/>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="inputEmail">Email</label>
                                    <input type="email" className="form-control" id="inputEmail"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputPassword">Password</label>
                                    <input type="password" className="form-control" id="inputPassword"/>
                                </div>
                                <button type="button" className="btn btn-info btn-block btn-round">Sign in to my account</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;
