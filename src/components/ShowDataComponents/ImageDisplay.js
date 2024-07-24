import React, { useRef, useEffect, useState } from 'react';
import MDBox from "components/MDBox";

const ImageDisplay = ({ imageUrl, boundingBox }) => {
  const imageRef = useRef(null);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0, offsetX: 0, offsetY: 0 });

  useEffect(() => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      setImageDimensions({
        width: rect.width,
        height: rect.height,
        offsetX: rect.left,
        offsetY: rect.top,
      });
    }
  }, [imageUrl]);

  if (!imageUrl) return (
    <MDBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="30rem"
      height="30rem"
      bgColor="transparent"
      shadow="sm"
      position="absolute"
      zIndex={-1}
      top="1rem"
      color="dark"
    >
    </MDBox>
  );

  const calculateBoxStyle = () => {
    if (!boundingBox) return {};
    const scaleX = imageDimensions.width / imageRef.current.naturalWidth;
    const scaleY = imageDimensions.height / imageRef.current.naturalHeight;
    return {
      position: 'absolute',
      border: '2px solid red',
      top: `${boundingBox.y * scaleY}px`,
      left: `${boundingBox.x * scaleX}px`,
      width: `${boundingBox.w * scaleX}px`,
      height: `${boundingBox.h * scaleY}px`,
    };
  };

  return (
    <MDBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="30rem"
      height="30rem"
      bgColor="transparent"
      shadow="sm"
      position="absolute"
      zIndex={-1}
      top="1rem"
      color="dark"
    >
      <img ref={imageRef} src={imageUrl} style={{ width: "100%", height: "100%" }} alt="Analyzed" />
      {boundingBox && <div style={calculateBoxStyle()}></div>}
    </MDBox>
  );
};

export default ImageDisplay;
