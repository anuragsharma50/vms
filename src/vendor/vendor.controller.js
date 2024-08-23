

export default class VendorController {

    constructor() {
        this.vendorController = new VendorController();
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

    


}