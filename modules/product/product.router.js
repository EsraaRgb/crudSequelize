import { Router } from "express";
import * as controller from './controller/product.js'

const router = Router()

router.get('/',controller.getAllProducts)
router.post('/',controller.addProduct)
router.delete('/:id',controller.deleteProduct)
router.put('/:id',controller.updateProduct)
router.get('/:id',controller.getProductById)
router.get('/search',controller.getProductByName)

export default router
