const router = require( 'express' ).Router();
const pizzaRoutes = require( './pizza-routes' );

// add prefix of pizzas for pizza-routes
router.use( '/pizzas', pizzaRoutes )

module.exports = router;