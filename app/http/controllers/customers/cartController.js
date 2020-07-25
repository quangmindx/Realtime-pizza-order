function cartController(){
    return {
        cart(req, res) {
            res.render('customers/cart');
        }
    }
}

module.exports = cartController;