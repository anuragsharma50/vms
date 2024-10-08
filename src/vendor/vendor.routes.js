import express from 'express';
import VendorController from './vendor.controller.js';

const vendorRouter = express.Router();

const vendorController = new VendorController();

vendorRouter.post('/',(req,res,next) => {
    vendorController.addVendor(req,res,next);
})

vendorRouter.get('/',(req,res,next) => {
    vendorController.allVendors(req,res,next);
})

vendorRouter.get('/:vendorId',(req,res,next) => {
    vendorController.getVendor(req,res,next);
})

vendorRouter.put('/:vendorId',(req,res,next) => {
    vendorController.updateVendor(req,res,next);
})

vendorRouter.delete('/:vendorId',(req,res,next) => {
    vendorController.deleteVendor(req,res,next);
})

// vendor's performance Metrics route
vendorRouter.get('/performance',(req,res,next) => {
    vendorController.vendorMetrics(req,res,next);
})

export default vendorRouter;