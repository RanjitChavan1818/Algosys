import React from "react";
import axios from "axios";
import { createPopper } from "@popperjs/core";
import picture from "../../assets/img/team-4-470x470.png"


const UserDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const [profileImageUrl, setProfileImageUrl] = React.useState(null);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();

  // Fetch latest user profile image
  React.useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) return;

    axios
      .get("http://127.0.0.1:8000/api/get_user_profile/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setProfileImageUrl(res.data?.profile_image || null);
      })
      .catch(() => {
        // keep default image if fetch fails
        setProfileImageUrl(null);
      });
  }, []);
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className="text-blueGray-500 block"
        href="/profile"
      >
        <div className="items-center flex">
          <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
            <img
              alt="..."
              className="w-full rounded-full align-middle border-none shadow-lg"
              src={profileImageUrl || picture}
            />
          </span>
        </div>
      </a>
    </>
  );
};

export default UserDropdown;
