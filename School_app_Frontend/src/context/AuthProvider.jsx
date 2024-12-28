import React, { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import PyramidLoader from "../common/Loader/PyramidLoader";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const getRefreshEndpoint = (role) => {
  switch (role) {
    case "Student":
      return `${import.meta.env.VITE_BACKEND_URL}/api/refresh-token-student`;
    case "Admin":
      return `${import.meta.env.VITE_BACKEND_URL}/api/refresh-token-admin`;
    case "Teacher":
      return `${import.meta.env.VITE_BACKEND_URL}/api/refresh-token-teacher`;
    case "Staff":
      return `${import.meta.env.VITE_BACKEND_URL}/api/refresh-token-staff`;
    case "Parent":
      return `${import.meta.env.VITE_BACKEND_URL}/api/refresh-token-parent`;
    default:
      return `${import.meta.env.VITE_BACKEND_URL}/api/refresh-token`;
  }
};

export const AuthProvider = ({ children }) => {
  const [name, setName] = useState(() => {
    const storedName = localStorage.getItem("name");
    try {
      return storedName ? JSON.parse(storedName) : null;
    } catch (error) {
      return storedName;
    }
  });

  const [authToken, setAuthToken] = useState(() =>
    localStorage.getItem("authToken")
  );
  const [refreshToken, setRefreshToken] = useState(() =>
    localStorage.getItem("refreshToken")
  );
  const [userRole, setUserRole] = useState(() => {
    const token = localStorage.getItem("authToken");
    return token ? jwtDecode(token).role : null;
  });
  const [frontendUrl, setFrontendUrl] = useState(() =>
    localStorage.getItem("frontendUrl")
  );
  const [loading, setLoading] = useState(true);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [schoolId, setSchoolId] = useState();

  useEffect(() => {
    const handleTokenRefresh = async () => {
      if (authToken) {
        const decodedToken = jwtDecode(authToken);
        const currentTime = Date.now() / 1000;

        if (decodedToken.exp < currentTime + 60) {
          if (refreshToken) {
            await refreshAuthToken(refreshToken, decodedToken.role);
          } else {
            logout();
            window.location.href = `${import.meta.env.VITE_HOME_REDIRECT_URL}`;
          }
        }
      }
      setLoading(false);
    };

    handleTokenRefresh();
  }, [authToken, refreshToken]);

  const refreshAuthToken = async (token, role) => {
    console.log("Refreshing token...", token, role);
    try {
      const endpoint = getRefreshEndpoint(role);
      const response = await axios.post(
        endpoint,
        { refreshToken: token },
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("Refresh token response:", response.data);

      const newAuthToken = response.data.data.accessToken;
      const newRefreshToken = response.data.data.refreshToken;

      if (newAuthToken && typeof newAuthToken === "string") {
        const decodedToken = jwtDecode(newAuthToken);

        setAuthToken(newAuthToken);
        setRefreshToken(newRefreshToken);
        setUserRole(decodedToken.role);

        localStorage.setItem("authToken", newAuthToken);
        localStorage.setItem("refreshToken", newRefreshToken);
      } else {
        throw new Error("Invalid new auth token");
      }
    } catch (error) {
      console.error("Error refreshing token:", error);
      if (!isLoggingOut) {
        setIsLoggingOut(true);
        logout();
        window.location.href = `${import.meta.env.VITE_HOME_REDIRECT_URL}`;
      }
    }
  };

  const login = async (authToken, refreshToken, user, schoolCode) => {
    setLoading(true); // Show loader during login
    setAuthToken(authToken);
    setRefreshToken(refreshToken);
    setSchoolId(schoolCode);
    setFrontendUrl(user.frontendUrl);
    console.log("schoolCode:", schoolCode);
    let userName;
    if (user.role === "Student") {
      userName = user.firstName;
    } else if (user.role === "Admin") {
      userName = user.name;
    } else if (user.role === "Parent") {
      userName = user.fatherName;
    } else {
      userName = user.name;
    }

    console.log("User:", user);
    setName(userName);

    const decodedToken = jwtDecode(authToken);
    setUserRole(decodedToken.role);

    localStorage.setItem("authToken", authToken);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("name", userName);
    localStorage.setItem("schoolId", schoolId);
    localStorage.setItem("frontendUrl", frontendUrl);

    setLoading(false); // Hide loader after login
  };

  const logout = (showToast = true) => {
    setLoading(true); // Show loader during logout
    setAuthToken(null);
    setRefreshToken(null);
    setUserRole(null);
    localStorage.removeItem("authToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("name");
    localStorage.removeItem("schoolId");
    localStorage.removeItem("frontendUrl");

    if (showToast) {
      console.log("Logged out successfully!");
    }

    setIsLoggingOut(false);
    // window.location.href = `${import.meta.env.VITE_HOME_REDIRECT_URL}`;
    window.location.href = "https://mainpage.vedanshtiwari.tech";
    setLoading(false); // Hide loader after logout
  };

  return (
    <div>
      <AuthContext.Provider
        value={{
          authToken,
          refreshToken,
          userRole,
          name,
          login,
          logout,
          loading,
          schoolId,
        }}
      >
        {!loading ? children : <PyramidLoader desc={"Loading..."} />}
      </AuthContext.Provider>
    </div>
  );
};

export const useAuth = () => useContext(AuthContext);
