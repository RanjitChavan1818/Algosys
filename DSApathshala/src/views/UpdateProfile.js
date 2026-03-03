import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function UpdateProfile() {
  const history = useHistory();
  const [formData, setFormData] = useState({});
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("access_token");
      const res = await axios.get("http://127.0.0.1:8000/api/get_user_profile/", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setFormData(res.data);
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
  const token = localStorage.getItem("access_token");
  const formDataObj = new FormData();

  formDataObj.append("full_name", formData.full_name);
  formDataObj.append("contact_number", formData.contact_number);
  formDataObj.append("college_name", formData.college_name);
  formDataObj.append("dob", formData.dob);

  if (profileImage) {
    formDataObj.append("profile_image", profileImage);
  }

  await axios.patch(
    "http://127.0.0.1:8000/api/update_user_profile/",
    formDataObj,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );

  history.push("/profile");
};


  return (
    <div className="relative block h-64 bg-blue-600 w-64"style={{color:"black"}}>
      <input name="full_name" value={formData.full_name || ""} onChange={handleChange} />
      <input name="contact_number" value={formData.contact_number || ""} onChange={handleChange} />

      {/* Username locked */}
      <input value={formData.username || ""} disabled />

      <input type="file" onChange={(e) => setProfileImage(e.target.files[0])} />

      <button onClick={handleSubmit}>Save Changes</button>
    </div>
  );
}
