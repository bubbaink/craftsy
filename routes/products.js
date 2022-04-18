var express = require('express');
var router = express.Router();
let {cart, detail}=require("../controllers/productController")
/* GET users listing. */

router.get('/cart', cart);
router.get('/datail', detail);
module.exports = router;
