const todo = require('../model/todoSchema');

exports.deleteTodos = async function(req,res){
       try{
           const id=  req.params.id;
           console.log(id)
           let response = await todo.findByIdAndDelete({_id:id});
           res.status(200).json({
            success:true,
            data:response,
            message:'Bhai Kr diya delete db se  '
         })
       }
       catch(error){
        console.log(error)
        res.status(500).json({
               success:false,
               data:error,
               message:'nhi delete kr paaya bhai db me '
        })
       }
}