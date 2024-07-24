import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import ImageTaggingCard from 'components/ShowDataComponents/ImageTaggingCard';

const TagsResultComponent = ({ analysisResult }) => {
  const tagsResult = analysisResult?.tagsResult;
  console.log(tagsResult);
  return (
    <Box sx={{ minWidth: 275, boxShadow: 3 }}>
      {(
        tagsResult ? (
          <Card style={{backgroundColor: "transparent"}} variant="outlined">
            <ImageTaggingCard 
            title="Image tagging Result" 
            listData={tagsResult.values} 
            url="https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/concept-tag-images-40" 
            />
          </Card>
        ) : (
          <Card style={{backgroundColor: "transparent"}} variant="outlined">
            <ImageTaggingCard title="Image tagging Result" text="No image tagging result available." />
          </Card>
        )
      )}

    </Box>
  );
};

export default TagsResultComponent;