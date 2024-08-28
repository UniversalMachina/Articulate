import React from 'react';
import { AiOutlineInfoCircle, AiOutlineRocket, AiOutlineBook, AiOutlineProject } from 'react-icons/ai';
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    <div className='flex flex-row'>
      <Sidebar />

      <div className="p-6 bg-gray-200 min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center mb-2">
              <AiOutlineRocket className="h-5 w-5 text-blue-600 mr-2" />
              <h2 className="text-lg font-semibold">Quick Start Guide</h2>
            </div>
            <div>
              <p className="text-sm mb-2">Learn to Customize Code Items to get started quickly and easily.</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Quick Start Guide
              </button>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center mb-2">
              <AiOutlineBook className="h-5 w-5 text-blue-600 mr-2" />
              <h2 className="text-lg font-semibold">Documentation</h2>
            </div>
            <div>
              <p className="text-sm mb-2">Explore our comprehensive documentation to make the most use of OpenAI.</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Documentation
              </button>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center mb-2">
              <AiOutlineProject className="h-5 w-5 text-blue-600 mr-2" />
              <h2 className="text-lg font-semibold">Product Roadmap</h2>
            </div>
            <div>
              <p className="text-sm mb-2">Curious about our future plans? Check our product roadmap for exciting updates!</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Product Roadmap
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">Wallet Usage</h2>
              <AiOutlineInfoCircle className="h-5 w-5 text-gray-500" />
            </div>
            <div>
              <p className="font-bold text-2xl mb-2">$4.9400</p>
              <table className="w-full text-sm">
                <tbody>
                  <tr><td>Last 24 Hours:</td><td>$0.00</td></tr>
                  <tr><td>Last 7 Days:</td><td>$0.06</td></tr>
                  <tr><td>Last 30 Days:</td><td>$2.06</td></tr>
                </tbody>
              </table>
              <button className="w-full mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Add to Wallet Balance
              </button>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">Storage (Characters)</h2>
              <AiOutlineInfoCircle className="h-5 w-5 text-gray-500" />
            </div>
            <div>
              <p className="font-bold mb-2">Available Characters: 8.86k</p>
              <table className="w-full text-sm">
                <tbody>
                  <tr><td>Used Characters:</td><td>1.14k</td></tr>
                  <tr><td>Allocated to Sub-Accounts:</td><td>0</td></tr>
                  <tr><td>Used by AI Agents:</td><td>1.14k</td></tr>
                  <tr><td>Total Characters:</td><td>10.00k</td></tr>
                  <tr><td>Characters from package:</td><td>10.00k</td></tr>
                  <tr><td>Additional Characters:</td><td>0</td></tr>
                  <tr><td>Bonus Characters:</td><td>10.00k</td></tr>
                </tbody>
              </table>
              <button className="w-full mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Get More Storage
              </button>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">AI Agents</h2>
              <AiOutlineInfoCircle className="h-5 w-5 text-gray-500" />
            </div>
            <div>
              <table className="w-full text-sm">
                <tbody>
                  <tr><td>Available AI Agents:</td><td>4</td></tr>
                  <tr><td>Used AI Agents:</td><td>0</td></tr>
                  <tr><td>Allocated to Sub-Accounts:</td><td>0</td></tr>
                  <tr><td>Active AI Agents:</td><td>0</td></tr>
                  <tr><td>Total AI Agents:</td><td>5 (4 + 1)</td></tr>
                  <tr><td>AI Agents from package:</td><td>4</td></tr>
                </tbody>
              </table>
              <button className="w-full mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Add More AI Agents
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="mb-2">
            <h2 className="text-lg font-semibold">Sub-Accounts</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Sub-Account Name</th>
                  <th className="text-left p-2">Admin Email</th>
                  <th className="text-left p-2">Creation Date</th>
                  <th className="text-left p-2">Allocated AI Agents</th>
                  <th className="text-left p-2">Used AI Agents</th>
                  <th className="text-left p-2">Allocated Wallet Balance</th>
                  <th className="text-left p-2">Used Wallet Balance</th>
                  <th className="text-left p-2">Total Characters</th>
                  <th className="text-left p-2">Used Characters</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="9" className="text-center py-4">No Sub-Accounts Found</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
