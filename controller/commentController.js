const mongoose = require('mongoose');
const Post = require('../model/postModel');
const Comment = require('../model/commentModel');


exports.createComment = async (req,res)=>{
       try{
        const {post ,user,body} = req.body;
        const obj = new Comment({
             post,user,body
        })
 
     //    Making entry in the databse ..
       const responseComment = await obj.save();
      
     //   Updating the value of comment in the post Schema
     console.log("hwwwww")
        const updatePost = await Post.findByIdAndUpdate(post,{$push:{comments:responseComment._id}},{new:true}).populate("comments").exec();
       
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