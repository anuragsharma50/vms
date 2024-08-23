import express from 'express';
import POController from './PO.controller.js';

const poRouter = express.Router();

const poController = new POController();

poRouter.post('/purchase-orders',(req,res,next) => {
    poController.addPurchaseOrder(req,res,next);
})

poRouter.get('/purchase-orders',(req,res,next) => {
    poController.allPurchaseOrder(req,res,next);
})

poRouter.get('/purchase-orders/:poId',(req,res,next) => {
    poController.getPurchaseOrder(req,res,next);
})

poRouter.put('/purchase-orders/:poId',(req,res,next) => {
    poController.updatePurchaseOrder(req,res,next);
})

poRouter.delete('/purchase-orders/:poId',(req,res,next) => {
    poController.deletePurchaseOrder(req,res,next);
})


export default poRouter;