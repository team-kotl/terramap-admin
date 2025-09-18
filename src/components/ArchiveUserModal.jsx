const ArchiveUserModal = ({ isOpen, onClose, onArchive }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md relative transform transition-all duration-300 ease-out overflow-hidden">
                {/* Header */}
                <div className="bg-green-800 px-6 py-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold text-white">Confirm Archive</h2>
                    </div>
                </div>

                {/* Body */}
                <div className="px-6 py-6">
                    <p className="text-gray-700 text-center">
                        Are you sure you want to{" "}
                        <span className="font-semibold text-green-600">archive this user</span>
                        ? <br />
                        This action can be reversed later.
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex justify-center gap-3 px-6 py-4 border-t border-gray-200">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-6 py-2.5 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 font-medium 
                                    transition-all duration-200 transform cursor-pointer"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={onArchive}
                        className="px-6 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium 
                                    transition-all duration-200 transform  shadow-lg hover:shadow-xl cursor-pointer"
                    >
                        Archive
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ArchiveUserModal;
