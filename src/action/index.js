import callAPI from './../untils/callapi'
import * as Types from '../constants/ActionTypes'

// lấy tất cả user
export const fetchAllUserInDB = (users) => {
    return {
        type: Types.GET_ALL_USER_IN_DB,
        users: users
    }
}

export const getAllUsersAPI = () => {
    return dispatch => {
        return callAPI('users', 'GET', null).then(res => {
            dispatch(fetchAllUserInDB(res.data))
        })
    }
}

// đăng ký user
export const fetchNewUserRegister = (user) => {
    return {
        type: Types.ADD_NEW_USER,
        user: user
    }
}

export const addNewUserToAPI = (user) => {
    return dispatch => {
        return callAPI('users', 'POST', user).then(res => {
            dispatch(fetchNewUserRegister(res.data))
        })
    }
}
//Delete User
export const actDeleteUser = (id) => {
    return {
        type: Types.DELETE_USER,
        id: id
    }
}
export const actDeleteUserRequest = (id) => {
    return dispatch => {
        return callAPI(`users/${id}`, 'DELETE', null).then(() => {
            dispatch(actDeleteUser(id))
        })
    }
}

/** -----------------------------------------------------------PRODUCT------- */
export const actGetAllProduct = (products) => {
    return {
        type: Types.GET_ALL_PRODUCT,
        products: products
    }
}

export const actGetAllProductRequest = () => {
    return dispatch => {
        return callAPI('products', 'GET', null).then(res => {
            dispatch(actGetAllProduct(res.data))
        })
    }
}
// Delete Product
export const actDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id: id
    }
}
export const actDeleteProductRequest = (id) => {
    return dispatch => {
        return callAPI(`products/${id}`, 'DELETE', null).then(() => {
            dispatch(actDeleteProduct(id))
        })
    }
}

//Lấy SP by ID
export const actGetProductByID = (product) => {
    return {
        type: Types.GET_PRODUCT_BY_ID,
        product: product
    }
}

export const actGetProductByIDRequest = (id) => {
    return dispatch => {
        return callAPI(`products/${id}`, 'GET', null).then(res => {
            dispatch(actGetProductByID(res.data))
        })
    }
}


//--------------------------------------------------CART---------------

export const actAddToCart = (product, quantity) => {
    return {
        type: Types.ADD_TO_CART,
        product: product,
        quantity: quantity
    }
}

export const actGetAllCart = () => {
    return {
        type: Types.GET_ALL_CART
    }
}

export const actDeleteCartItem = (cart) => {
    return {
        type: Types.DELETE_CART_ITEM,
        cart: cart
    }
}

export const actUpCart = (cart) => {
    return {
        type: Types.UP_CART,
        cart: cart
    }
}

export const actDownCart = (cart) => {
    return {
        type: Types.DOWN_CART,
        cart: cart
    }
}

//----------------------------------------------CUSTOMER-----
export const actAddCustomer = (customer) => {
    return {
        type: Types.ADD_NEW_CUSTOMER,
        customer: customer
    }
}

export const actAddCustomerRequest = (customer) => {
    return dispatch => {
        return callAPI('customer', 'POST', customer).then(res => {
            dispatch(actAddCustomer(res.data))
        })
    }
}

export const actGetAllCustomer = (customer) => {
    return {
        type: Types.GET_ALL_CUSTOMER,
        customer: customer
    }
}

export const actGetAllCustomerRequest = () => {
    return dispatch => {
        return callAPI('customer', 'GET', null).then(res => {
            dispatch(actGetAllCustomer(res.data))
        })
    }
}
// Delete
export const actDeleteCustomer = (id) => {
    return {
        type: Types.DELETE_CUSTOMER,
        id: id
    }
}
export const actDeleteCustomerRequest = (id) => {
    return dispatch => {
        return callAPI(`customer/${id}`, 'DELETE', null).then(() => {
            dispatch(actDeleteCustomer(id))
        })
    }
}