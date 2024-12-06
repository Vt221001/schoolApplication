import React, { useEffect, useState } from "react";
import { Disclosure, Menu } from "@headlessui/react";
import { IoCalendarOutline, IoLocationSharp } from "react-icons/io5";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { jwtDecode } from "jwt-decode";
import DarkModeToggle from "../../common/DarkModeToggle/DarkModeToggle";
import logo from "../../assets/titleLogo.png";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const TopNavbar = ({ isCollapsed }) => {
  const { logout, name, userRole, authToken, schoolId } = useAuth();
  const navigate = useNavigate();
  const [schoolName, setSchoolName] = useState("Your School Name Here");
  useEffect(() => {
    const fetchSchoolName = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/get-school/${
            import.meta.env.VITE_SchoolId
          }`
        );

        if (response?.data?.data?.name) {
          setSchoolName(response.data.data.name);
        } else {
          throw new Error("School name not found in response");
        }
      } catch (error) {
        console.error("Error fetching school name:", error);
        toast.error("Unable to fetch school name.");
      }
    };

    fetchSchoolName();
  }, []);

  const navigation = [{ name: schoolName, href: "#", current: false }];

  const handleProfileClick = () => {
    if (authToken) {
      const decoded = jwtDecode(authToken);
      const userId = decoded.id;

      switch (userRole) {
        case "Admin":
          navigate(`/school/admin/profile/${userId}`);
          break;
        case "Teacher":
          navigate(`/school/teacher-profile/${userId}`);
          break;
        case "Student":
          navigate(`/school/profile/${userId}`);
          break;
        case "Parent":
          navigate(`/school/parent-profile/${userId}`);
          break;
        default:
          navigate(`/school/profile/${userId}`);
      }
    }
  };

  return (
    <Disclosure
      as="nav"
      className={`fixed top-0 ${
        isCollapsed ? "left-20" : "left-64"
      } mx-6 my-2 mt-4 rounded-md right-0 h-14 bg-[#283046] transition-all duration-300 shadow-md z-1`}
    >
      {({ open }) => (
        <>
          <ToastContainer />
          <div className="flex h-full items-center justify-between px-4">
            <div className="flex h-16 items-center w-full justify-between">
              <div className="flex gap-2">
                <div className="flex items-center">
                  <img
                    className="h-8 w-auto sm:mr-4 md:mr-4"
                    src={logo}
                    alt="Your Company"
                  />
                </div>

                <div className="hidden sm:flex">
                  <div className="flex flex-wrap">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-auto font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Icon buttons */}
                <div className="hidden sm:flex">
                  <div className="flex px-3 py-2 hover:bg-gray-700 rounded-md font-bold cursor-pointer text-[#65FA9E] text-2xl items-center">
                    <Link to="/school/calendar">
                      <IoCalendarOutline />
                    </Link>
                  </div>
                  <div className="flex px-3 py-2 hover:bg-gray-700 rounded-md font-bold cursor-pointer text-[#65FA9E] text-2xl items-center">
                    <MdOutlineMarkEmailUnread />
                  </div>
                  <div className="flex px-3 py-2 hover:bg-gray-700 rounded-md font-bold cursor-pointer text-[#65FA9E] text-2xl items-center">
                    <Link to="/school/view-contact">
                      <BiSupport />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="flex sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>

            {/* User Section */}
            <div className="absolute w-full inset-y-0 right-0 flex justify-end items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* <div className="mr-4">
                <DarkModeToggle />
              </div> */}
              <div className="flex flex-col justify-end items-center">
                <div className="w-full text-sm text-gray-400">
                  {name ? name : "You login as Guest"}
                </div>
                <div className="text-right w-full text-xs font-semibold text-[#65FA9E]">
                  {userRole ? userRole : "Guest"}
                </div>
              </div>

              <Menu as="div" className="relative z-50 ml-3">
                <Menu.Button className="flex rounded-full bg-[#283046] text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User"
                  />
                </Menu.Button>
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={handleProfileClick}
                        className={classNames(
                          active ? "bg-gray-300" : "",
                          "block px-4 py-2 text-sm text-gray-700 w-full text-left"
                        )}
                      >
                        Your Profile
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => alert("Settings clicked")}
                        className={classNames(
                          active ? "bg-gray-300" : "",
                          "block px-4 py-2 text-sm text-gray-700 w-full text-left"
                        )}
                      >
                        Settings
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        onClick={logout}
                        href="#"
                        className={classNames(
                          active ? "bg-gray-300" : "",
                          "block px-4 py-2 text-sm text-gray-700 w-full text-left"
                        )}
                      >
                        Sign out
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            </div>
          </div>

          {/* Mobile Menu Items */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>

            {/* Mobile Icon buttons */}
            <div className="flex justify-evenly">
              <Link
                to="/school/calendar"
                className="flex px-3 py-2 hover:bg-gray-700 rounded-md font-bold cursor-pointer text-[#65FA9E] text-2xl items-center"
              >
                <IoCalendarOutline />
              </Link>
              <MdOutlineMarkEmailUnread className="px-3 py-2 hover:bg-gray-700 rounded-md font-bold cursor-pointer text-[#65FA9E] text-2xl items-center" />
              <BiSupport className="px-3 py-2 hover:bg-gray-700 rounded-md font-bold cursor-pointer text-[#65FA9E] text-2xl items-center" />
              <IoLocationSharp className="px-3 py-2 hover:bg-gray-700 rounded-md font-bold cursor-pointer text-[#65FA9E] text-2xl items-center" />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default TopNavbar;
