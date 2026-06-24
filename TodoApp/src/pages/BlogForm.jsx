import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BlogForm = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [genre, setGenre] = useState("Technology");

  const handleSubmit = (e) => {
    e.preventDefault();

    const blogData = {
      title,
      subTitle,
      genre,
    };

    console.log("Blog Data:", blogData);
    console.log("Navigating with:", {
  title,
  subTitle,
  genre,
});

    navigate("/write", {
      state: {
        title,
        subTitle,
        genre,
      },
    });
  };

  return (
    <div className="w-full flex justify-center items-center mt-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-96"
      >
        {/* Title */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>

          <input
            type="text"
            placeholder="Enter Title of Blog"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Subtitle */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            SubTitle
          </label>

          <input
            type="text"
            placeholder="Enter Subtitle"
            value={subTitle}
            onChange={(e) => setSubTitle(e.target.value)}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Genre */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Genre
          </label>

          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="w-full bg-black text-white px-3 py-2 rounded"
          >
            <option value="Technology">Technology</option>
            <option value="Programming">Programming</option>
            <option value="Web Development">Web Development</option>
            <option value="AI & Machine Learning">
              AI & Machine Learning
            </option>
            <option value="Career">Career</option>
            <option value="Startups">Startups</option>
            <option value="Education">Education</option>
            <option value="Productivity">Productivity</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Continue to Editor
        </button>
      </form>
    </div>
  );
};

export default BlogForm;