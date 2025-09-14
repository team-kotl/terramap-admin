import { Search, CirclePlus, Pencil, Trash, CircleX } from "lucide-react";
import { useState } from "react";

const Users = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const users = [
    { staffId: "ST001", username: "janedoe", role: "Admin", remarks: "Benguet",},
    { staffId: "ST002", username: "justincabuena", role: "Staff", remarks: "Benguet",},
    { staffId: "ST003", username: "andrewigs", role: "Staff", remarks: "Ifugao",},
    { staffId: "ST004", username: "bryce", role: "Manager", remarks: "Kalinga",},
    { staffId: "ST005", username: "stephdrew", role: "Staff", remarks: "Mt. Province",},
    { staffId: "ST006", username: "morrows", role: "Staff", remarks: "Abra" },
    { staffId: "ST007", username: "petergrf", role: "Admin", remarks: "Kalinga",},
    { staffId: "ST008", username: "mgnfox", role: "Staff", remarks: "Apayao" },
    { staffId: "ST009", username: "lee", role: "Staff", remarks: "Ifugao" },
  ];

  return (
    <div className="relative p-6 bg-gray-100">
      <div className="flex justify-between items-center bg-white shadow p-2 rounded mb-6">
        <div className="relative flex-1 mr-10">
          <Search className="absolute left-2 top-2 h-5 w-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search Users"
            className="pl-10 pr-3 py-2 rounded-md text-sm w-full focus:outline-none focus:ring-0"
          />
        </div>

        <div className="w-px h-6 bg-gray-400 mr-6"></div>
        <span className="text-gray-600 font-medium mr-5">superadmin</span>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-green-800">Users</h1>
        <button
          onClick={() => {
            setIsModalOpen(true);
          }}
          className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white text-sm px-3 py-2 rounded-md"
        >
          <CirclePlus className="h-5 w-5" />
          Add User
        </button>
      </div>

      <div className="bg-white shadow rounded overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-green-800 text-white text-left">
              <th className="pl-12 py-3 text-left w-1/6">Staff ID</th>
              <th className="px-4 py-3 w-1/6">Username</th>
              <th className="px-2 py-3 w-1/6">Role</th>
              <th className="px-4 py-3 w-1/6">Remarks</th>
              <th className="px-6 py-3 w-1/9">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.staffId}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="pl-12 py-3">{user.staffId}</td>
                <td className="px-4 py-3">{user.username}</td>
                <td className="px-2 py-3">{user.role}</td>
                <td className="px-4 py-3">{user.remarks}</td>
                <td className="px-4 py-3">
                  <button className="text-gray-500 hover:text-blue-500">
                    <Pencil className="h-5 w-5" />
                  </button>
                  <button className="text-red-400 hover:text-red-500 ml-3">
                    <Trash className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md relative transform transition-all duration-300 ease-out">
            <div className="bg-green-800 rounded-t-xl px-6 py-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-white">Add New User</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-green-100 hover:text-white hover:bg-green-700 rounded-full p-1 transition-colors duration-200"
                >
                  <CircleX className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="px-6 py-6">
              <form className="space-y-5">
                <div className="space-y-1">
                  <label className="block text-sm font-semibold text-gray-700">
                    Username
                  </label>
                  <input
                    type="text"
                    placeholder="Enter username"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-700  placeholder-gray-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-semibold text-gray-700">
                    Role
                  </label>
                  <input
                    type="text"
                    placeholder="Enter role"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-700  placeholder-gray-40"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-semibold text-gray-700">
                    Remarks
                  </label>
                  <input
                    type="text"
                    placeholder="Enter remarks"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-700  placeholder-gray-40"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-semibold text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-700  placeholder-gray-40"
                  />
                </div>

                <div className="pt-2 flex justify-center">
                  <button
                    type="submit"
                    className="px-15 py-3 bg-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                  >
                    Confirm
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
