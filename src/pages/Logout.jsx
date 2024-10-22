import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  const logoutUrl = "http://localhost:8000/api/v1/users/logout";

  const handleLogout = async () => {
    try {
      const response = await fetch(logoutUrl, {
        method: 'POST',  
        credentials: 'include',  // To include cookies like accessToken and refreshToken
      });

      if (response.ok) {
        console.log('Logout successful');
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        navigate("/signin");
      } else {
        console.error('Logout failed:', response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div>
      <button
        onClick={handleLogout}
        className="text-red-900 px-4 py-1.5 mx-5 border-2 border-red-900 rounded-lg bg-transparent hover:bg-red-900 hover:text-white transition-all ease-in-out"
      >
        Log Out
      </button>
    </div>
  );
};

export default Logout;
