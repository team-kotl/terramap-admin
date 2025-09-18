import { CircleX, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import bcrypt from "bcryptjs";

const ProfileModal = ({ onClose }) => {
    const [showChangePassword, setShowChangePassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [currentPassword, setCurrentPassword] = useState("");
    const [changePassword, setChangePassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSave = async (e) => {
    e.preventDefault();

    if (changePassword !== confirmPassword) {
        setError("Passwords do not match");
        return;
    }

    setError("");
    const hashedPassword = await bcrypt.hash(changePassword, 10);
    console.log("Hashed password:", hashedPassword);

    // TODO: send hashed password to backend
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl shadow-lg w-11/12 md:w-1/2 max-w-lg p-6 relative">
            {/* Close button */}
            <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-red-500 cursor-pointer"
            >
            <CircleX className="h-6 w-6" />
            </button>

            <h2 className="text-xl font-bold text-green-800 mb-6">Profile</h2>

            <form onSubmit={handleSave} className="space-y-6">
            {/* Current Password */}
            <div className="relative">
                <input
                type="password"
                id="current_password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="block px-2.5 pb-2.5 pt-4 w-full text-base md:text-sm text-gray-900 bg-transparent rounded-lg border border-gray-400 appearance-none focus:border-green-600 focus:outline-none focus:ring-0 peer"
                placeholder=" "
                />
                <label
                htmlFor="current_password"
                className="absolute text-sm text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 
                peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-500 
                peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 
                peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 
                peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                Current Password
                </label>
            </div>

            {/* Change Password */}
            <div className="relative">
                <input
                type={showChangePassword ? "text" : "password"}
                id="change_password"
                value={changePassword}
                onChange={(e) => setChangePassword(e.target.value)}
                className="block px-2.5 pb-2.5 pt-4 w-full text-base md:text-sm text-gray-900 bg-transparent rounded-lg border border-gray-400 appearance-none focus:border-green-600 focus:outline-none focus:ring-0 peer"
                placeholder=" "
                />
                <label
                htmlFor="change_password"
                className="absolute text-sm text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 
                peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-500 
                peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 
                peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 
                peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                Change Password
                </label>
                <button
                type="button"
                onClick={() => setShowChangePassword(!showChangePassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                {showChangePassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
                <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirm_password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`block px-2.5 pb-2.5 pt-4 w-full text-base md:text-sm text-gray-900 bg-transparent rounded-lg border ${
                    error ? "border-red-500" : "border-gray-400"
                } appearance-none focus:border-green-600 focus:outline-none focus:ring-0 peer`}
                placeholder=" "
                />
                <label
                htmlFor="confirm_password"
                className="absolute text-sm text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 
                peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-500 
                peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 
                peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 
                peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                Confirm Password
                </label>
                <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
            </div>
            {error && <p className="-mt-4.5 text-sm text-red-600">{error}</p>}

            <div className="flex flex-col items-center mb-4 space-y-4">
                <button
                type="submit"
                className="bg-green-700 hover:bg-green-800 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-md md:w-50 w-30 cursor-pointer"
                >
                Save
                </button>
                <button
                type="button"
                className="bg-red-700 hover:bg-red-800 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-md md:w-50 w-30 cursor-pointer"
                >
                Logout
                </button>
            </div>
            </form>
        </div>
        </div>
    );
};

export default ProfileModal;
