import React, { useState } from 'react';
import MDInput from "../MDInput";
import MDButton from "../MDButton";
import MDTypography from "../MDTypography";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";

function ImageAnalysisUrl(props) {
  const [imageUrl, setImageUrl] = useState('');
  const [message, setMessage] = useState({ content: '', isError: false });
  const [displayImageUrl, setDisplayImageUrl] = useState(''); // Step 1: Add state variable for display image URL

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
      props.setAnalysisResult(data);
      setDisplayImageUrl(imageUrl);
    } catch (error) {
      console.error('Error:', error);
      setMessage({ content: 'Failed to analyze image. Please try again.', isError: true });
    }
  };

  return (
    <>
      <MDBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="30rem"
        height="30rem"
        shadow="sm"
        borderRadius="10%"
        bgColor="transparent"
        position="absolute"
        zIndex={-1}
        top="1rem"
      >
          <img src={imageUrl} style={{ width: "100%", height: "100%", borderRadius: "10%" }} />
      </MDBox>

      <MDBox
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        bgColor="transparent"
        borderRadius="10%"
        position="absolute"
        zIndex={-1}
        top="35rem"
        color="dark"
      >
        <MDBox display="flex" alignItems="center" width="100%">
          <MDButton style={{ marginRight: "1rem" }} size="small" color="dark" onClick={handleAnalyzeImage}>Analyze Image</MDButton>
          <MDInput
            type="url"
            size="large"
            value={imageUrl}
            onChange={(e) => {
              setImageUrl(e.target.value);
              if (message.content && !message.isError) {
                setMessage({ content: '', isError: false }); // Clear success message on input change
              }
            }}
            placeholder="Enter image URL"
            pattern={`https?://.+\\.(${validExtensions.replace(/,?\s*\./g, '|').toLowerCase()})$`}
            color="dark"
            style={{ width: "100%" }}
          />
        </MDBox>

        {message.content && (
          <div style={{ color: message.isError ? 'red' : 'green' }}>{message.content}</div>
        )}

        <MDTypography color="dark" variant="overline" style={{ marginTop: "1rem" }}>
          Image URL must end with {validExtensions}
        </MDTypography>
      </MDBox>
    </>
  );
}

export default ImageAnalysisUrl;
