import React, { Component } from 'react';

class AdminEditOrder extends Component {
    render() {
        return (
            <div className="container">
                <h4>Edit Orders</h4>

                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <form>
                            <div className="form-group">
                                <label>Full Name:</label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Full Name"
                                    required
                                    onChange={this.onChange}
                                    name="fullName"
                                >
                                </input>
                            </div>
                            <div className="form-group">
                                <label>Email:</label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Email"
                                    required
                                    onChange={this.onChange}
                                    name="email"
                                >
                                </input>
                            </div>
                            <div className="form-group">
                                <label>Phone:</label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Phone"
                                    required
                                    onChange={this.onChange}
                                    name="phone"
                                >
                                </input>
                            </div>
                            <div className="form-group">
                                <label>Address:</label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Address"
                                    required
                                    onChange={this.onChange}
                                    name="address"
                                >
                                </input>
                            </div>
                            <div className="form-group">
                                <label>Total:</label>
                                <input type="number"
                                    className="form-control"
                                    placeholder="Total"
                                    required
                                    onChange={this.onChange}
                                    name="total"
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
        );
    }
}

export default AdminEditOrder;