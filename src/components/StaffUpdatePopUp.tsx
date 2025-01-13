interface StaffUpdatePopUpProps {
    onClose: () => void;
}


export function StaffUpdatePopUp({ onClose }: StaffUpdatePopUpProps) {

    function onSave() {
        return () => {
            console.log("Save Staff");
        }
    }
    return (
        <>

            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white rounded-lg shadow-lg p-8 w-[600px]">
                    <h2 className="text-xl font-bold mb-4 text-center">Update Staff member</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {/* First Name */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">First Name</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded px-3 py-2"
                                placeholder="Enter First Name"
                            />
                        </div>
                        {/* Last Name */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Last Name</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded px-3 py-2"
                                placeholder="Enter Last Name"
                            />
                        </div>
                        {/* Designation */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Designation</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded px-3 py-2"
                                placeholder="Enter Designation"
                            />
                        </div>
                        {/* Join Date */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Join Date</label>
                            <input
                                type="date"
                                className="border border-gray-300 rounded px-3 py-2"
                            />
                        </div>
                        {/* Date of Birth */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Date of Birth</label>
                            <input
                                type="date"
                                className="border border-gray-300 rounded px-3 py-2"
                            />
                        </div>
                        {/* Gender */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Gender</label>
                            <select className="border border-gray-300 rounded px-3 py-2">
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        {/* Address */}
                        <div className="col-span-2 flex flex-col">
                            <label className="text-sm font-semibold mb-1">Address</label>
                            <textarea
                                className="border border-gray-300 rounded px-3 py-2"
                                placeholder="Enter Address"
                                rows={2}
                            ></textarea>
                        </div>
                        {/* Contact No */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Contact No.</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded px-3 py-2"
                                placeholder="Enter Contact Number"
                            />
                        </div>
                        {/* Email */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Email</label>
                            <input
                                type="email"
                                className="border border-gray-300 rounded px-3 py-2"
                                placeholder="Enter Email Address"
                            />
                        </div>
                        {/* Role */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Role</label>
                            <select className="border border-gray-300 rounded px-3 py-2">
                                <option value="">Select Role</option>
                                <option value="admin">Admin</option>
                                <option value="staff">Staff</option>
                            </select>
                        </div>
                    </div>
                    {/* Save Button */}
                    <div className="text-center mt-6 space-x-40 ">
                        <button
                            className="bg-emerald-100	 hover:bg-emerald-200	 text-gray-800 font-semibold py-2 px-6 rounded w-40"
                            onClick={onClose}>
                            Cancel
                        </button>

                        <button
                            className="bg-emerald-500	 hover:bg-emerald-700	 text-white font-semibold py-2 px-6 rounded w-40"
                            onClick={onSave()}
                        >
                            Save Staff
                        </button>
                    </div>


                </div>
            </div>
        </>
    );
}