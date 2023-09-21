const todo = require('../model/todoSchema');

exports.createTodo = async function(req,res){
     try{
        console.log(req.body);
         const {title,description} = req.body;
         const response = await todo.create({title,description});
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
                message:'nhi bn paya bhai db me '
         })
     }
}