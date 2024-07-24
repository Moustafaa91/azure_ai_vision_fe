import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Link
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const AboutMeComponent = ({ imageUrl, name, description, linkedinUrl, githubUrl }) => {
  return (
    <Card sx={{  boxShadow: 20, maxWidth: 345, margin: 'auto' }}>
      <CardMedia
        component="img"
        height="300"
        image={imageUrl}
        alt={`${name}'s picture`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={linkedinUrl} target="_blank" rel="noopener">
          <IconButton aria-label="LinkedIn">
            <LinkedInIcon />
          </IconButton>
        </Link>
        <Link href={githubUrl} target="_blank" rel="noopener">
          <IconButton aria-label="GitHub">
            <GitHubIcon />
          </IconButton>
        </Link>
      </CardActions>
    </Card>
  );
};

export default AboutMeComponent;