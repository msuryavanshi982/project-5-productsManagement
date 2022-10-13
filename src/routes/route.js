const express=require("express")
const router=express.Router()
const userController=require("../controllers/userControllers")
const productController = require("../controllers/productControllers")
const middleWare = require("../middleware/auth");


let {createProduct, productsById, updateProducts,deleteProduct} = productController
let {createUser, userLogin, getUser, updateUsersProfile} = userController;
let {authentication, authorization} = middleWare;

// ==========> Create User Api <============ 
router.post("/register", createUser);

// =========> User Login Api <============
router.post("/login", userLogin);

// =========> Get User Api <============
router.get("/user/:userId/profile", authentication, authorization, getUser);

// =========> Update User Profile Api <============
router.put("/user/:userId/profile", authentication, authorization, updateUsersProfile);

// =========> Create Product Api <===========
router.post("/products", createProduct);

// =========> Get Products By Id <=============
router.get("/products/:productId", productsById )

// =========> Update Product <=============
router.put("/products/:productId", updateProducts)

//=========> deleteProduct<==================
router.delete('/products/:productId', deleteProduct)

module.exports=router