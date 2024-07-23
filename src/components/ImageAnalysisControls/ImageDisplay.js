
import React from 'react';
import MDBox from  "components/MDBox";

const ImageDisplay = ({ imageUrl }) => {
  if (!imageUrl) return (
        <MDBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="30rem"
          height="30rem"
          bgColor="tranparent"
          shadow="sm"
          borderRadius="10%"
          position="absolute"
          zIndex={-1}
          top="1rem"
          color="dark"
        >
          
        </MDBox>
  );

  return (
    <MDBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="30rem"
      height="30rem"
      bgColor="transparent"
      shadow="sm"
      borderRadius="10%"
      position="absolute"
      zIndex={-1}
      top="1rem"
      color="dark"
    >
      <img src={imageUrl} style={{ width: "100%", height: "100%", borderRadius: "10%" }} alt="Analyzed" />
    </MDBox>
  );
};

export default ImageDisplay;
