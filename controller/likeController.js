const Post = require("../model/postModel");
const Like = require("../model/likeModel");

exports.createLike = async (req,res)=>{
    try{
     const {post,user} = req.body;
     const obj = new Like({
          post,user
     })

  //    Making entry in the databse ..
    const respLike = await obj.save();
   
  //   Updating the value of comment in the post Schema
  
     const updatePost = await Post.findByIdAndUpdate(post,{$push:{likes:respLike._id}},{new:true}).populate("likes").exec();
    
     res.status(200).json({
      data:updatePost
     })
    }
    catch(error){
     console.log(error);
     res.status(500).json({
         success:false
     })
    }
}

exports.createUnlike = async (req,res)=>{
  try{
    const {post,like} = req.body;
   

   const deletedLike = await Like.findByIdAndDelete({post:post,_id:like});

   const updatePost = await Post.findByIdAndUpdate({_id:post},{$pull:{likes:deletedLike._id}},{new:true});
 
    res.status(200).json({
     data:updatePost
    })
   }
   catch(error){
    console.log(error);
    res.status(500).json({
        success:false,
        error:error
    })
   }
}