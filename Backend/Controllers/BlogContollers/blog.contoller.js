import { prisma } from "../../prisma/client.js"
export const createBlog=async(req,res)=>{
    try{
         console.log("USER:", req.user);

        const {title,subtitle,content,ImageUrl,genreId}=req.body
        const authorId = req.user.userId; 
        const blog=await prisma.Blog.create({
            data:{

                title,
                subtitle,
                content,
                authorId,
                 ImageUrl,
               
                genreId
            }
        })
        return res.status(201).json({
            success:true,
            blog
        })

    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
export const getAllBlogs=async(req,res)=>{
    try{
        const blogs=await prisma.Blog.findMany({
            include:{
                author:{
                    select:{id:true,name:true}
                },
                genre:true
            },
            orderBy:{
                createdAt:"desc"
            }
        })
        res.json(blogs)

    }
    catch(error){
          res.status(500).json({ message: error.message });
    }
}
export const singleBlog=async(req,res)=>{
    try{
        const {id}=req.params
        const blog=await prisma.Blog.findUnique({
            where:{id},
            include:{
                author:{
                    select:{id:true,name:true}
                },
                genre:true,
                likes:true,
                comments:true
            }
        })
        if(!blog){
            return res.status(404).json({ message: "Blog not found" });
        }
        res.json(blog)
    }
    catch(error){
          res.status(500).json({ message: error.message });
    }
}

export const updateBlog=async(req,res)=>{
    try{
        const {id}=req.params;
        const {title,subtitle,content,coverImage,genreId}=req.body;
        const blog=await prisma.Blog.findUnique({
            where:{id}
        })
        if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    
    }
    if(blog.authorId!==req.user.userId){
          return res.status(403).json({ message: "Not allowed" });
    }
    const updatedBlog=await prisma.Blog.update({
        where:{id},
        data: {
        title,
        subtitle,
        content,
        coverImage,
        genreId
      }
    })
    res.json(updatedBlog)

}
catch(error){
          res.status(500).json({ message: error.message });
}
}
export const deletedBlog=async(req,res)=>{
    try{
        const {id}=req.params
        const blog=await prisma.Blog.findUnique({
            where:{id}
        })
        if(!blog){
            return res.status(404).json({ message: "Blog not found" });
    }
    if(blog.authorId!==req.user.userId){
        return res.status(404).json({ message: "Blog not found due to lack of userId" });
    }
    await prisma.Blog.delete({
        where:{id}
    })
    res.json({message: "Blog deleted successfully" })


    }
    catch(error){
          res.status(500).json({ message: error.message });
}
}
