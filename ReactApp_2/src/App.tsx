import { useState } from "react";
import Search from "./components/Search";
import Box from "./components/Box";
import { Document, Audio, Images } from "./components/icons";

const App = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [selectedTask, setSelectedTask] = useState<
    "PDF" | "Audio" | "Images" | null
  >(null);

  // Define subcategories for each type
  const subCategories: Record<"PDF" | "Audio" | "Images", string[]> = {
    PDF: ["Compress PDF", "Merge PDF", "Split PDF"],
    Audio: ["Convert to MP3", "Convert to WAV", "Convert to AAC"],
    Images: ["Convert to PNG", "Convert to JPEG", "Convert to SVG"],
  };

  const icons = {
    PDF: <Document />,
    Audio: <Audio />,
    Images: <Images />,
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <h1
        id="page-heading"
        className={`margin md:text-8xl text-6xl font-bold my-2 ${
          isFocused ? "text-blue-600" : "text-black"
        }`}
      >
        everything.
      </h1>
      <p className="my-4 text-gray-500 md:text-2xl sm:text-xl text-lg">
        All your tasks. In one place. For free
      </p>
      <Search setIsFocused={setIsFocused} />

      {/* If no task is selected, show main options */}
      {!selectedTask ? (
        <div className="flex sm:flex-row flex-col items-center md:w-[68%] sm:w-[80%] w-[80%] lg:gap-10 gap-8 box-border">
          <Box
            task="PDF"
            text="Compress your PDFs into smaller sizes. Balance between quality and size."
            onClick={() => setSelectedTask("PDF")}
            svg={<Document />}
          />
          <Box
            task="Audio"
            text="Compress your audio into smaller sizes. Maintain quality."
            onClick={() => setSelectedTask("Audio")}
            svg={<Audio />}
          />
          <Box
            task="Images"
            text="Compress your images into smaller sizes. Balance between quality and size."
            onClick={() => setSelectedTask("Images")}
            svg={<Images />}
          />
        </div>
      ) : (
        // If a task is selected, show subcategories
        <div className="flex flex-col items-center md:w-[85%] lg:w-[65%] w-full">
          <h2 className="text-3xl font-bold mb-4">{selectedTask} Options</h2>
          <div className="flex sm:flex-row flex-col items-center md:w-[80%] sm:w-[85%] w-[80%] lg:gap-10 gap-8 box-border">
            {subCategories[selectedTask].map((sub, index) => (
              <Box
                key={index}
                task={sub}
                text={`Perform ${sub}`}
                svg={icons[selectedTask]}
              />
            ))}
          </div>
          {/* Back Button */}
          <button
            className="mt-6 px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700"
            onClick={() => setSelectedTask(null)}
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
