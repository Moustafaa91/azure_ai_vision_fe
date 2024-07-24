import React, { useState } from 'react';
import MDInput from "../MDInput";
import MDButton from "../MDButton";
import MDTypography from "../MDTypography";
import MDBox from "../MDBox";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import useAnalyzeImage from '../../hooks/useAnalyzeImage';

function ImageAnalysisUrl({ setAnalysisResult, setDisplayImageUrl }) {
  const [imageUrl, setImageUrl] = useState('');
  const [genderNeutral, setGenderNeutral] = useState(false);
  const [message, setMessage] = useState({ content: '', isError: false });

  const { analyze, loading, error } = useAnalyzeImage();

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

    setMessage({ content: '', isError: false });

    try {
      const result = await analyze(imageUrl, genderNeutral);
      setMessage({ content: 'Image analyzed successfully!', isError: false });
      setAnalysisResult(result);
      setDisplayImageUrl(imageUrl);
    } catch (error) {
      setMessage({ content: error, isError: true });
    }
  };

  return (
    <MDBox width="100%">
      <MDBox display="flex" alignItems="center" width="100%" marginBottom="1rem">
        <MDButton style={{ marginRight: "1rem" }} size="small" color="dark" onClick={handleAnalyzeImage} disabled={loading}>
          {loading ? 'Analyzing...' : 'Analyze Image'}
        </MDButton>
        <MDInput
          type="url"
          size="large"
          value={imageUrl}
          onChange={(e) => {
            setImageUrl(e.target.value);
            if (message.content && !message.isError) {
              setMessage({ content: '', isError: false });
            }
          }}
          placeholder="Enter image URL"
          pattern={`https?://.+\\.(${validExtensions.replace(/,?\s*\./g, '|').toLowerCase()})$`}
          color="dark"
          style={{ width: "100%" }}
        />

      </MDBox>

      {message.content && (
        <MDBox marginBottom="1rem">
          <MDTypography style={{ color: message.isError ? 'red' : 'green' }}>
            {message.content}
          </MDTypography>
        </MDBox>
      )}

      <MDBox bgColor="Snow" width="100%">
      <FormControlLabel 
        value={genderNeutral}
        control={<Checkbox checked={genderNeutral} onChange={(e) => setGenderNeutral(e.target.checked)} />}
        label="Gender neutral caption"
      />
      </MDBox>
      <MDTypography color="dark" variant="overline">
        Image URL must end with {validExtensions}
      </MDTypography>
    </MDBox>
  );
}

export default ImageAnalysisUrl;
