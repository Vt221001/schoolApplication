import express from "express";
import {
  createMaster,
  getMaster,
  getMasterById,
  loginMasterAdmin,
} from "../Controller/master.Controller.js";

const router = express.Router();

router.post("/create-master-admin", createMaster);
router.get("/get-all-master-admin", getMaster);
router.get("/get-master-admin/:id", getMasterById);
router.post("/login-master-admin", loginMasterAdmin);

export { router as masterRouter };
