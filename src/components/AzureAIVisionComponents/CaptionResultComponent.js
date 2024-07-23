import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SimpleCard from 'components/ShowDataComponents/SimpleCard';

const CaptionResultComponent = ({ analysisResult }) => {
  const captionResult = analysisResult?.captionResult;



  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Caption Result
        </Typography>
        <Typography variant="h6" component="div">
          {captionResult.text}
        </Typography>

        <Typography variant="body2">
          Confidence score: {(captionResult.confidence * 100).toFixed(2)}%
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => window.open('https://example.com', '_blank')} size="small">Learn More about this API</Button>
      </CardActions>
    </React.Fragment>
  );

  const cardNoResult = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Caption Result
        </Typography>
        <Typography variant="h6" component="div">
          No caption result available.
        </Typography>
      </CardContent>
      <CardActions>
        <Button disabled="disabled" size="small">Learn More about this API</Button>
      </CardActions>
    </React.Fragment>
  );




  return (
    <Box sx={{ minWidth: 275 }}>
      {(
        captionResult ? 
        <Card variant="outlined">
          <SimpleCard title="Caption Result" text={captionResult.text} confidence={captionResult.confidence} url="https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/concept-describing-images" />
        </Card> :
        <Card variant="outlined">
          <SimpleCard title="Caption Result" text="No caption result available." />
        </Card>
      )}

    </Box>
  );
};

export default CaptionResultComponent;
