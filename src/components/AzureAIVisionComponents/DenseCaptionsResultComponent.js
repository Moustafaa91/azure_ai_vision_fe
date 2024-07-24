
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import DenseCaptionCard from 'components/ShowDataComponents/DenseCaptionCard';

const DenseCaptionsResultComponent = ({ analysisResult, setCurrentBoundingBox  }) => {
  const denseCaptions = analysisResult?.denseCaptionsResult;

  return (
    <Box sx={{ minWidth: 275, boxShadow: 3 }}>
      {(
        denseCaptions ? (
          <Card style={{backgroundColor: "transparent"}} variant="outlined">
            <DenseCaptionCard 
            title="Dense Captions Result" 
            listData={denseCaptions.values}
            url="https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/concept-describe-images-40?tabs=dense" 
            setCurrentBoundingBox={setCurrentBoundingBox}
            />
          </Card>
        ) : (
          <Card style={{backgroundColor: "transparent"}} variant="outlined">
            <DenseCaptionCard title="Dense Captions Result" text="No dense caption result available." />
          </Card>
        )
      )}

    </Box>
  );
};

export default DenseCaptionsResultComponent;