import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CaptionCard from 'components/ShowDataComponents/CaptionCard';

const CaptionResultComponent = ({ analysisResult }) => {
  const captionResult = analysisResult?.captionResult;

  return (
    <Box sx={{ minWidth: 275, boxShadow: 3 }}>
      {(
        captionResult ? 
        <Card style={{backgroundColor: "transparent"}} variant="outlined">
          <CaptionCard title="Caption Result" text={captionResult.text} confidence={captionResult.confidence} url="https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/concept-describing-images" />
        </Card> :
        <Card style={{backgroundColor: "transparent"}} variant="outlined">
          <CaptionCard title="Caption Result" text="No caption result available." />
        </Card>
      )}
    </Box>
  );
};

export default CaptionResultComponent;
