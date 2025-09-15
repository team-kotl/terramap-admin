import { CircleX } from "lucide-react";

const ProfileModal = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl shadow-lg w-11/12 md:w-1/2 max-w-lg p-6 relative">
            {/* Close button */}
            <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-red-500 cursor-pointer">
            <CircleX className="h-6 w-6" />
        </button>

        <h2 className="text-xl font-bold text-green-800 mb-6">Profile</h2>

        <form className="space-y-6">
            <div class="relative">
                <input type="current password" id="current_password" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-400 appearance-none  dark:border-gray-400 focus:border-green focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                <label for="current_password" class="absolute text-sm text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                Current Password
                </label>
            </div>
            <div class="relative">
                <input type="change password" id="change_password" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-400 appearance-none  dark:border-gray-400 focus:border-green focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                <label for="change_password" class="absolute text-sm text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                Change Password
                </label>
            </div>
            <div class="relative">
                <input type="confirm password" id="confirm_password" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-400 appearance-none  dark:border-gray-400 focus:border-green focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                <label for="confirm_password" class="absolute text-sm text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                Confirm Password
                </label>
            </div>
            <div className="flex flex-col items-center mb-4 space-y-4">
                <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md w-50 cursor-pointer">
                    Save
                </button>
                <button className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-md w-50 cursor-pointer">
                    Logout
                </button>
            </div>
        </form>
        </div>
    </div>
    );
};

export default ProfileModal;
