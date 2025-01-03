import express from "express";
import {
    createStaff,
    deleteStaff,
    getAllStaffs,
    getAttendanceAndStaffCount,
    getStaffById,
    loginStaff,
    refreshAccessTokenStaff,
    updateStaff,
    uploadBulkStaffData,
} from "../Controller/staff.Controller.js";
import { authenticateToken } from "../Middlewares/authenticateToken.js";
import { uploadMiddleware } from "../Middlewares/uploadMiddleware.js";

const router = express.Router();

router.post("/create-staff/:schoolId", createStaff);
router.get("/get-all-staffs", getAllStaffs);
router.get("/get-single-staff/:id", authenticateToken, getStaffById);
router.put("/update-staff/:id", updateStaff);
router.delete("/delete-staff/:id", deleteStaff);

router.post("/login-staff", loginStaff);
router.post("/refresh-token-staff", refreshAccessTokenStaff);

router.get("/staff-weekly-attendance", getAttendanceAndStaffCount);
router.post(
    "/bulk-upload-staff/:schoolId",
    uploadMiddleware,
    uploadBulkStaffData
);
export { router as staffRoute };
