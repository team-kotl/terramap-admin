import { Search, CirclePlus, Pencil, Trash, CircleX } from "lucide-react";
import { useState } from "react";

const Users = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const users = [
    {
      staffId: "ST001",
      username: "janedoe",
      roles: ["D", "U", "A"],
      province: "Benguet",
      municipality: "La Trinidad",
      remarks: "",
    },
    {
      staffId: "ST002",
      username: "justincabuena",
      roles: ["U", "A"],
      province: "Benguet",
      municipality: "Itogon",
      remarks: "",
    },
    {
      staffId: "ST003",
      username: "andrewigs",
      roles: ["D"],
      province: "Ifugao",
      municipality: "Lagawe",
      remarks: "",
    },
    {
      staffId: "ST004",
      username: "bryce",
      roles: ["D", "Ap"],
      province: "Kalinga",
      municipality: "Tabuk",
      remarks: "",
    },
    {
      staffId: "ST005",
      username: "stephdrew",
      roles: ["C"],
      province: "Mt. Province",
      municipality: "Bontoc",
      remarks: "",
    },
    {
      staffId: "ST006",
      username: "morrows",
      roles: ["U"],
      province: "Abra",
      municipality: "Bangued",
      remarks: "",
    },
    {
      staffId: "ST007",
      username: "petergrf",
      roles: ["A", "C"],
      province: "Kalinga",
      municipality: "Tabuk",
      remarks: "",
    },
    {
      staffId: "ST008",
      username: "mgnfox",
      roles: ["D", "U"],
      province: "Apayao",
      municipality: "Conner",
      remarks: "",
    },
    {
      staffId: "ST009",
      username: "lee",
      roles: ["D"],
      province: "Ifugao",
      municipality: "Kiangan",
      remarks: "",
    },
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
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setIsAddModalOpen(true);
            }}
            className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white text-sm px-3 py-2 rounded-md"
          >
            <CirclePlus className="h-5 w-5" />
            Add User
          </button>

          <button className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white text-sm px-3 py-2 rounded-md">
            <ListFilter className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="bg-white shadow rounded overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-green-800 text-white text-left">
              <th className="pl-12 py-3 w-1/12"> Staff ID</th>
              <th className="px-4 py-3 w-1/12">Username</th>
              <th className="px-4 py-3 w-2/12">Roles</th>
              <th className="px-4 py-3 w-1/12">Province</th>
              <th className="px-4 py-3 w-1/12">Municipality</th>
              <th className="px-4 py-3 w-2/12">Remarks</th>
              <th className="px-4 py-3 w-1/12">Action</th>
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
                <td className="px-2 py-3">
                  <div className="flex flex-wrap gap-2">
                    {user.roles.map((role, index) => {
                      const roleMap = {
                        D: { label: "D", color: "bg-blue-100 text-blue-800" },
                        U: { label: "U", color: "bg-green-100 text-green-800" },
                        A: {
                          label: "A",
                          color: "bg-yellow-100 text-yellow-800",
                        },
                        Ap: {
                          label: "AP",
                          color: "bg-purple-100 text-purple-800",
                        },
                        C: { label: "C", color: "bg-pink-100 text-pink-800" },
                      };

                      return (
                        <span
                          key={index}
                          className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-semibold ${
                            roleMap[role]?.color || "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {roleMap[role]?.label || role}
                        </span>
                      );
                    })}
                  </div>
                </td>
                <td className="px-4 py-3">{user.province}</td>
                <td className="px-4 py-3">{user.municipality}</td>
                <td className="px-4 py-3">{user.remarks}</td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => {
                      setIsEditModalOpen(true);
                    }}
                    className="text-gray-500 hover:text-blue-500"
                  >
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

      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md relative transform transition-all duration-300 ease-out">
            <div className="bg-green-800 rounded-t-xl px-6 py-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-white">Add New User</h2>
                <button
                  onClick={() => setIsAddModalOpen(false)}
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

                <div className="pt-4 flex space-x-3">
                  <button
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="flex-1 px-6 py-3 bg-gray-200 text-black rounded-lg font-semibold transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-green-700 text-white rounded-lg font-semibold transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                  >
                    Update User
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md relative transform transition-all duration-300 ease-out">
            <div className="bg-green-800 rounded-t-xl px-6 py-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-white">Edit User</h2>
                <button
                  onClick={() => setIsEditModalOpen(false)}
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
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-700  placeholder-gray-40"
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
                    New Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter new password (optional)"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-700  placeholder-gray-40"
                  />
                </div>

                <div className="pt-4 flex space-x-3">
                  <button
                    type="button"
                    onClick={() => setIsEditModalOpen(false)}
                    className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-green-700 text-white rounded-lg font-semibold transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                  >
                    Update User
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
