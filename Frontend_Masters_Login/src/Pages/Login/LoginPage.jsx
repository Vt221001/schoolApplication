import React, { useState } from "react";
import axios from "axios";
import LoginForm from "./LoginForm";
import { ToastContainer, toast } from "react-toastify";
import { PacmanLoader } from "react-spinners"; // Import PacmanLoader
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const [email, setEmail] = useState("test@example.com");
  const [role, setRole] = useState("Admin");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("123456");
  const [loader, setLoader] = useState(false); // Manage loader state

  const handleLogin = async (e) => {
    e.preventDefault();

    let apiEndpoint;
    switch (role) {
      case "Admin":
        apiEndpoint = `${
          import.meta.env.VITE_BACKEND_URL
        }/api/login-master-admin`;
        break;
      default:
        setError("Invalid role selected.");
        return;
    }

    try {
      setLoader(true); // Show loader while login is in progress

      const response = await axios.post(
        apiEndpoint,
        { email, password, role },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      const { accessToken, refreshToken, user } = await response.data.data;

      console.log("Login successful. User:", user);

      // Token ko localStorage mein store karein
      const userData = JSON.stringify({
        authToken: accessToken,
        refreshToken,
        name: user.name,
        schoolCode: user.schoolCode,
        role: user.role,
        email: user.email,
        frontendUrl: user.frontendUrl,
      });

      const encodedUserData = encodeURIComponent(userData);
      window.location.href = `${user.frontendUrl}/settingupdata?userData=${encodedUserData}`;

      toast.success("Login successful.");
    } catch (err) {
      toast.error("Login failed. Please check your credentials.");
      setError("Login failed. Please check your credentials.");
    } finally {
      setLoader(false); // Hide loader after login attempt
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center items-center relative">
      {loader && (
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
          <PacmanLoader color="#34D399" size={50} /> {/* Display loader */}
        </div>
      )}
      <div className={`${loader ? "blur-sm" : ""} w-full`}>
        <LoginForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          error={error}
          role={role}
          setRole={setRole}
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
