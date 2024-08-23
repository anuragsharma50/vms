import mongoose from "mongoose";
import { vendorSchema } from "./vendor.schema.js";

const vendorModel = mongoose.model('vendor',vendorSchema);

export default class VendorRepository {

    async addVendor(vendor) {
        try {
            const newVendor = new vendorModel(vendor);
            await newVendor.save();
            return { success: true, res:newVendor };
        } catch (err) {
            console.log(err);
            return {
                success: false,
                error: {
                    statusCode: 400,
                    msg: err
                }
            }
        }
    }

    async getAllVendors() {
        try {
            const vendors = await vendorModel.find({});
            return {success:true,res:vendors};
        } catch (err) {
            console.log(err);
            return { success:false,error: {statusCode:400, msg: err} }
        }
    }

    async getVendorDetails(vendorId) {
        try {
            const vendor = await vendorModel.findOne({_id:vendorId});
            return {success:true,res:vendor};
        } catch (err) {
            console.log(err);
            return { success:false,error: {statusCode:400, msg: err} }
        }
    }

    async updateVendorDetails(vendorId,updates) {
        try {
            const vendor = await vendorModel.findByIdAndUpdate(vendorId,{...updates});
            return {success:true,res:vendor};
        } catch (err) {
            console.log(err);
            return { success:false,error: {statusCode:400, msg: err} }
        }
    }

    async deleteVendor(vendorId) {
        try {
            const vendor = await vendorModel.findByIdAndDelete(vendorId);
            return {success:true};
        } catch (err) {
            console.log(err);
            return { success:false,error: {statusCode:400, msg: err} }
        }
    }

}