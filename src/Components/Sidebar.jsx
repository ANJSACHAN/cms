import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  // State to track the active menu (expanded/collapsed)
  const [openMenus, setOpenMenus] = useState({
    media: false,
    analytics: false,
    post: false,
    user: false,
    setting: false,
  });

  // Function to toggle menus
  const toggleMenu = (menu) => {
    setOpenMenus(prevState => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <div className="w-32 bg-gray-800 h-screen overflow-y-auto p-4 hide-scrollbar absolute">
      <ul className="space-y-4">
        {/* Post Menu */}
        <li>
          <Link to="/create"
            className="w-full text-left text-white p-2 hover:bg-gray-700 focus:outline-none"
            onClick={() => toggleMenu('post')}
          >
            Create
          </Link>
          {openMenus.post && (
            <ul className="pl-4 space-y-1">
              <li>
                <button className="w-full text-left text-gray-400 hover:text-white p-2">
                  Type
                </button>
              </li>
              <li>
                <button className="w-full text-left text-gray-400 hover:text-white p-2">
                  Input
                </button>
              </li>
              <li>
                <button className="w-full text-left text-gray-400 hover:text-white p-2">
                  MetaData
                </button>
              </li>
              <li>
                <button className="w-full text-left text-gray-400 hover:text-white p-2">
                  Save Draft
                </button>
              </li>
              <li>
                <button className="w-full text-left text-gray-400 hover:text-white p-2">
                  Preview
                </button>
              </li>
              <li>
                <button className="w-full text-left text-gray-400 hover:text-white p-2">
                  Publish
                </button>
              </li>
            </ul>
          )}
        </li>

        {/* Media Menu */}
        <li>
          <Link to="/media"
            className="w-full text-left text-white p-2 hover:bg-gray-700 focus:outline-none"
            onClick={() => toggleMenu('media')}
          >
            Media
          </Link>
          {openMenus.media && (
            <ul className="pl-4 space-y-1">
              <li>
                <button className="w-full text-left text-gray-400 hover:text-white p-2">
                  Images
                </button>
              </li>
              <li>
                <button className="w-full text-left text-gray-400 hover:text-white p-2">
                  Video
                </button>
              </li>
              <li>
                <button className="w-full text-left text-gray-400 hover:text-white p-2">
                  Audio
                </button>
              </li>
              <li>
                <button className="w-full text-left text-gray-400 hover:text-white p-2">
                  Documents
                </button>
              </li>
              <li>
                <button className="w-full text-left text-gray-400 hover:text-white p-2">
                  All
                </button>
              </li>
            </ul>
          )}
        </li>

        {/* Analytics Menu */}
        <li>
          <Link to="/analytics"
            className="w-full text-left text-white p-2 hover:bg-gray-700 focus:outline-none"
            onClick={() => toggleMenu('analytics')}
          >
            Analytics
          </Link>
          {openMenus.analytics && (
            <ul className="pl-4 space-y-1">
              <li>
                <button className="w-full text-left text-gray-400 hover:text-white p-2">
                  Post
                </button>
              </li>
              <li>
                <button className="w-full text-left text-gray-400 hover:text-white p-2">
                  Section
                </button>
              </li>
              <li>
                <button className="w-full text-left text-gray-400 hover:text-white p-2">
                  Author
                </button>
              </li>
            </ul>
          )}
        </li>

        {/* Comments Menu */}
        <li>
          <Link to="/comments" className="block text-white p-2 hover:bg-gray-700">
            Comment
          </Link>
        </li>

        {/* Plugins Menu */}
        <li>
          <Link to="/plugins" className="block text-white p-2 hover:bg-gray-700">
            Plugins
          </Link>
        </li>

        {/* Settings Menu */}
        <li>
          <Link to="/setting"
            className="w-full text-left text-white p-2 hover:bg-gray-700 focus:outline-none"
            onClick={() => toggleMenu('setting')} >
            Setting
          </Link>
          {openMenus.setting && (
            <ul className="pl-4 space-y-1">
              <li>
                <button className="w-full text-left text-gray-400 hover:text-white p-2">
                  Appearance
                </button>
              </li>
              <li>
                <button className="w-full text-left text-gray-400 hover:text-white p-2">
                  Customization
                </button>
              </li>
            </ul>
          )}
        </li>

        {/* User Menu */}
        <li>
          <Link to="/user"
            className="w-full text-left text-white p-2 hover:bg-gray-700 focus:outline-none"
            onClick={() => toggleMenu('user')}
          >
            User
          </Link>
          {openMenus.user && (
            <ul className="pl-4 space-y-1">
              <li>
                <button className="w-full text-left text-gray-400 hover:text-white p-2">
                  Add User
                </button>
              </li>
              <li>
                <button className="w-full text-left text-gray-400 hover:text-white p-2">
                  Profile
                </button>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
