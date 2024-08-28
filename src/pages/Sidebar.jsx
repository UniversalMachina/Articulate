import React from 'react';
import { AiOutlineDashboard, AiOutlineUser, AiOutlineSetting, AiOutlineQuestionCircle } from 'react-icons/ai';
import { BsChatSquareDots, BsPersonCircle } from 'react-icons/bs';
import { FiUsers, FiPackage } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md h-screen p-4">
      <div className="mb-4">
        <h2 className="text-lg font-bold">Stammer.ai</h2>
        <p className="mt-2 text-sm bg-green-100 text-green-700 px-2 py-1 rounded-md">Agency Owner</p>
      </div>

      <nav className="space-y-2">
        <div className="text-sm font-medium text-gray-600">Switch to Sub-Account</div>

        <div className="mt-4">
          <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
            <AiOutlineDashboard className="w-5 h-5" />
            <span>Dashboard</span>
          </a>
        </div>

        <div className="mt-4">
          <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
            <BsChatSquareDots className="w-5 h-5" />
            <span>AI Agents (Chatbots)</span>
          </a>
          <div className="ml-8 mt-2">
            <a href="#" className="block text-gray-600 hover:text-blue-600">My AI Agents</a>
            <a href="#" className="block text-gray-600 hover:text-blue-600">Create a new AI Agent</a>
          </div>
        </div>

        <div className="mt-4">
          <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
            <AiOutlineUser className="w-5 h-5" />
            <span>Account</span>
          </a>
        </div>

        <div className="mt-4">
          <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
            <FiUsers className="w-5 h-5" />
            <span>Agency</span>
          </a>
        </div>

        <div className="mt-4">
          <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
            <BsPersonCircle className="w-5 h-5" />
            <span>Sub-Accounts</span>
          </a>
        </div>

        <div className="mt-4">
          <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
            <FiPackage className="w-5 h-5" />
            <span>White Label API</span>
          </a>
        </div>

        <div className="mt-4">
          <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
            <AiOutlineSetting className="w-5 h-5" />
            <span>Marketplace</span>
          </a>
        </div>

        <div className="mt-4">
          <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
            <AiOutlineQuestionCircle className="w-5 h-5" />
            <span>Need Help?</span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
