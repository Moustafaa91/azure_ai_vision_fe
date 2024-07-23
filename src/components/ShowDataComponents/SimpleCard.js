
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const SimpleCard = ({ title, text, confidence, url }) => {
return (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
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

export default SimpleCard;