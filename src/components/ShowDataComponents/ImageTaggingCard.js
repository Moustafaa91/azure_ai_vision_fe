import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ImageTaggingCard = ({title, text, url, listData}) => {
    
    const uniqueListData = listData
    ? listData.filter((item, index, self) => 
        index === self.findIndex((t) => (
          t.name === item.name
        ))
      )
    : [];

    return (
    
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Divider />

        {uniqueListData.length > 0 ? 
        (<nav style={{ maxHeight: '250px', overflow: 'auto' }} >
        <List>
            {uniqueListData.map((item, index) => (
                <ListItem disablePadding key={index}>
                <ListItemButton>
                    <ListItemText
                      primary={
                        <React.Fragment>
                          <Typography variant="body1">{item.name}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            Confidence score: {(item.confidence * 100).toFixed(2)}%
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItemButton>
              </ListItem>
            ))}
        </List>
      </nav>
        ) : (
            <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary= {text} />
            </ListItemButton>
          </ListItem>
        </List>
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
}

export default ImageTaggingCard;
