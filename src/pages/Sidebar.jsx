import React from 'react';
import { AiOutlineDashboard, AiOutlineUser, AiOutlineSetting, AiOutlineQuestionCircle } from 'react-icons/ai';
import { BsChatSquareDots, BsPersonCircle } from 'react-icons/bs';
import { FiUsers, FiPackage } from 'react-icons/fi';

const SidebarLink = ({ icon: Icon, text, subLinks = [] }) => (
  <div className="mt-4">
    <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">
      <Icon className="w-5 h-5" />
      <span>{text}</span>
    </a>
    {subLinks.length > 0 && (
      <div className="ml-8 mt-2 space-y-2">
        {subLinks.map((subLink, index) => (
          <a key={index} href="#" className="block text-gray-600 hover:text-blue-600 transition-colors duration-200">
            {subLink}
          </a>
        ))}
      </div>
    )}
  </div>
);

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 w-64 h-screen bg-white shadow-md p-4 overflow-y-auto">
      <div className="mb-4">
        <h2 className="text-lg font-bold">Stammer.ai</h2>
        <p className="mt-2 text-sm bg-green-100 text-green-700 px-2 py-1 rounded-md inline-block">Agency Owner</p>
      </div>

      <nav className="space-y-2">
        <div className="text-sm font-medium text-gray-600">Switch to Sub-Account</div>

        <SidebarLink icon={AiOutlineDashboard} text="Dashboard" />
        <SidebarLink 
          icon={BsChatSquareDots} 
          text="AI Agents (Chatbots)" 
          subLinks={["My AI Agents", "Create a new AI Agent"]}
        />
        <SidebarLink icon={AiOutlineUser} text="Account" />
        <SidebarLink icon={FiUsers} text="Agency" />
        <SidebarLink icon={BsPersonCircle} text="Sub-Accounts" />
        <SidebarLink icon={FiPackage} text="White Label API" />
        <SidebarLink icon={AiOutlineSetting} text="Marketplace" />
        <SidebarLink icon={AiOutlineQuestionCircle} text="Need Help?" />
      </nav>
    </div>
  );
};

export default Sidebar;