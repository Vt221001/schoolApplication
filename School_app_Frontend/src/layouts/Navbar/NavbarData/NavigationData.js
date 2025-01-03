import {
  FaBell,
  FaBook,
  FaHome,
  FaPen,
  FaUserFriends,
  FaUsers,
  FaUserCheck,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaBookOpen,
  FaChartBar,
  FaDollarSign,
  FaCogs,
  FaFileUpload,
} from "react-icons/fa";
import { BsDatabaseFillUp } from "react-icons/bs";
import { FaIdCard, FaRegCircle } from "react-icons/fa6";
import { MdAssignment, MdAssignmentAdd } from "react-icons/md";
import { Navigate } from "react-router-dom";

export const navigation = [
  {
    name: "Dashboard",
    to: "/school/dashboard",
    icon: FaHome,
    current: true,
    roles: ["Admin", "Teacher", "Student", "Parent"],
  },
  {
    name: "Student",
    to: "#",
    icon: FaUsers,
    current: false,
    roles: ["Admin", "Teacher"],
    children: [
      {
        name: "Student Information",
        to: "/school/student-information",
        icon: FaRegCircle,
        roles: ["Admin", "Teacher", "Student"],
      },
      {
        name: "Student Admission",
        to: "/school/student-admission",
        icon: FaRegCircle,
        roles: ["Admin", "Teacher", "Student"],
      },
    ],
  },
  {
    name: "Form",
    to: "#",
    icon: FaUsers,
    current: false,
    roles: ["Admin"],
    children: [
      {
        name: "Student Blank Form",
        to: "/school/student-blank-form",
        icon: FaRegCircle,
        roles: ["Admin"],
      },
      {
        name: "Student Fill Form",
        to: "/school/student-fill-form",
        icon: FaRegCircle,
        roles: ["Admin", "Teacher", "Student"],
      },
    ],
  },

  {
    name: "Attendance",
    to: "#",
    icon: FaUserCheck,
    current: false,
    roles: ["Teacher", "Admin"],
    children: [
      {
        name: "Student Attendance",
        to: "/school/attendance",
        icon: FaRegCircle,
        roles: ["Teacher", "Admin"],
      },
      {
        name: "Teacher Attendance",
        to: "/school/teacher-attendance",
        icon: FaRegCircle,
        roles: ["Admin"],
      },
      {
        name: "Staff Attendance",
        to: "/school/staff-attendance",
        icon: FaRegCircle,
        roles: ["Admin"],
      },
    ],
  },
  {
    name: "Teacher",
    to: "#",
    icon: FaChalkboardTeacher,
    current: false,
    roles: ["Admin"],
    children: [
      {
        name: "Teacher Information",
        to: "/school/all-teachers",
        icon: FaRegCircle,
        roles: ["Admin"],
      },
      {
        name: "Add Teacher",
        to: "/school/teacher-add",
        icon: FaRegCircle,
        roles: ["Admin"],
      },
    ],
  },
  {
    name: "Parent",
    to: "#",
    icon: FaUserFriends,
    current: false,
    roles: ["Admin"],
    children: [
      {
        name: "Parent Information",
        to: "/school/parent-information",
        icon: FaRegCircle,
        roles: ["Admin"],
      },
    ],
  },

  {
    name: "Staff",
    to: "/staff",
    icon: FaIdCard,
    current: false,
    roles: ["Admin"],
    children: [
      {
        name: "Staff Information",
        to: "/school/all-staffs",
        icon: FaRegCircle,
        roles: ["Admin"],
      },
      {
        name: "Add Staff",
        to: "/school/staff-add",
        icon: FaRegCircle,
        roles: ["Admin"],
      },
    ],
  },
  {
    name: "Academic",
    to: "#",
    icon: FaGraduationCap,
    current: false,
    roles: ["Admin", "Teacher", "Parent", "Student"],
    children: [
      {
        name: "Class TimeTable",
        to: "/school/class-timetable",
        icon: FaRegCircle,
        roles: ["Admin"],
      },
      {
        name: "Class TimeTable",
        to: "/school/class-timetable-user",
        icon: FaRegCircle,
        roles: ["Student", "Teacher", "Parent"],
      },

      {
        name: "Teacher Timetable",
        to: "/school/teacher-timetable",
        icon: FaRegCircle,
        roles: ["Admin"],
      },
      {
        name: "Create TimeTable",
        to: "/school/create-timetable",
        icon: FaRegCircle,
        roles: ["Admin"],
      },
      // {
      //   name: "Assign Teacher",
      //   to: "/school/assign-teacher",
      //   icon: FaCheckCircle,
      //   roles: ["Admin"],
      // },
      {
        name: "Create Section",
        to: "/school/create-section",
        icon: FaRegCircle,
        roles: ["Admin"],
      },
      {
        name: "Create Class",
        to: "/school/create-class",
        icon: FaRegCircle,
        roles: ["Admin"],
      },
      {
        name: "Add Subjects",
        to: "/school/add-subjects",
        icon: FaRegCircle,
        roles: ["Admin"],
      },
      {
        name: "Create Subject Group",
        to: "/school/create-subject-group",
        icon: FaRegCircle,
        roles: ["Admin"],
      },
    ],
  },

  {
    name: "Fees",
    to: "/school/student-fees",
    icon: FaUserFriends,
    current: false,
    roles: ["Student", "Parent"],
  },
  {
    name: "Class TimeTable",
    to: "/school/class-timetable",
    icon: FaUserFriends,
    current: false,
    roles: ["Student, Teacher, Admin"],
  },
  {
    name: "Lesson Plan",
    to: "/school/student-lesson-Plan",
    icon: FaUserFriends,
    current: false,
    roles: ["Student", "Parent"],
  },
  {
    name: "Syllabus Status",
    to: "/school/student-syallabus-status",
    icon: FaUserFriends,
    current: false,
    roles: ["Student", "Parent"],
  },
  {
    name: "Homework",
    to: "/school/student-homework",
    icon: MdAssignmentAdd,
    current: false,
    roles: ["Student", "Parent"],
  },

  {
    name: "Examination",
    to: "#",
    icon: FaPen,
    current: false,
    roles: ["Admin", "Teacher", "Student", "Parent"],
    children: [
      {
        name: "Exam Group",
        to: "/school/exam-group",
        icon: FaRegCircle,
        roles: ["Admin"],
      },
      {
        name: "Exam Type",
        to: "/school/exam-type",
        icon: FaRegCircle,
        roles: ["Admin"],
      },
      {
        name: "Add Marks",
        to: "/school/add-marks",
        icon: FaRegCircle,
        roles: ["Admin", "Teacher"],
      },
      {
        name: "Exam Schedule",
        to: "/school/exam-schedule",
        icon: FaRegCircle,
        roles: ["Admin"],
      },
      {
        name: "View Exam Schedule",
        to: "/school/view-exam-schedule",
        icon: FaRegCircle,
        roles: ["Admin", "Teacher"],
      },
      {
        name: "View Exam Schedule",
        to: "/school/view-exam-schedule-student-and-parent",
        icon: FaRegCircle,
        roles: ["Student", "Parent"],
      },
      {
        name: "View Result",
        to: "/school/view-result",
        icon: FaRegCircle,
        roles: ["Student", "Parent"],
      },

      {
        name: "View Marks",
        to: "/school/view-marks",
        icon: FaRegCircle,
        roles: ["Admin", "Teacher"],
      },
    ],
  },
  {
    name: "Home Work",
    to: "#",
    icon: MdAssignment,
    current: false,
    roles: ["Admin", "Teacher"],
    children: [
      {
        name: "Add Home Work",
        to: "/school/add-home-work",
        icon: FaRegCircle,
        roles: ["Admin", "Teacher"],
      },
      {
        name: "View Home Work",
        to: "/school/view-home-work",
        icon: FaRegCircle,
        roles: ["Admin", "Teacher"],
      },
    ],
  },

  {
    name: "Lesson Plan",
    to: "#",
    icon: FaBookOpen,
    current: false,
    roles: ["Admin", "Teacher"],
    children: [
      {
        name: "Manage Lesson Plan",
        to: "/school/manage-lesson-Plan",
        icon: FaRegCircle,
        roles: ["Admin", "Teacher"],
      },
      {
        name: "Syllabus Status",
        to: "/school/syallabus-status",
        icon: FaRegCircle,
        roles: ["Admin", "Teacher"],
      },
    ],
  },
  {
    name: "Results",
    to: "/results",
    icon: FaChartBar,
    current: false,
    roles: ["Admin"],
    children: [
      {
        name: "All Students Result",
        to: "/school/students-results",
        icon: FaRegCircle,
        roles: ["Admin"],
      },
    ],
  },
  {
    name: "Fees Management",
    to: "/fees",
    icon: FaDollarSign,
    current: false,
    roles: ["Admin"],
    children: [
      {
        name: "Create Fees",
        to: "/school/create-fees",
        icon: FaRegCircle,
        roles: ["Admin"],
      },
      {
        name: "Fees Installment",
        to: "/school/fees-installment",
        icon: FaRegCircle,
        roles: ["Admin"],
      },
      {
        name: "Student Fees",
        to: "/school/student-fees-page",
        icon: FaRegCircle,
        roles: ["Admin"],
      },
      {
        name: "Class Fee Records",
        to: "/school/class-fees-record",
        icon: FaRegCircle,
        roles: ["Admin"],
      },
      {
        name: "Monthly Fees Payment",
        to: "/school/monthly-fees-payment",
        icon: FaRegCircle,
        roles: ["Admin"],
      },
    ],
  },
  {
    name: "Transport",
    to: "/transpost",
    icon: FaDollarSign,
    current: false,
    roles: ["Admin"],
    children: [
      {
        name: "Add Transport",
        to: "/school/add-transport",
        icon: FaRegCircle,
        roles: ["Admin"],
      },
      {
        name: "Add Route",
        to: "/school/fees-installment",
        icon: FaRegCircle,
        roles: ["Admin"],
      },
      {
        name: "Student Fees",
        to: "/school/student-fees-page",
        icon: FaRegCircle,
        roles: ["Admin"],
      },
      {
        name: "Class Fee Records",
        to: "/school/class-fees-record",
        icon: FaRegCircle,
        roles: ["Admin"],
      },
      {
        name: "Monthly Fees Payment",
        to: "/school/monthly-fees-payment",
        icon: FaRegCircle,
        roles: ["Admin"],
      },
    ],
  },
  {
    name: "My Attendance",
    to: "/school/student-attendance-view",
    icon: FaBell,
    current: false,
    roles: ["Student", "Parent"],
  },
  {
    name: "My Attendance",
    to: "/school/teacher-attendance-view",
    icon: FaBell,
    current: false,
    roles: ["Teacher"],
  },
  {
    name: "My Attendance",
    to: "/school/staff-attendance-view",
    icon: FaBell,
    current: false,
    roles: ["Staff"],
  },
  {
    name: "Notice",
    to: "/notice",
    icon: FaBell,
    current: false,
    roles: ["Admin", "Teacher", "Student", "Parent"],
    children: [
      {
        name: "Create Notice",
        to: "/school/create-notice",
        icon: FaRegCircle,
        roles: ["Admin"],
      },
      {
        name: "View All Notices",
        to: "/school/view-notice",
        icon: FaRegCircle,
        roles: ["Student", "Teacher", "Admin", "Parent"],
      },
    ],
  },
  {
    name: "Setting",
    to: "/setting",
    icon: FaCogs,
    current: false,
    roles: ["Admin"],
    children: [
      {
        name: "Contact Information",
        to: "/school/add-conatct-information",
        icon: FaRegCircle,
        roles: ["Admin"],
      },
    ],
  },
  {
    name: "Upload Records",
    to: "/upload",
    icon: BsDatabaseFillUp,
    current: false,
    roles: ["Admin"],
    children: [
      {
        name: "Students Records",
        to: "/school/upload-student-records",
        icon: FaRegCircle,
        roles: ["Admin"],
      },
      {
        name: "Student Attendance",
        to: "/school/upload-student-attendance-records",
        icon: FaRegCircle,
        roles: ["Admin"],
      },
      {
        name: "Teachers Records",
        to: "/school/upload-teacher-records",
        icon: FaRegCircle,
        roles: ["Admin"],
      },
      {
        name: "Teachers Attendance",
        to: "/school/upload-teacher-attendance-records",
        icon: FaRegCircle,
        roles: ["Admin"],
      },
      {
        name: "Staff Records",
        to: "/school/upload-staff-records",
        icon: FaRegCircle,
        roles: ["Admin"],
      },
    ],
  },
];
