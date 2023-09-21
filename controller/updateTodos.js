const todo = require('../model/todoSchema');

exports.updateTodos = async function(req,res){
        try{
          let id = req.params.id;
          let {title,description} = req.body;
          const response = await todo.findByIdAndUpdate({_id:id},{title,description,updatedAt:Date.now()});
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
                   message:'nhi update kr paaya bhai db me '
            })
        }
}   