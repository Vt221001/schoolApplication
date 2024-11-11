import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import PyramidLoader from "../common/Loader/PyramidLoader";
import axios from "axios";

const SetAuthDataPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, loading } = useAuth();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const encodedUserData = queryParams.get("userData");

    if (encodedUserData) {
      try {
        const userData = JSON.parse(decodeURIComponent(encodedUserData));
        const {
          authToken,
          refreshToken,
          name,
          schoolCode,
          role,
          email,
          frontendUrl,
        } = userData;

        const res = axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/verify-admin`,
          {
            accessToken: authToken,
          }
        );

        res
          .then((res) => {
            console.log(res.data.data);
            toast.success("User verified successfully.");
          })
          .catch((err) => {
            console.error(err);
            toast.error("Invalid token. Please login again.");

            return (window.location.href = `${
              import.meta.env.VITE_HOME_REDIRECT_URL
            }`);
          });

        const user = {
          name,
          role,
          email,
          frontendUrl,
        };

        login(authToken, refreshToken, user, schoolCode);

        // Clean URL and redirect
        window.history.replaceState(null, null, "/school/dashboard");
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    } else {
      window.location.href = `${import.meta.env.VITE_HOME_REDIRECT_URL}`;
    }
  }, [location, navigate]);

  useEffect(() => {
    if (!loading) {
      navigate("/school/dashboard");
    }
  }, [loading, navigate]);

  return loading ? (
    <PyramidLoader desc={"Hang tight, we're almost there!"} />
  ) : null;
};

export default SetAuthDataPage;
