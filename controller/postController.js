const Post = require('../model/postModel');
const Like = require('../model/likeModel');
const Comment = require('../model/commentModel')

exports.createPost = async (req, res) => {
    try {
        const { title, body } = req.body;
        //  Creating Object..
        const Obj = new Post({
            title, body
        })
        const savedPost = await Obj.save();

        // I can also use directly .create() method it will alsso work fine ..
        res.json({
            post: savedPost
        })
    }
    catch(error){
        console.log(error);
        return res.status(400).json({
            error:"Error While Creating the Blog"
        });
    }
}


exports.getPost = async (req,res)=>{
     try{
        const response = await Post.find().populate("likes").populate("comments").exec();
        res.status(200).json({
            success:true,
            data:response
        })
     }
     catch(error){ 
        console.log(error)
       res.status(500).json({
          success:false,
          data:error
       })
     }
}