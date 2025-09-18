import { Search, CirclePlus, Pencil, Archive, ListFilter } from "lucide-react";
import { useState } from "react";
import NewUserModal from "../components/NewUserModal"
import EditUserModal from "../components/EditUserModal";
import ArchiveUserModal from "../components/ArchiveUserModal";
// import axios from "axios";

const Users = () => {
    // const [users, setUsers] = useState([]);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
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
        <div className="relative bg-gray-100 w-full p-10">
            <div className="p-1 md:p-5 md:mt-0">
                <div className="flex flex-row md:justify-between md:items-center bg-white rounded mb-6 gap-3 mt-5 ">
                    <div className="relative flex-1">
                        <Search className="absolute left-2 md:top-3.5 top-2.5 h-5 w-5 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search Users"
                            className="pl-10 pr-2 py-2 md:pr-3 md:py-3 rounded-md text-base w-full border border-gray-300 
                                        focus:outline-none focus:ring-2 focus:ring-green-800"
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
                                className={`border-b border-gray-200 text-sm md:text-base ${index % 2 === 0 ? "bg-gray-100" : "bg-white"
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
                                                    className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-semibold ${roleMap[role]?.color ||
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

            <NewUserModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
            />

            <EditUserModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
            />

            <ArchiveUserModal
                isOpen={isArchiveOpen}
                onClose={() => setIsArchiveOpen(false)}
                onArchive={() => {
                    // archive logic here
                    setIsArchiveOpen(false);
                }}
            />
        </div>
    );
};

export default Users;
