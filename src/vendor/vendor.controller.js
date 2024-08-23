import VendorRepository from "./vendor.repository.js";

export default class VendorController {

    constructor() {
        this.vendorRepository = new VendorRepository();
    }

    async addVendor(req,res,next) {
        const {name,contact,address,vendorCode} = req.body;
        const resp = await this.vendorRepository.addVendor({name,contact,address,vendorCode});
        if(resp.success) {
            res.status(201).json({
                success: true,
                msg: 'Vendor added successfully',
                res: resp.res
            });
        }
        else{
            res.status(400).json({
                success: false,
                error: resp.error.msg
            });
        }
    }

    async allVendors(req,res,next) {
        const resp = await this.vendorRepository.getAllVendors();
        if(resp.success) {
            res.status(200).json({
                success:true,
                res:resp.res
            })
        }
        else{
            res.status(400).json({
                success: false,
                error: resp.error.msg
            });
        }
    }

    async getVendor(req,res,next) {
        const vendorId = req.params.vendorId;
        const resp = await this.vendorRepository.getVendorDetails(vendorId);
        if(resp.success) {
            res.status(200).json({
                success:true,
                res:resp.res
            })
        }
        else{
            res.status(400).json({
                success: false,
                error: resp.error.msg
            });
        }
    }

    async updateVendor(req,res,next) {
        const vendorId = req.params.vendorId;
        const resp = await this.vendorRepository.updateVendorDetails(vendorId,{...req.body});
        if(resp.success) {
            res.status(200).json({
                success:true,
                res:resp.res
            })
        }
        else{
            res.status(400).json({
                success: false,
                error: resp.error.msg
            });
        }
    }

    async deleteVendor(req,res,next) {
        const vendorId = req.params.vendorId;
        const resp = await this.vendorRepository.deleteVendor(vendorId);
        if(resp.success) {
            res.status(200).json({
                success:true,
                msg: 'Vendor deleted successfully',
                // res:resp.res
            })
        }
        else{
            res.status(400).json({
                success: false,
                error: resp.error.msg
            });
        }
    }

    async vendorMetrics(req, res,next) {
        res.status(200).json({
            success:true,
            // res:resp.res
        })
    }

}