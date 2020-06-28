import React, { Component } from 'react';

class AdminEditUser extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h4>Edit User</h4>

                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <form>
                                <div className="form-group">
                                    <label>Username:</label>
                                    <input type="text"
                                        className="form-control" id="input-username"
                                        placeholder="Username"
                                        required
                                        onChange={this.onChange}
                                        name="username"
                                    >
                                    </input>
                                </div>
                                <div className="form-group">
                                    <label>Password:</label>
                                    <input type="text"
                                        className="form-control" id="input-password"
                                        placeholder="Password"
                                        required
                                        onChange={this.onChange}
                                        name="password"
                                    >
                                    </input>
                                </div>
                                <button type="submit" className="btn btn-primary"
                                    onClick={this.onSubmit}
                                >Lưu lại</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default AdminEditUser;