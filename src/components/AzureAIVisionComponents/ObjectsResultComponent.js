
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import ObjectsDetectionCard from 'components/ShowDataComponents/ObjectsDetectionCard';


// TODO LATER

const ObjectsResultComponent = ({ analysisResult }) => {
  const objectsResult = analysisResult?.objectsResult;
  
  return (
    <Box sx={{ minWidth: 275, boxShadow: 3 }}>
      {(
        objectsResult ? (
          <Card style={{backgroundColor: "transparent"}} variant="outlined">
            <ObjectsDetectionCard title="Objects detection Result" listData={objectsResult.values} url="https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/concept-object-detection-40" />
          </Card>
        ) : (
          <Card style={{backgroundColor: "transparent"}} variant="outlined">
            <ObjectsDetectionCard title="Objects detection Result" text="No objects detection result available." />
          </Card>
        )
      )}

    </Box>
  );
};

export default ObjectsResultComponent;