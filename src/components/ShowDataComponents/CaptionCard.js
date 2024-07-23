
import React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const CaptionCard = ({ title, text, confidence, url }) => {
return (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Divider />
        <Typography variant="h6" component="div">
          {text}
        </Typography>

        {confidence && (
          <Typography variant="body2">
          Confidence score: {(confidence * 100).toFixed(2)}%
        </Typography>
        )}
      </CardContent>
      <CardActions>
        {url ? 
        (<Button onClick={() => window.open(url, '_blank')} size="small">Learn More about this API</Button>) : 
        (<Button disabled="disabled" size="small">Learn More about this API</Button>
            
        )}
      </CardActions>
    </React.Fragment>
);

};

export default CaptionCard;