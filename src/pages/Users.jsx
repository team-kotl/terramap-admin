import {
    Search,
    CirclePlus,
    Pencil,
    Archive,
    CircleX,
    ListFilter,
} from "lucide-react";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
// import axios from "axios";

const Users = () => {
    // const [users, setUsers] = useState([]);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isArchiveOpen, setIsArchiveOpen] = useState(false);

    //    useEffect(() => {
    //     axios.get("URL NG DATABASE")
    //       .then((response) => {
    //         setUsers(response.data);
    //       })
    //       .catch((error) => {
    //         console.error("Error fetching users:", error);
    //       });
    //   }, []);

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
        <div className="relative bg-gray-100 min-screen">
            <div className="p-1 md:p-5 md:mt-0">
                <div className="flex flex-row md:justify-between md:items-center bg-white shadow p-2 rounded mb-6 gap-3 mt-5 ">
                    <div className="relative flex-1">
                        <Search className="absolute left-2 md:top-2 top-1 h-5 w-5 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search Users"
                            className="pl-10 md:pr-2 md:py-2 pr-2 py-1 rounded-md text-base w-full focus:outline-none focus:ring-0"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center mb-6 gap-3 mr-1 ml-1 -mt-3 md:mr-5 md:ml-5 md:-mt-5">
                <h1 className="text-2xl md:text-3xl font-bold text-green-800">
                    Users
                </h1>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => {
                            setIsAddModalOpen(true);
                        }}
                        className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white text-sm px-3 py-2 md:px-4 md:py-2 rounded-md cursor-pointer"
                    >
                        <CirclePlus className="h-5 w-5" />
                        Add User
                    </button>
                    <button className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white text-sm px-3 py-2 md:px-4 md:py-2 rounded-md cursor-pointer">
                        <ListFilter className="h-5 w-5" />
                    </button>
                </div>
            </div>

            <div className="bg-white shadow rounded overflow-x-auto mr-1 ml-1 md:mr-5 md:ml-5">
                <table className="table-auto w-full border-collapse min-w-[600px]">
                    <thead>
                        <tr className="bg-green-800 text-white text-left text-sm md:text-base">
                            <th className="pl-4 md:pl-12 py-2 md:py-3">
                                Staff ID
                            </th>
                            <th className="px-2 md:px-4 py-2 md:py-3">
                                Username
                            </th>
                            <th className="px-2 py-2 md:py-3">Roles</th>
                            <th className="px-2 md:px-4 py-2 md:py-3">
                                Province
                            </th>
                            <th className="px-2 md:px-4 py-2 md:py-3">
                                Municipality
                            </th>
                            <th className="px-2 md:px-4 py-2 md:py-3">
                                Remarks
                            </th>
                            <th className="px-2 md:px-4 py-2 md:py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr
                                key={user.staffId}
                                className={`border-b border-gray-200 text-sm md:text-base ${
                                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                                } hover:bg-gray-100`}
                            >
                                <td className="pl-4 md:pl-12 py-2 md:py-3">
                                    {user.staffId}
                                </td>
                                <td className="px-2 md:px-4 py-2 md:py-3">
                                    {user.username}
                                </td>
                                <td className="px-2 py-2 md:py-3">
                                    <div className="flex flex-wrap gap-2">
                                        {user.roles.map((role, index) => {
                                            const roleMap = {
                                                D: {
                                                    label: "D",
                                                    color: "bg-blue-100 text-blue-800",
                                                },
                                                U: {
                                                    label: "U",
                                                    color: "bg-green-100 text-green-800",
                                                },
                                                A: {
                                                    label: "A",
                                                    color: "bg-yellow-100 text-yellow-800",
                                                },
                                                Ap: {
                                                    label: "AP",
                                                    color: "bg-purple-100 text-purple-800",
                                                },
                                                C: {
                                                    label: "C",
                                                    color: "bg-pink-100 text-pink-800",
                                                },
                                            };

                                            return (
                                                <span
                                                    key={index}
                                                    className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-semibold ${
                                                        roleMap[role]?.color ||
                                                        "bg-gray-100 text-gray-800"
                                                    }`}
                                                >
                                                    {roleMap[role]?.label ||
                                                        role}
                                                </span>
                                            );
                                        })}
                                    </div>
                                </td>
                                <td className="px-2 md:px-4 py-2 md:py-3">
                                    {user.province}
                                </td>
                                <td className="px-2 md:px-4 py-2 md:py-3">
                                    {user.municipality}
                                </td>
                                <td className="px-2 md:px-4 py-2 md:py-3">
                                    {user.remarks}
                                </td>
                                <td className="px-2 md:px-4 py-2 md:py-3">
                                    <button
                                        onClick={() => setIsEditModalOpen(true)}
                                        className="text-gray-500 hover:text-blue-500"
                                    >
                                        <Pencil className="h-5 w-5 cursor-pointer" />
                                    </button>
                                    <button
                                        onClick={() => setIsArchiveOpen(true)}
                                        className="text-red-400 hover:text-red-500 ml-3"
                                    >
                                        <Archive className="h-5 w-5 cursor-pointer" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isAddModalOpen && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl relative transform transition-all duration-300 ease-out overflow-hidden">
                        <div className="bg-green-800 px-6 py-4">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-bold text-white">
                                    Add New User
                                </h2>
                                <button
                                    onClick={() => setIsAddModalOpen(false)}
                                    className="text-green-100 hover:text-white hover:bg-green-700 rounded-full p-1 transition-colors duration-200"
                                >
                                    <CircleX className="h-6 w-6" />
                                </button>
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="grid grid-cols-2 gap-6">
                                {/* Username */}
                                <div className="col-span-2 relative">
                                    <input
                                        type="text"
                                        placeholder="Enter username"
                                        className="w-full px-4 py-3 text-gray-700 border-2 border-gray-300 rounded-lg 
                                        focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200 
                                        transition-all duration-200"
                                        id="username"
                                    />
                                    <label
                                        className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium 
                                        text-gray-600 transition-all duration-200 
                                        peer-focus:text-green-600"
                                    >
                                        Username
                                    </label>
                                </div>

                                {/* Role */}
                                <div className="space-y-3">
                                    <label className="block text-sm font-medium text-gray-700 mb-3">
                                        Role
                                    </label>
                                    <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                                        {[
                                            "Dashboard",
                                            "Users",
                                            "Site Activity",
                                            "Dashboard Activity",
                                            "Downloads",
                                            "CS Survey",
                                        ].map((role, index) => (
                                            <label
                                                key={index}
                                                className="flex items-center gap-3 text-sm font-medium text-gray-600 
                                               cursor-pointer hover:text-gray-800 transition-colors duration-150"
                                            >
                                                <input
                                                    type="checkbox"
                                                    className="w-4 h-4 text-teal-600 border-2 border-gray-300 rounded 
                                                   focus:ring-teal-500 focus:ring-2"
                                                />
                                                {role}
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Remarks */}
                                <div className="relative">
                                    <textarea
                                        type="text"
                                        placeholder="Enter remarks"
                                        rows={3}
                                        className="w-full px-4 py-3 text-gray-700 border-2 border-gray-300 rounded-lg focus:outline-none 
                                        focus:border-green-600 focus:ring-2 focus:ring-green-200  placeholder-transparent peer resize-none transition-all duration-200"
                                        id="remarks"
                                    />
                                    <label
                                        htmlFor="remarks"
                                        className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-600"
                                    >
                                        Remarks
                                    </label>
                                </div>

                                {/* Province */}
                                <div className="relative mt-3">
                                    <select
                                        className="w-full px-4 py-3 text-gray-700 border-2 border-gray-300 rounded-lg 
                                       focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200 
                                       peer transition-all duration-200 bg-white"
                                        id="province"
                                    >
                                        <option value="">
                                            Select province
                                        </option>
                                        <option>Abra</option>
                                        <option>Apayao</option>
                                        <option>Benguet</option>\
                                        <option>Ifugao</option>
                                        <option>Kalinga</option>
                                        <option>Mt. Province</option>
                                    </select>
                                    <label
                                        htmlFor="province"
                                        className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-600"
                                    >
                                        Province
                                    </label>
                                </div>

                                {/* Municipality */}
                                <div className="relative mt-3">
                                    <select
                                        className="w-full px-4 py-3 text-gray-700 border-2 border-gray-300 rounded-lg 
                                       focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200 
                                       peer transition-all duration-200 bg-white"
                                        id="municipality"
                                    >
                                        <option value="">
                                            Select municipality
                                        </option>
                                    </select>
                                    <label
                                        htmlFor="municipality"
                                        className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-600"
                                    >
                                        Municipality
                                    </label>
                                </div>

                                {/* Password */}
                                <div className="relative">
                                    <input
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        placeholder="Enter password"
                                        className="w-full px-4 py-3 text-gray-700 border-2 border-gray-300 rounded-lg 
                                       focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200 
                                       placeholder-transparent peer transition-all duration-200"
                                        id="password"
                                    />
                                    <label
                                        htmlFor="password"
                                        className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-600"
                                    >
                                        Password
                                    </label>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-5 w-5" />
                                        ) : (
                                            <Eye className="h-5 w-5" />
                                        )}
                                    </button>
                                </div>

                                {/* Confirm Password */}
                                <div className="relative">
                                    <input
                                        type={
                                            showConfirmPassword
                                                ? "text"
                                                : "password"
                                        }
                                        placeholder="Confirm password"
                                        className="w-full px-4 py-3 text-gray-700 border-2 border-gray-300 rounded-lg 
                                       focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200  
                                       placeholder-transparent peer transition-all duration-200"
                                        id="confirmPassword"
                                    />
                                    <label
                                        htmlFor="confirmPassword"
                                        className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-600"
                                    >
                                        Confirm Password
                                    </label>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowConfirmPassword(
                                                !showConfirmPassword
                                            )
                                        }
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                                    >
                                        {showConfirmPassword ? (
                                            <EyeOff className="h-5 w-5" />
                                        ) : (
                                            <Eye className="h-5 w-5" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-gray-200">
                                <button
                                    type="button"
                                    onClick={() => setIsAddModalOpen(false)}
                                    className="px-6 py-2.5 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 font-medium 
                                   transition-all duration-200 transform hover:scale-[1.02]"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-6 py-2.5 bg-green-700 text-white rounded-lg hover:bg-green-800 font-medium 
                                   transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                                >
                                    Add User
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {isEditModalOpen && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl relative transform transition-all duration-300 ease-out overflow-hidden">
                        <div className="bg-green-800 px-6 py-4">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-bold text-white">
                                    Edit User
                                </h2>
                                <button
                                    onClick={() => setIsEditModalOpen(false)}
                                    className="text-green-100 hover:text-white hover:bg-green-700 rounded-full p-1 transition-colors duration-200"
                                >
                                    <CircleX className="h-6 w-6" />
                                </button>
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="grid grid-cols-2 gap-6">
                                {/* Username */}
                                <div className="col-span-2 relative">
                                    <input
                                        type="text"
                                        placeholder="Enter username"
                                        className="w-full px-4 py-3 text-gray-700 border-2 border-gray-300 rounded-lg 
                                        focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200 
                                        transition-all duration-200"
                                        id="username"
                                    />
                                    <label
                                        className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium 
                                        text-gray-600 transition-all duration-200 
                                        peer-focus:text-green-600"
                                    >
                                        Username
                                    </label>
                                </div>

                                {/* Role */}
                                <div className="space-y-3">
                                    <label className="block text-sm font-medium text-gray-700 mb-3">
                                        Role
                                    </label>
                                    <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                                        {[
                                            "Dashboard",
                                            "Users",
                                            "Site Activity",
                                            "Dashboard Activity",
                                            "Downloads",
                                            "CS Survey",
                                        ].map((role, index) => (
                                            <label
                                                key={index}
                                                className="flex items-center gap-3 text-sm font-medium text-gray-600 
                                               cursor-pointer hover:text-gray-800 transition-colors duration-150"
                                            >
                                                <input
                                                    type="checkbox"
                                                    className="w-4 h-4 text-teal-600 border-2 border-gray-300 rounded 
                                                   focus:ring-teal-500 focus:ring-2"
                                                />
                                                {role}
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Remarks */}
                                <div className="relative">
                                    <textarea
                                        type="text"
                                        placeholder="Enter remarks"
                                        rows={3}
                                        className="w-full px-4 py-3 text-gray-700 border-2 border-gray-300 rounded-lg focus:outline-none 
                                        focus:border-green-600 focus:ring-2 focus:ring-green-200  placeholder-transparent peer resize-none transition-all duration-200"
                                        id="remarks"
                                    />
                                    <label
                                        htmlFor="remarks"
                                        className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-600"
                                    >
                                        Remarks
                                    </label>
                                </div>

                                {/* Province */}
                                <div className="relative mt-3">
                                    <select
                                        className="w-full px-4 py-3 text-gray-700 border-2 border-gray-300 rounded-lg 
                                       focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200 
                                       peer transition-all duration-200 bg-white"
                                        id="province"
                                    >
                                        <option value="">
                                            Select province
                                        </option>
                                        <option>Abra</option>
                                        <option>Apayao</option>
                                        <option>Benguet</option>\
                                        <option>Ifugao</option>
                                        <option>Kalinga</option>
                                        <option>Mt. Province</option>
                                    </select>
                                    <label
                                        htmlFor="province"
                                        className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-600"
                                    >
                                        Province
                                    </label>
                                </div>

                                {/* Municipality */}
                                <div className="relative mt-3">
                                    <select
                                        className="w-full px-4 py-3 text-gray-700 border-2 border-gray-300 rounded-lg 
                                       focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200 
                                       peer transition-all duration-200 bg-white"
                                        id="municipality"
                                    >
                                        <option value="">
                                            Select municipality
                                        </option>
                                    </select>
                                    <label
                                        htmlFor="municipality"
                                        className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-600"
                                    >
                                        Municipality
                                    </label>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-gray-200">
                                <button
                                    type="button"
                                    onClick={() => setIsEditModalOpen(false)}
                                    className="px-6 py-2.5 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 font-medium 
                                   transition-all duration-200 transform hover:scale-[1.02]"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-6 py-2.5 bg-green-700 text-white rounded-lg hover:bg-green-800 font-medium 
                                   transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                                >
                                    Edit User
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {isArchiveOpen && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-md relative transform transition-all duration-300 ease-out overflow-hidden">
                        <div className="bg-green-800 px-6 py-4">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-bold text-white">
                                    Confirm Archive
                                </h2>
                            </div>
                        </div>

                        <div className="px-6 py-6">
                            <p className="text-gray-700 text-center">
                                Are you sure you want to{" "}
                                <span className="font-semibold text-green-600">
                                    archive this user
                                </span>
                                ? <br />
                                This action can be reversed later.
                            </p>
                        </div>

                        <div className="flex justify-center gap-3 px-6 py-4 border-t border-gray-200">
                            <button
                                type="button"
                                onClick={() => setIsArchiveOpen(false)}
                                className="px-6 py-2.5 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 font-medium 
                                transition-all duration-200 transform hover:scale-[1.02]"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                onClick={() => setIsArchiveOpen(false)}
                                className="px-6 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium 
                                transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                            >
                                Archive
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Users;
