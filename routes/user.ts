import { Router } from "express";
import {
  getUsers,
  getUser,
  insertUser,
  updateUser,
  deleteUser,
} from "../controllers/user_controller";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", insertUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
