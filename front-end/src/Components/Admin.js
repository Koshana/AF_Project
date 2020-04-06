import React, {Component} from 'react';

class Admin extends Component {
    render() {
        return (
            <div className={'container my-5'}>
                <div className={'row'}>
                    <div className={'col-xl-4'}>
                        <div className="btn-group-vertical">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-toggle="modal"
                                data-target="#newStoreManager"
                            >
                                Add New Store Manager
                            </button>
                            <button
                                type={'button'}
                                className={'btn btn-secondary'}
                            >
                                View Store Managers
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-toggle={'modal'}
                                data-target={'#newCategory'}
                            >
                                Add New Category
                            </button>
                        </div>
                    </div>
                    <div className={'col-xl-8'}>
                        <table className="table table-bordered table-dark">
                            <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope={'col'}>Password</th>
                                <th scope={'col'}>Contact Number</th>
                                <th scope={'col'}>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Koshana</td>
                                <td>Pravinath</td>
                                <td>kpthenuwara@gmail.com</td>
                                <td>12345678</td>
                                <td>0775103998</td>
                                <td>
                                    <button className={'btn btn-danger btn-block mr-2'} type={'button'}>
                                        Delete
                                    </button>
                                    <button className={'btn btn-info btn-block mr-2'} type={'button'}>
                                        Edit
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Janith</td>
                                <td>Prathapa</td>
                                <td>janith.roxx@yahoo.com</td>
                                <td>kol12345</td>
                                <td>0715353552</td>
                                <td>
                                    <button className={'btn btn-danger btn-block mr-2'} type={'button'}>
                                        Delete
                                    </button>
                                    <button className={'btn btn-info btn-block mr-2'} type={'button'}>
                                        Edit
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td >Malidi</td>
                                <td>Wageesha</td>
                                <td>malidiwageesha8@gmail.com</td>
                                <td>mali12345</td>
                                <td>0712407207</td>
                                <td>
                                    <button className={'btn btn-danger btn-block mr-2'} type={'button'}>
                                        Delete
                                    </button>
                                    <button className={'btn btn-info btn-block mr-2'} type={'button'}>
                                        Edit
                                    </button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Admin;
