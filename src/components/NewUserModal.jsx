import { CircleX, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const NewUserModal = ({ isOpen, onClose }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    if (!isOpen) return null; // Don't render if modal is closed

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl relative transform transition-all duration-300 ease-out overflow-hidden">
                {/* Header */}
                <div className="bg-green-800 px-6 py-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold text-white">Add New User</h2>
                        <button
                            onClick={onClose}
                            className="text-green-100 hover:text-white hover:bg-green-700 rounded-full p-1 transition-colors duration-200"
                        >
                            <CircleX className="h-6 w-6" />
                        </button>
                    </div>
                </div>

                {/* Body */}
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
                  text-gray-600 transition-all duration-200 peer-focus:text-green-600"
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
                                placeholder="Enter remarks"
                                rows={3}
                                className="w-full px-4 py-3 text-gray-700 border-2 border-gray-300 rounded-lg 
                  focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200 
                  placeholder-transparent peer resize-none transition-all duration-200"
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
                                <option value="">Select province</option>
                                <option>Abra</option>
                                <option>Apayao</option>
                                <option>Benguet</option>
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
                                <option value="">Select municipality</option>
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
                                type={showPassword ? "text" : "password"}
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
                                onClick={() => setShowPassword(!showPassword)}
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
                                type={showConfirmPassword ? "text" : "password"}
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
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
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
                            onClick={onClose}
                            className="px-6 py-2.5 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 font-medium 
                transition-all duration-200 transform hover:scale-[1.02] cursor-pointer"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2.5 bg-green-700 text-white rounded-lg hover:bg-green-800 font-medium 
                transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl cursor-pointer"
                        >
                            Add User
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewUserModal;
