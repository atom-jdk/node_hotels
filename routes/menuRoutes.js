const express=require('express');
const router=express.Router();
const menu =require('./../models/menu');

//post method to add a menu item
router.post('./',async(req,res)=>{
    try{
        const data=req.body
        const newMenu=new menu(data);
        const response=await newMenu.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'})

    }
})
//GET method to get the menu item
router.get('/',async (req,res)=>{
    try{
        const data =await menu.find();

        console.log('data fetched');
        res.status(200).json(data);

    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal sever Error'});
    }
})

module.exports=router;


