import { prisma } from "../../prisma/client.js";
import uploadToCloudinary from "../../utilis/uploadToCloudinary.js";

// ==================== CREATE BLOG ====================
export const createBlog = async (req, res) => {
  console.log("========== CREATE BLOG ==========");

  try {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);
    console.log("USER:", req.user);

    if (!req.body) {
      return res.status(400).json({
        success: false,
        message: "Request body is undefined",
      });
    }

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }

    const { title, subtitle, content, Status, genreId } = req.body;

    let coverImage = "";

    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer);
      coverImage = result.secure_url;
    }

    const authorId = req.user.userId;

    const blog = await prisma.Blog.create({
      data: {
        title,
        subtitle,
        content,
        Status,
        coverImage,
        genreId,
        authorId,
      },
    });

    return res.status(201).json({
      success: true,
      blog,
    });
  } catch (error) {
    console.error("========== CREATE BLOG ERROR ==========");
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
      stack: error.stack, // Remove this in production
    });
  }
};

// ==================== GET ALL BLOGS ====================
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await prisma.Blog.findMany({
      include: {
        author: {
          select: {
            id: true,
            name: true,
          },
        },
        genre: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json(blogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==================== GET SINGLE BLOG ====================
export const singleBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await prisma.Blog.findUnique({
      where: { id },
      include: {
        author: {
          select: {
            id: true,
            name: true,
          },
        },
        genre: true,
        likes: true,
        comments: true,
      },
    });

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    res.json(blog);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==================== UPDATE BLOG ====================
export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, subtitle, content, coverImage, genreId } = req.body;

    const blog = await prisma.Blog.findUnique({
      where: { id },
    });

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    if (blog.authorId !== req.user.userId) {
      return res.status(403).json({
        message: "Not allowed",
      });
    }

    const updatedBlog = await prisma.Blog.update({
      where: { id },
      data: {
        title,
        subtitle,
        content,
        coverImage,
        genreId,
      },
    });

    res.json(updatedBlog);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==================== DELETE BLOG ====================
export const deletedBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await prisma.Blog.findUnique({
      where: { id },
    });

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    if (blog.authorId !== req.user.userId) {
      return res.status(403).json({
        message: "Not allowed",
      });
    }

    await prisma.Blog.delete({
      where: { id },
    });

    res.json({
      message: "Blog deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message,
    });
  }
};