import { Router } from "express";
import cartController from "../../Controller/Cart";

//Invocamos la ruta de express
const router = Router();

router.get("/", cartController.get)                    /* http://localhost:4000/api/cart */

router.post("/", cartController.add) 

router.delete("/:Name_Product", cartController.delete) /* http://localhost:4000/api/product  */

export default router;