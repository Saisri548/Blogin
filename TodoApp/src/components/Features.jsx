import React from "react";

const Features = () => {
  const features = [
    { title: "Rich Text Editor", description: "Write and format blogs effortlessly." },
    { title: "Categories & Tags", description: "Organize content for better discovery." },
    { title: "Search Blogs", description: "Find articles instantly." },
    { title: "Likes & Comments", description: "Engage with your readers." },
   
    
  ];

  return (
    <div className="grid grid-cols-4 gap-6 mt-8 px-6">
      {features.map((f, index) => (
        <div
          key={index}
          className="w-72 h-40 rounded-lg flex flex-col items-center justify-center text-center
          bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg p-4"
        >
          <h1 className="text-xl text-white font-bold">{f.title}</h1>
          <p className="text-sm text-white/80 mt-2">{f.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;