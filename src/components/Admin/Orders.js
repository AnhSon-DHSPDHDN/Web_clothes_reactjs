import React, { Component } from 'react';
import NavAdmin from './NavAdmin';
import { actGetAllCustomerRequest, actDeleteCustomerRequest } from '../../action/index';
import { connect } from 'react-redux';

class Orders extends Component {

    componentDidMount = () => {
        this.props.getAllOrder()
    }

    showAllOrders = () => {
        let result = <tr></tr>
        let { customer } = this.props;
        if (customer.length > 0) {
            result = customer.map((order, index) => {
                return <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{order.fullName}</td>
                    <td>{order.email}</td>
                    <td>{order.phone}</td>
                    <td>{order.address}</td>
                    <td>{order.total}</td>
                    <td>
                        <button type="button" className="btn btn-success">Edit</button>
                        <button type="button" className="btn btn-primary"
                            onClick={() => this.onDelete(order.id)}
                        >Delete</button>
                    </td>
                </tr>
            })
        }
        return result;
    }

    onDelete = (id) => {
        this.props.deleteOrder(id)
    }

    render() {
        return (
            <div className="container">
                <NavAdmin />
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Orders Manager</h3>
                    </div>
                    <div className="panel-body">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.showAllOrders()}
                            </tbody>
                        </table>

                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        customer: state.customer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getAllOrder: () => {
            dispatch(actGetAllCustomerRequest())
        },
        deleteOrder: (id) => {
            dispatch(actDeleteCustomerRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);