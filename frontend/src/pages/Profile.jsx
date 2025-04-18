// import MyOrdersPage from "./MyOrdersPage";

// const Profile = () => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <div className="flex-grow container mx-auto p-4 md:p-6">
//         <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
//           {/* Left section */}
//           <div className="w-full md:w-1/3 lg:w-1/4 shadow-md rounded-lg p-6">
//             <h1 className="text-2xl md:text-3xl font-bold mb-4">John Doe</h1>
//             <p className="text-lg text-gray-600 mb-4">John@example.com</p>
//             <button className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
//               Logout
//             </button>
//           </div>

//           {/* Right section: Orders Table */}
//           <div className="w-full md:w-2/3 lg:w-3/4">
//             <MyOrdersPage />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyOrdersPage from "./MyOrdersPage";

const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  // Load user data from localStorage
  useEffect(() => {
    const user = localStorage.getItem("userInfo");
    if (user) {
      setUserInfo(JSON.parse(user));
    } else {
      navigate("/login"); // Redirect if not logged in
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

  if (!userInfo) return null; // Or show a loader

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow container mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
          {/* Left section */}
          <div className="w-full md:w-1/3 lg:w-1/4 shadow-md rounded-lg p-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              {userInfo.name || "User"}
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              {userInfo.email || "No email"}
            </p>
            <button
              onClick={handleLogout}
              className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>

          {/* Right section: Orders Table */}
          <div className="w-full md:w-2/3 lg:w-3/4">
            <MyOrdersPage userId={userInfo._id} token={userInfo.token} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
