import { Gender } from './Gender';
import { Role } from './Role';
import { Field } from './Field';
import { CropDetails } from './CropDetails';
import { Equipment } from './Equipment';
import { Vehicle } from './Vehicle';

export class Staff {
    id: string;
    firstName: string;
    lastName: string;
    designation: string;
    gender: Gender;
    joinedDate: Date;
    DOB: Date;
    addressLine: string;
    contactNo: string;
    email: string;
    role: Role;
    field: Field[];
    cropDetails: CropDetails[];
    equipment: Equipment;
    vehicles: Vehicle[];

    constructor(
        id: string,
        firstName: string,
        lastName: string,
        designation: string,
        gender: Gender,
        joinedDate: Date,
        DOB: Date,
        addressLine: string,
        contactNo: string,
        email: string,
        role: Role,
        field: Field[],
        cropDetails: CropDetails[],
        equipment: Equipment,
        vehicles: Vehicle[]
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
        this.gender = gender;
        this.joinedDate = joinedDate;
        this.DOB = DOB;
        this.addressLine = addressLine;
        this.contactNo = contactNo;
        this.email = email;
        this.role = role;
        this.field = field;
        this.cropDetails = cropDetails;
        this.equipment = equipment;
        this.vehicles = vehicles;
    }
}