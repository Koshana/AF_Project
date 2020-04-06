import React, {Component} from 'react';

class NewCategory extends Component {
    render() {
        return (
            <div>
                <div className="modal fade" id="newCategory" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add New Category</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="inputNcat">Category Name</label>
                                        <input type="text" className="form-control" id="inputNcat"/>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Add New Category</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewCategory;
