import React from "react";
import "./index.css";

//   Figure out why the selected image  is not displayed  as expected and fix the issue.

// As reminder :
//  1 - First carrefully read the console errors
//  2 - Then check possible errors on code
//  3- Finaly use the debuger/inspection tools on the browser if needed
function App() {
  const images = [
    "https://picsum.photos/id/1/200/300",
    "https://picsum.photos/id/2/200/300",
    "https://picsum.photos/id/3/200/300",
  ];
  const [selectedImage, setSelectedImage] = React.useState(null);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div>
      <h1>Select an image</h1>
      <div>
        {images.map((image, imageIndex) => (
          <img
            key={imageIndex}
            src={image}
            onClick={() => handleClick(image)} // replace the inmageIndex with image because we want the path not the index
          />
        ))}
      </div>
      {selectedImage && (
        <div>
          <h2>Selected Image</h2>
          <img src={selectedImage} alt="Selected" />
        </div>
      )}
    </div>
  );
}

export default App;
