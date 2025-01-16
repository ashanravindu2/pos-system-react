import { Staff } from "../models/Staff.ts";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { add } from "../reducers/StaffSlice.ts";
import { useNavigate } from "react-router-dom";
import {Equipment} from "../models/Equipment.ts";
import {Vehicle} from "../models/Vehicle.ts";

interface StaffSavePopUpProps {
    onClose: () => void;
}

export function StaffSavePopUp({ onClose }: StaffSavePopUpProps) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [designation, setDesignation] = useState("");
    const [gender, setGender] = useState("");
    const [joinDate, setJoinDate] = useState("");
    const [DOB, setDOB] = useState("");
    const [addressLine, setAddressLine] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [field, setField] = useState<string[]>([]);
    const [cropDetails, setCropDetails] = useState<string[]>([]);
    const [equipment, setEquipment] = useState<Equipment | null>(null);
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);

    function onSave() {
        const newStaff = new Staff(
            "ST-" + Math.floor(Math.random() * 1000000),
            firstName,
            lastName,
            designation,
            gender,
            new Date(joinDate),
            new Date(DOB),
            addressLine,
            contactNo,
            email,
            role,
            field,
            cropDetails,
            equipment,
            vehicles
        );

        if (
            firstName === "" ||
            lastName === "" ||
            designation === "" ||
            gender === "" ||
            joinDate === "" ||
            DOB === "" ||
            addressLine === "" ||
            contactNo === "" ||
            email === "" ||
            role === ""
        ) {
            alert("Please fill all the fields");
            return;
        }

        console.log(newStaff.firstName);

        dispatch(add(newStaff));
        navigate("/staff");
    }

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white rounded-lg shadow-lg p-8 w-[600px]">
                    <h2 className="text-xl font-bold mb-4 text-center">Add New Staff</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {/* First Name */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">First Name</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded px-3 py-2"
                                placeholder="Enter First Name"
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        {/* Last Name */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Last Name</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded px-3 py-2"
                                placeholder="Enter Last Name"
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        {/* Designation */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Designation</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded px-3 py-2"
                                placeholder="Enter Designation"
                                onChange={(e) => setDesignation(e.target.value)}
                            />
                        </div>
                        {/* Join Date */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Join Date</label>
                            <input
                                type="date"
                                className="border border-gray-300 rounded px-3 py-2"
                                onChange={(e) => setJoinDate(e.target.value)}
                            />
                        </div>
                        {/* Date of Birth */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Date of Birth</label>
                            <input
                                type="date"
                                className="border border-gray-300 rounded px-3 py-2"
                                onChange={(e) => setDOB(e.target.value)}
                            />
                        </div>
                        {/* Gender */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Gender</label>
                            <select
                                className="border border-gray-300 rounded px-3 py-2"
                                onChange={(e) => setGender(e.target.value)}
                            >
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
                                onChange={(e) => setAddressLine(e.target.value)}
                            ></textarea>
                        </div>
                        {/* Contact No */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Contact No.</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded px-3 py-2"
                                placeholder="Enter Contact Number"
                                onChange={(e) => setContactNo(e.target.value)}
                            />
                        </div>
                        {/* Email */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Email</label>
                            <input
                                type="email"
                                className="border border-gray-300 rounded px-3 py-2"
                                placeholder="Enter Email Address"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        {/* Role */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Role</label>
                            <select
                                className="border border-gray-300 rounded px-3 py-2"
                                onChange={(e) => setRole(e.target.value)}
                            >
                                <option value="">Select Role</option>
                                <option value="admin">Admin</option>
                                <option value="staff">Staff</option>
                            </select>
                        </div>
                    </div>
                    {/* Save Button */}
                    <div className="text-center mt-6 space-x-40">
                        <button
                            className="bg-emerald-100 hover:bg-emerald-200 text-gray-800 font-semibold py-2 px-6 rounded w-40"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button
                            className="bg-emerald-500 hover:bg-emerald-700 text-white font-semibold py-2 px-6 rounded w-40"
                            onClick={onSave}
                        >
                            Save Staff
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}