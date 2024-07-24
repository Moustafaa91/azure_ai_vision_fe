import React from 'react';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    IconButton,
    Link,
    List,
    ListItem 
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const AboutProjectComponent = () => {
    const libraries = [
        'react',
        'material-ui',
        'joy-ui'
    ];

    const backendUrl = 'https://github.com/Moustafaa91/azure_ai_vision_be';
    const frontendUrl = 'https://github.com/Moustafaa91/azure_ai_vision_fe';

    return (


        <Card sx={{ maxWidth: '80%', maxHeight: '30%', overflow: 'auto', top: '20px', margin: 'auto' }}>

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Azure AI Vision - UI Project
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <Typography variant="body1" paragraph>
                        This project is built with React.js and is intended for learning purposes. The idea behind this project is to create a user interface for &#160;
                        <Link color="lightblue" href="https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/overview" target="_blank" rel="noopener noreferrer">
                            Microsoft Azure AI Vision Services
                        </Link>. to show it's capabilities.  <br /> The backend is developed using Node.js and is hosted on Azure as well.
                    </Typography>
                    <br />
                    <Typography variant="body1" paragraph> 
                        Also, a template from Creative Tim website is used for the design of this project. &#160;
                        <Link color="lightblue" href="https://www.creative-tim.com/product/material-dashboard-react" target="_blank" rel="noopener noreferrer">
                         material-dashboard-react
                        </Link>
                    </Typography>
                    <Typography variant="body1" paragraph>
                        The following libraries are used in this project:
                    </Typography>
                    <List>
                        {libraries.map((lib, index) => (
                            <ListItem key={index}>{lib}</ListItem>
                        ))}
                    </List>
                    
                    <br />
                    <Typography variant="body1" paragraph>
                        GitHub Copilot and ChatGPT are used for coding assistance throughout the development of this project.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Source code is avaiable.
                    </Typography>
                </Typography>
            
            

            </CardContent>
            <CardActions>
                <Link href={backendUrl} target="_blank" rel="noopener">
                    <IconButton aria-label="GitHub">
                        Backend<GitHubIcon />
                    </IconButton>
                </Link>
                <Link href={frontendUrl} target="_blank" rel="noopener">
                    <IconButton aria-label="GitHub">
                        Frontend<GitHubIcon />
                    </IconButton>
                </Link>
            </CardActions>
        </Card>


    );
};

export default AboutProjectComponent;
