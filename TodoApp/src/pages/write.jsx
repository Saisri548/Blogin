import { useRef } from "react";
import { useLocation } from "react-router-dom";
import BundledEditor from "./BundleEditor";

export default function Write() {
  const editorRef = useRef(null);
  const location = useLocation();
  const { title, subTitle, genre } = location.state || {};
 console.log("LOCATION STATE:", location.state);
  const log = () => {
    if (editorRef.current) {
      console.log({
        title,
        subTitle,
        genre,
        content: editorRef.current.getContent(),
      });
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Blog Header */}
      <h1 className="text-4xl font-bold mb-2">{title}</h1>

      <p className="text-gray-600 text-lg mb-3">
        {subTitle}
      </p>

      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
        {genre}
      </span>

      {/* Editor */}
      <div className="mt-6">
        <BundledEditor
          onInit={(_evt, editor) => (editorRef.current = editor)}
          initialValue="<p>Start writing your blog...</p>"
          init={{
            height: 500,
            menubar: false,
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "preview",
              "help",
              "wordcount",
            ],
            toolbar:
              "undo redo | blocks | bold italic forecolor | " +
              "alignleft aligncenter alignright alignjustify | " +
              "bullist numlist outdent indent | removeformat | help",
          }}
        />
      </div>

      <button
        onClick={log}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Publish Blog
      </button>
    </div>
  );
}