import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import PeopleTaggingCard from 'components/ShowDataComponents/PeopleTaggingCard';

const PeopleResultComponent = ({ analysisResult, setCurrentBoundingBox}) => {
  const peopleResult = analysisResult?.peopleResult;
  
  return (
    <Box sx={{ minWidth: 500, boxShadow: 3 }}>
      {(
        peopleResult ? (
          <Card style={{backgroundColor: "transparent"}} variant="outlined">
            <PeopleTaggingCard 
            title="People tagging Result" 
            listData={peopleResult.values} 
            url="https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/concept-people-detection" 
            setCurrentBoundingBox={setCurrentBoundingBox}
            />
          </Card>
        ) : (
          <Card style={{backgroundColor: "transparent"}} variant="outlined">
            <PeopleTaggingCard title="People tagging Result" text="No people detected in the image." />
          </Card>
        )
      )}

    </Box>
  );
};

export default PeopleResultComponent;