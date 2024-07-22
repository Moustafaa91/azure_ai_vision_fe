// src/Components/ImageUploadAndAnalyze.js
import React, { useState } from 'react';
const { BlobServiceClient } = require('@azure/storage-blob');
const path = require('path-browserify');


async function uploadImageAndGetURL(imagePath, containerName, blobName) {
  
  const blobServiceClient = BlobServiceClient.fromConnectionString('CONNECTION_STRING');

  const containerClient = blobServiceClient.getContainerClient(containerName);

  const blockBlobClient = containerClient.getBlockBlobClient(blobName);

  const uploadBlobResponse = await blockBlobClient.uploadFile(imagePath);
  console.log(`Upload block blob ${blobName} successfully`, uploadBlobResponse.requestId);

  const blobURL = blockBlobClient.url;
  console.log(`Blob URL: ${blobURL}`);

  return blobURL;
}

const containerName = 'CONTAINER_NAME';




const ImageAnalysisUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      alert('Please select a file first!');
      return;
    }

    const formData = new FormData();
    debugger;
    const imagePath = path.join(__dirname, 'local-image.jpg'); 
    const blobName = 'new-image-name.jpg'; 
    uploadImageAndGetURL(imagePath, containerName, blobName)
        .then(url => console.log(`Image uploaded and accessible at: ${url}`))
        .catch(error => console.error('Error uploading image to Azure Blob Storage:', error));
    formData.append('url', selectedFile);

    try {
      const response = await fetch('https://azureaivision-api.azurewebsites.net/api/analyzeImage', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
      alert('Image analyzed successfully. Check console for details.');
    } catch (error) {
      console.error('Error analyzing image:', error);
      alert('Error analyzing image. Check console for details.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} accept="image/*" />
        <button type="submit">Analyze Image</button>
      </form>
    </div>
  );
};

export default ImageAnalysisUploader;