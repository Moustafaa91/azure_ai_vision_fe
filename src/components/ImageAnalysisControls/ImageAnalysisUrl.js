import React, { useState } from 'react';
import MDInput from "../MDInput";
import MDButton from "../MDButton";

function ImageAnalysisUrl({onAnalysisResult}) {
  const [imageUrl, setImageUrl] = useState('');
  const [message, setMessage] = useState({ content: '', isError: false });

  const validExtensions = ".JPEG, .JPG, .PNG, .GIF, .BMP, .WEBP, .ICO, .TIFF, .MPO";
  const validateUrl = (url) => {
    const pattern = new RegExp(`https?://.+\\.(${validExtensions.replace(/,?\s*\./g, '|').toLowerCase()})$`);
    return pattern.test(url);
  };

  const handleAnalyzeImage = async () => {
    if (!validateUrl(imageUrl)) {
      setMessage({ content: 'Please enter a valid image URL.', isError: true });
      return;
    }

    setMessage({ content: '', isError: false }); // Clear any previous message
    const requestBody = {
      url: imageUrl
    };

    try {
      const response = await fetch('https://azureaivision-api.azurewebsites.net/api/analyzeImage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error('Failed to analyze image');
      }

      const data = await response.json();
      console.log(data); // Handle the response data as needed
      setMessage({ content: 'Image analyzed successfully!', isError: false });
      onAnalysisResult(data);
    } catch (error) {
      console.error('Error:', error);
      setMessage({ content: 'Failed to analyze image. Please try again.', isError: true });
    }
  };

  return (
    <div>
      <MDInput 
        type="text"
        value={imageUrl}
        onChange={(e) => {
          setImageUrl(e.target.value);
          if (message.content && !message.isError) {
            setMessage({ content: '', isError: false }); // Clear success message on input change
          }
        }}
        placeholder={`Enter image URL (must end with ${validExtensions})`}
        pattern={`https?://.+\\.(${validExtensions.replace(/,?\s*\./g, '|').toLowerCase()})$`}
        title={`URL must be an image and end with ${validExtensions}`}
      />
      {message.content && (
        <div style={{ color: message.isError ? 'red' : 'green' }}>{message.content}</div>
      )}
      <MDButton color="info" onClick={handleAnalyzeImage}>Analyze Image</MDButton>
    </div>
  );
}

export default ImageAnalysisUrl;