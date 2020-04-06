import React, {Component} from 'react';

class SignUp extends Component {
    render() {
        return (
            <div className={'container my-5 '}>
                <div className={'row'}>
                    <div className={'col-xl-12'}>
                        <div className={'card card-body'}>
                            <h2 className={'text-center header01'}>Create an Account</h2>
                            <br/>
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-xl-6">
                                        <label htmlFor="inputFname">First Name</label>
                                        <input type="text" className="form-control" id="inputFname"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputLname">Last Name</label>
                                        <input type="text" className="form-control" id="inputLname"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputEmail">Email</label>
                                    <input type="email" className="form-control" id="inputEmail"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputPassword">Password</label>
                                    <input type="password" className="form-control" id="inputPassword"/>
                                    <small id="passwordHelpBlock" className="form-text text-muted">
                                        Your password must be 8-20 characters long, contain letters and numbers, and must
                                        not contain spaces, special characters, or emoji.
                                    </small>
                                </div>
                                <div className={'form-group'}>
                                    <label htmlFor={'contactNumber'}>Contact Number</label>
                                    <input type={'tel'} className={'form-control'} id={'contactNumber'} pattern={'[0-9]{3}-[0-9]{2}-[0-9]{3}'}/>
                                </div>

                                <button type="button" className="btn btn-info btn-block btn-round">Create My Account</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;
