import React, {Component} from 'react';

class NewStoreManager extends Component {
    render() {
        return (
            <div>
                <div className="modal fade" id="newStoreManager" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add New Store Manager</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="inputMFname">First Name</label>
                                        <input type="text" className="form-control" id="inputMFname"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputMLname">Last Name</label>
                                        <input type="text" className="form-control" id="inputMLname"/>
                                    </div>
                                    <div className={'from-group'}>
                                        <label htmlFor={'inputMemail'}>Email</label>
                                        <input type={'email'} className={'form-control'} id={'inputMemail'}/>
                                    </div>
                                    <div className={'form-group'}>
                                        <label htmlFor={'inputMpassword'}>Password</label>
                                        <input type={'password'} className={'form-control'} id={'inputMpassword'}/>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Add New Store Manager</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewStoreManager;
