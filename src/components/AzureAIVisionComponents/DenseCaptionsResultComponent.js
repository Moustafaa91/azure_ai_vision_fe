import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const DenseCaptionsResultComponent = ({ analysisResult }) => {
  const denseCaptions = analysisResult?.denseCaptionsResult;

  function generate(element) {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

  return (
    <div style={{ maxHeight: '100%', maxWidth: '100%', overflowY: 'auto' }}>
      <h2>Dense Captions Result</h2>
      {denseCaptions ? (
        <List dense="true">
          {generate(
            <ListItem>
              <ListItemText
                primary="Single-line item- Single-line item- Single-line item"
                secondary='Secondary text'
                color="dark"
              />
            </ListItem>
          )}
        </List>
      ) : (
        <p>No dense captions result available.</p>
      )}
    </div>
  );
};

export default DenseCaptionsResultComponent;