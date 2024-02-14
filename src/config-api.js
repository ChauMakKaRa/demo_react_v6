const api = {
    //user
    products: 'http://localhost:3001/api/products',
    search: 'http://localhost:3001/api/search',
    detail: 'http://localhost:3001/api/detail',
    detail_product: 'http://localhost:3001/api/detail-product',
    cart: 'http://localhost:3001/api/cart',
    login: 'http://localhost:3001/api/login',
    register: 'http://localhost:3001/api/register',
    user: 'http://localhost:3001/api/user',
    order: 'http://localhost:3001/api/order',
    detailorder: 'http://localhost:3001/api/detailorder',
    my_account: 'http://localhost:3001/api/my-account',
    address: 'http://localhost:3001/api/address',
    changepass: 'http://localhost:3001/api/pass',
    contacts: 'http://localhost:3001/api/contacts',
    repair: 'http://localhost:3001/api/repair',

    // admin
    admin: 'http://localhost:3001/api/admin',
    userexceptadmin: 'http://localhost:3001/api/user-except-admin',
    delete_all_checked: 'http://localhost:3001/api/delete_user_checked',
    get_all_order: 'http://localhost:3001/api/get-all-order',
    contacts_admin: 'http://localhost:3001/api/contacts-admin',
    cart_admin: 'http://localhost:3001/api/cart-admin',

    //shipper

    cart_shipper: 'http://localhost:3001/api/cart-shipper',
    repair_shipper: 'http://localhost:3001/api/repair-shipper',
};

export default api;
