const homeController = require('../app/http/controllers/homeController');
const authController = require('../app/http/controllers/authController');
const cartController = require('../app/http/controllers/customers/cartController');



function initRoutes(app){

    //GET
    app.get('/', homeController().index);
    app.get('/login', authController().login);  
    app.get('/register', authController().register);
    app.get('/cart', cartController().cart);

    //POST
    app.post('/register', (req, res) => {
        res.render('auth/register');
    });
};


module.exports = initRoutes;