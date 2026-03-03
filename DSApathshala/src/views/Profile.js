import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Navbar from "components/Navbars/AdminNavbar.js";
import Footer from "components/Footers/Footer.js";
import picture from "../assets/img/team-4-470x470.png";

export default function Profile() {
  const history = useHistory();
  const [userData, setUserData] = useState({});
  const [formData, setFormData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  // Check if user is superuser
  const isSuperuser = localStorage.getItem("is_superuser") === "true";

  const handleBackToDashboard = () => {
    const dashboardPath = isSuperuser ? "/admin2/dashboard" : "/admin/dashboard";
    history.push(dashboardPath);
  };

  // ================= FETCH PROFILE =================
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem("access_token");

        const res = await axios.get(
          "http://127.0.0.1:8000/api/get_user_profile/",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setUserData(res.data);
        setFormData(res.data); // sync editable data
      } catch (err) {
        console.error(err);
      }
    };

    fetchUserDetails();
  }, []);

  // ================= SAVE PROFILE =================
  const handleSave = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const data = new FormData();

      Object.keys(formData).forEach((key) => {
        if (key !== "username") {
          data.append(key, formData[key] || "");
        }
      });

      if (profileImage) {
        data.append("profile_image", profileImage);
      }

      await axios.patch(
        "http://127.0.0.1:8000/api/update_user_profile/",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Refresh from server to ensure latest profile_image URL is used
      const refreshed = await axios.get(
        "http://127.0.0.1:8000/api/get_user_profile/",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setUserData(refreshed.data);
      setFormData(refreshed.data);
      setProfileImage(null);
      setIsEditing(false);
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  // ================= LOGOUT =================
  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      const refresh = localStorage.getItem("refresh_token");

      if (refresh) {
        await axios.post("http://127.0.0.1:8000/api/logout/", {
          refresh_token: refresh,
        });
      }

      // Clear all auth data
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("is_superuser");

      window.location.href = "/auth/login";
    } catch (err) {
      console.error("Logout failed", err);
      // Even if API fails, clear local tokens
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("is_superuser");
      window.location.href = "/auth/login";
    } finally {
      setIsLoggingOut(false);
    }
  };

  // ================= FIELD COMPONENT =================
  const FieldRow = ({ label, name, disabled = false }) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 items-start md:items-center mb-3">
      <p className="font-semibold text-gray-600 text-sm md:text-base">{label}</p>

      {!isEditing ? (
        <p className="col-span-1 md:col-span-2 text-gray-800 text-sm md:text-base break-words">
          {formData?.[name] || "-"}
        </p>
      ) : (
        <input
          name={name}
          disabled={disabled}
          value={formData?.[name] || ""}
          onChange={(e) =>
            setFormData({ ...formData, [name]: e.target.value })
          }
          className={`col-span-1 md:col-span-2 border rounded px-3 py-2 text-sm w-full ${
            disabled ? "bg-gray-100 cursor-not-allowed" : ""
          }`}
        />
      )}
    </div>
  );

  return (
    <>
      {/* Back Button - Outside header */}
     

      {/* HEADER */}
      <section className="relative block h-64 bg-black w-full ">
      

  <div className="absolute top-24 w-full px-6 flex items-center justify-center ">
  
  {/* Back Button */}
  <button
    onClick={handleBackToDashboard}
    className="absolute left-16 bg-lightBlue-500 hover:bg-lightBlue-600 text-white px-6 py-1 rounded-lg flex gap-4 transition-all duration-150 shadow-lg whitespace-nowrap "style={{marginLeft:"-310px"}}
  >
    <i className="fas fa-arrow-left text-lg"></i>
    <span className="font-bold">Back</span>
  </button>

  {/* Title */}
  <h1 className="text-blue text-4xl font-bold">My Profile</h1>
</div>

      </section>

      {/* PROFILE CARD */}
      <main className="bg-gray-100 py-10 min-h-screen">
        <div className="container mx-auto px-3 sm:px-4 flex justify-center"style={{width:"450px"}}>
          <div className="w-full lg:w-4/8 bg-white rounded-lg shadow-xl p-4 sm:p-8">
            {/* CARD HEADER */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={
                    profileImage
                      ? URL.createObjectURL(profileImage)
                      : userData?.profile_image || picture
                  }
                  className="w-16 h-24 rounded-full object-cover shadow-lg border-4 border-white"
                  alt="profile"
                />
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                    {userData.full_name || "Your Name"}
                  </h2>
                  <p className="text-gray-500 text-sm md:text-base">
                    {userData.email}
                  </p>
                  {isEditing && (
                    <label className="mt-2 inline-block text-xs md:text-sm text-blue-600 cursor-pointer">
                      Change Photo
                      <input
                        type="file"
                        hidden
                        onChange={(e) => setProfileImage(e.target.files[0])}
                      />
                    </label>
                  )}
                </div>
              </div>

              <button
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="px-4 py-2 rounded-full border border-red-500 text-red-500 text-xs md:text-sm font-semibold hover:bg-red-500 hover:text-white transition-colors duration-150"
              >
                {isLoggingOut ? "Logging out..." : "Log Out"}
              </button>
            </div>

            <hr className="mb-6" />

            {/* INFO GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
              <div>
                <FieldRow label="Full Name" name="full_name" />
                <FieldRow label="Class" name="user_class" />
                <FieldRow label="Roll No" name="roll_no" />
                <FieldRow label="Stream" name="stream" />
              </div>
              <div>
                <FieldRow label="College" name="college_name" />
                <FieldRow label="Contact" name="contact_number" />
                <FieldRow label="DOB" name="dob" />
                <FieldRow label="Username" name="username" disabled />
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row justify-end gap-3 mt-10">
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-lightBlue-500 inline-flex items-center justify-center text-white font-semibold px-5 py-2 rounded-full text-xs sm:text-sm shadow hover:shadow-lg active:bg-lightBlue-600 transition-all duration-150"
                >
                  Edit Profile
                </button>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setIsEditing(false);
                      setFormData(userData);
                      setProfileImage(null);
                    }}
                    className="bg-gray-200 inline-flex items-center justify-center text-gray-700 font-semibold px-5 py-2 rounded-full text-xs sm:text-sm shadow hover:shadow-md transition-all duration-150"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={handleSave}
                    className="bg-lightBlue-500 inline-flex items-center justify-center text-white font-semibold px-5 py-2 rounded-full text-xs sm:text-sm shadow hover:shadow-lg active:bg-lightBlue-600 transition-all duration-150"
                  >
                    Save Changes
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
