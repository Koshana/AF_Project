import React, {Component} from 'react';

class EditUser extends Component {
    render() {
        return (
            <div>
                <div className="modal fade" id="editUser" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Edit User</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-xl-6">
                                            <label htmlFor="inputUpFname">First Name</label>
                                            <input type="text" className="form-control" id="inputUpFname"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputUpLname">Last Name</label>
                                            <input type="text" className="form-control" id="inputUpLname"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputUpEmail">Email</label>
                                        <input type="email" className="form-control" id="inputUpEmail"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputUpPassword">Password</label>
                                        <input type="password" className="form-control" id="inputUpPassword"/>
                                    </div>
                                    <div className={'form-group'}>
                                        <label htmlFor={'contactNumberUp'}>Contact Number</label>
                                        <input
                                            type={'tel'}
                                            className={'form-control'}
                                            id={'contactNumberUp'}
                                            pattern={'[0-9]{3}-[0-9]{2}-[0-9]{3}'}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditUser;
