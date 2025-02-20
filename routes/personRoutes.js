const express=require('express');
const router=express.Router();
const person=require('./../models/person');

//POST route to add a person
router.post('/',async(req,res)=>{
    try{
        const data =req.body//Assuming the req body contains the person data 


        // create a new person document using the Mongoose model
        const newPerson=new person(data);

        //save the new person to the database
        const response=await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"internal server error"});
    }



})

// Get Method to get the person
router.get('/',async (req,res)=>{
    try{
        const data =await person.find();

        console.log('data fetched');
        res.status(200).json(data);

    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal sever Error'});
    }
})

router.get('/:workType',async(req,res)=>{

    try{
    const workType=req.params.workType;
    if(workType=='chef'||workType=='manager'||workType=='waiter'){
        const response=await person.find({work:workType});
        console.log('response fetched');
        res.status(200).json(response);

    }else{
        res.status(404).json({error:'invalid work type'})

    }
}
catch(err){
    console.log(err);
        res.status(500).json({error: 'Internal sever Error'});

}
})

router.put('/:id',async(req,res)=>{
    try{
        const personId=req.params.id;// Extract the id from the url parameter
        const updatedID=req.body;
        const response=await person.findByIdAndUpdate(personId,updatedID,{
            new:true,//return the updaed document
            runValidators:true,
        })

        if(!response){
            return res.status(404).json({error:'Person not found'});
        }
        console.log('data updated');
        res.status(200).json(response);
    }
    catch{
        console.log(err);
        res.status(500).json({error: 'Internal sever Error'});
    

    }

})

router.delete('/:id',async(req,res)=>{
    try{
        const personId=req.params.id;

        //Assuming you have the person model
        const response=await person.findByIdAndDelete(personId);


        if(!response){
            return res.status(404).json({error:'Person not found'});
        }
        console.log('data updated');
        res.status(200).json(response);

    }
    catch{
        console.log(err);
        res.status(500).json({error: 'Internal sever Error'});
    
    }
})

module.exports=router



