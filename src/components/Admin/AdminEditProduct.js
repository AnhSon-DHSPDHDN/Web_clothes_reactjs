import React, { Component } from 'react';

class AdminEditProduct extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h4>Edit Product</h4>

                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <form>
                                <div className="form-group">
                                    <label>Name Product:</label>
                                    <input type="text"
                                        className="form-control"
                                        placeholder="Name Product"
                                        required
                                        onChange={this.onChange}
                                        name="nameProduct"
                                    >
                                    </input>
                                </div>
                                <div className="form-group">
                                    <label>Size:</label>
                                    <input type="text"
                                        className="form-control"
                                        placeholder="Size"
                                        required
                                        onChange={this.onChange}
                                        name="size"
                                    >
                                    </input>
                                </div>
                                <div className="form-group">
                                    <label>Quantity:</label>
                                    <input type="number"
                                        className="form-control"
                                        placeholder="Size"
                                        required
                                        onChange={this.onChange}
                                        name="quantity"
                                    >
                                    </input>
                                </div>
                                <div className="form-group">
                                    <label>Price:</label>
                                    <input type="number"
                                        className="form-control"
                                        placeholder="Price"
                                        required
                                        onChange={this.onChange}
                                        name="price"
                                    >
                                    </input>
                                </div>
                                <div className="form-group">
                                    <label>Image (Link):</label>
                                    <input type="text"
                                        className="form-control"
                                        placeholder="Image Link"
                                        required
                                        onChange={this.onChange}
                                        name="image"
                                    >
                                    </input>
                                </div>
                                <div className="form-group">

                                    <div className="row">
                                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                            <label>Property:</label>
                                            <input type="checkbox"
                                                className="form-control"
                                                onChange={this.onChange}
                                                name="property"
                                            >
                                            </input>
                                        </div>
                                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                            <label>Hot:</label>
                                            <input type="checkbox"
                                                className="form-control"
                                                onChange={this.onChange}
                                                name="hot"
                                            >
                                            </input>
                                        </div>
                                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                            <label>New:</label>
                                            <input type="checkbox"
                                                className="form-control"
                                                onChange={this.onChange}
                                                name="new"
                                            >
                                            </input>
                                        </div>
                                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                            <label>Sale:</label>
                                            <input type="checkbox"
                                                className="form-control"
                                                onChange={this.onChange}
                                                name="sale"
                                            >
                                            </input>
                                        </div>
                                    </div>

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

export default AdminEditProduct;