const express = require('express');
const router = express.Router();

const {getAllProduct,getAllProductByName} = require("../controller/product-controller");

router.route('/').get(getAllProduct);
router.route('/filter').get(getAllProductByName);

module.exports = router;