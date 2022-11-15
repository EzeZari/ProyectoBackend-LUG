import { Router } from "express";
import productController from "../../Controller/Product";

const router = Router();


//Utilizamos las controladoras creadas para los productos.

router.get("/", productController.get)                            /* http://localhost:4000/api/product */
//Utilizar parametros para seleccionar un producto único
router.get('/:Name_Product', productController.getunique)         /* http://localhost:4000/api/product/Fruta */

router.post("/", productController.add)

router.delete("/:Name_Product", productController.delete)

export default router;