
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

=========================================================
*/
import React, { useState } from 'react';
import CaptionResultComponent from './components/AzureAIVisionComponents/CaptionResultComponent';
import DenseCaptionsResultComponent from './components/AzureAIVisionComponents/DenseCaptionsResultComponent';
import ObjectsResultComponent from './components/AzureAIVisionComponents/ObjectsResultComponent';
import PeopleResultComponent from './components/AzureAIVisionComponents/PeopleResultComponent';
import ReadResultComponent from './components/AzureAIVisionComponents/ReadResultComponent';
import SmartCropsResultComponent from './components/AzureAIVisionComponents/SmartCropsResultComponent';
import TagsResultComponent from './components/AzureAIVisionComponents/TagsResultComponent';
import ImageAnalysisUrl from './components/ImageAnalysisControls/ImageAnalysisUrl';
// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MDButton from "components/MDButton";
// Material Dashboard 2 React themes
import theme from "assets/theme";
import result from './Mock/result';


function App() {
    
    const [isEditing, setIsEditing] = useState(false);
    const [showprofile, setShowProfile] = useState(false);
    const [showCaptionResult, setShowCaptionResult] = useState(false);
    const [showDenseCaptionsResult, setShowDenseCaptionsResult] = useState(false);
    const [showObjectsResult, setShowObjectsResult] = useState(false);
    const [analysisResult, setAnalysisResult] = useState(null);

    const handleAnalysisResult = (result) => {
      setAnalysisResult(result);
    };

    const toggleShowCaptionResult = () => setShowCaptionResult(!showCaptionResult);
    const toggleShowDenseCaptionsResult = () => setShowDenseCaptionsResult(!showDenseCaptionsResult);
    const toggleShowObjectsResult = () => setShowObjectsResult(!showObjectsResult);
    const handleShowProfile = () => setShowProfile(!showprofile);
    
    
  
    return (
      <>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <div >
        <ImageAnalysisUrl onAnalysisResult={handleAnalysisResult} />
          <MDButton onClick={toggleShowCaptionResult} color="info">
            {showCaptionResult ? 'Hide Caption Result' : 'Show Caption Result'}
          </MDButton>
          
  
          <MDButton onClick={toggleShowDenseCaptionsResult} color="info">
            {showDenseCaptionsResult ? 'Hide Dense Captions Result' : 'Show Dense Captions Result'}
          </MDButton>
          
  
          <MDButton onClick={toggleShowObjectsResult} color="info">
            {showObjectsResult ? 'Hide Objects Result' : 'Show Objects Result'}
          </MDButton>

          {showCaptionResult && <CaptionResultComponent captionResult={result?.captionResult} />}
          {showDenseCaptionsResult && <DenseCaptionsResultComponent denseCaptionsResult={result?.denseCaptionsResult} />}
          {showObjectsResult && <ObjectsResultComponent objectsResult={result?.objectsResult} />}
            
        </div>
        </ThemeProvider>
      </>
    );
  };
  
  export default App;