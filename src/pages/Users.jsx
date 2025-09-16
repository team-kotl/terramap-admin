import { Search, CirclePlus, Pencil, Trash, CircleX, Menu } from "lucide-react";
import { useState } from "react";

const Users = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const users = [
        { staffId: "ST001", username: "janedoe", role: "Admin", remarks: "Benguet" },
        { staffId: "ST002", username: "justincabuena", role: "Staff", remarks: "Benguet" },
        { staffId: "ST003", username: "andrewigs", role: "Staff", remarks: "Ifugao" },
        { staffId: "ST004", username: "bryce", role: "Manager", remarks: "Kalinga" },
        { staffId: "ST005", username: "stephdrew", role: "Staff", remarks: "Mt. Province" },
        { staffId: "ST006", username: "morrows", role: "Staff", remarks: "Abra" },
        { staffId: "ST007", username: "petergrf", role: "Admin", remarks: "Kalinga" },
        { staffId: "ST008", username: "mgnfox", role: "Staff", remarks: "Apayao" },
        { staffId: "ST009", username: "lee", role: "Staff", remarks: "Ifugao" },
    ];

    return (
        <div className="relative bg-gray-100 min-screen">
            <div className="md:p-5 mt-15 md:mt-0">
                <div className="flex flex-row md:justify-between md:items-center bg-white shadow p-2 rounded mb-6 gap-3 mt-5 ">
                    <div className="relative flex-1">
                        <Search className="absolute left-2 md:top-2 top-1 h-5 w-5 text-gray-500" />
                        <input
                        type="text"
                        placeholder="Search Users"
                        className="pl-10 md:pr-3 md:py-2 pr-2 py-1 rounded-md text-sm w-full focus:outline-none focus:ring-0"
                        />
                    </div>
                    <div className="hidden md:block w-px h-6 bg-gray-400"></div>
                    <span className="hidden md:flex text-gray-600 font-medium text-sm md:text-base">
                        superadmin
                    </span>
                </div>

                {/* Header + Add button */}
                <div className="flex flex-wrap justify-between items-center mb-6 gap-3">
                    <h1 className="text-2xl md:text-3xl font-bold text-green-800">Users</h1>
                    <button
                        onClick={() => setIsAddModalOpen(true)}
                        className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white text-sm px-3 py-2 md:px-4 md:py-2 rounded-md cursor-pointer">
                        <CirclePlus className="h-5 w-5" />
                        Add User
                    </button>
                </div>

                {/* Table */}
                <div className="bg-white shadow rounded overflow-x-auto">
                    <table className="table-auto w-full border-collapse min-w-[600px]">
                        <thead>
                            <tr className="bg-green-800 text-white text-left text-sm md:text-base">
                                <th className="pl-4 md:pl-12 py-2 md:py-3">Staff ID</th>
                                <th className="px-2 md:px-4 py-2 md:py-3">Username</th>
                                <th className="px-2 py-2 md:py-3">Role</th>
                                <th className="px-2 md:px-4 py-2 md:py-3">Remarks</th>
                                <th className="px-2 md:px-6 py-2 md:py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {users.map((user) => (
                            <tr
                                key={user.staffId}
                                className="border-b border-gray-200 hover:bg-gray-100 text-sm md:text-base">
                                <td className="pl-4 md:pl-12 py-2 md:py-3">{user.staffId}</td>
                                <td className="px-2 md:px-4 py-2 md:py-3">{user.username}</td>
                                <td className="px-2 py-2 md:py-3">{user.role}</td>
                                <td className="px-2 md:px-4 py-2 md:py-3">{user.remarks}</td>
                                <td className="px-2 md:px-4 py-2 md:py-3 flex gap-2">
                                    <button
                                    onClick={() => setIsEditModalOpen(true)}
                                    className="text-gray-500 hover:text-blue-500">
                                    <Pencil className="h-4 w-4 md:h-5 md:w-5 cursor-pointer" />
                                    </button>
                                    <button className="text-red-400 hover:text-red-500 cursor-pointer">
                                    <Trash className="h-4 w-4 md:h-5 md:w-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

        {/* ADD USER MODAL */}
            {isAddModalOpen && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl shadow-lg w-11/12 md:w-1/2 max-w-lg p-6 relative">
                        <button
                        onClick={() => setIsAddModalOpen(false)}
                        className="absolute top-3 right-3 text-gray-500 hover:text-red-500 cursor-pointer">
                        <CircleX className="h-6 w-6" />
                        </button>

                        <h2 className="text-xl font-bold text-green-800 mb-4">Add User</h2>
                        <form className="space-y-4">
                        <input type="text" placeholder="Staff ID" className="w-full border rounded-md p-2" />
                        <input type="text" placeholder="Username" className="w-full border rounded-md p-2" />
                        <select className="w-full border rounded-md p-2">
                            <option>Admin</option>
                            <option>Manager</option>
                            <option>Staff</option>
                        </select>
                        <input type="text" placeholder="Remarks" className="w-full border rounded-md p-2" />
                        <button
                            type="submit"
                            className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md w-full">
                            Save
                        </button>
                        </form>
                    </div>
                </div>
            )}

        {/* EDIT USER MODAL */}
            {isEditModalOpen && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl shadow-lg w-11/12 md:w-1/2 max-w-lg p-6 relative">
                        <button
                        onClick={() => setIsEditModalOpen(false)}
                        className="absolute top-3 right-3 text-gray-500 hover:text-red-500">
                        <CircleX className="h-6 w-6" />
                        </button>

                        <h2 className="text-xl font-bold text-green-800 mb-4">Edit User</h2>
                        <form className="space-y-4">
                            <input type="text" placeholder="Staff ID" className="w-full border rounded-md p-2" />
                            <input type="text" placeholder="Username" className="w-full border rounded-md p-2" />
                            <select className="w-full border rounded-md p-2">
                                <option>Admin</option>
                                <option>Manager</option>
                                <option>Staff</option>
                            </select>
                            <input type="text" placeholder="Remarks" className="w-full border rounded-md p-2" />

                            <button
                                type="submit"
                                className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md w-full">
                                Update
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Users;
