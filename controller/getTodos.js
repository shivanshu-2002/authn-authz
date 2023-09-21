const todo = require('../model/todoSchema');

exports.getTodos = async function(req,res){
    try{
         const response = await todo.find({});
         res.status(200).json({
            success:true,
            data:response,
            message:'Bn gya bhai db me '
         })
     }
     catch(error){
        console.log(error)
         res.status(500).json({
                success:false,
                data:error,
                message:'nhi la paya bhai db me se data'
         })
     }
}

exports.getTodo = async function(req,res){
    try{
        const id = req.params.id;
        const response = await todo.findById({_id:id});
        res.status(200).json({
           success:true,
           data:response,
           message:'La diya bhai db me se '
        })
    }
    catch(error){
       console.log(error)
        res.status(500).json({
               success:false,
               data:error,
               message:'nhi la paya bhai db me se data'
        })
    }
}