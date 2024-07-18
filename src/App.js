
import './App.css';
import React, { useState } from 'react';
import ProfileView from './Components/Profile/ProfileView';
import ProfileEdit from './Components/Profile/ProfileEdit';
import CaptionResultComponent from './Components/AzureAIVision/CaptionResultComponent';
import DenseCaptionsResultComponent from './Components/AzureAIVision/DenseCaptionsResultComponent';
import ObjectsResultComponent from './Components/AzureAIVision/ObjectsResultComponent';
import PeopleResultComponent from './Components/AzureAIVision/PeopleResultComponent';
import ReadResultComponent from './Components/AzureAIVision/ReadResultComponent';
import SmartCropsResultComponent from './Components/AzureAIVision/SmartCropsResultComponent';
import TagsResultComponent from './Components/AzureAIVision/TagsResultComponent';

import result from './Mock/result.js';

const myProfile = require('./Data/ProfileSampleData');

function App() {
  
    const [profile, setProfile] = useState(myProfile);
    const [isEditing, setIsEditing] = useState(false);
    const [showprofile, setShowProfile] = useState(false);
    const [showCaptionResult, setShowCaptionResult] = useState(false);
    const [showDenseCaptionsResult, setShowDenseCaptionsResult] = useState(false);
    const [showObjectsResult, setShowObjectsResult] = useState(false);
 


    const handleSave = (updatedProfile) => {
      setProfile(updatedProfile);
      setIsEditing(false);
    };

    const toggleShowCaptionResult = () => setShowCaptionResult(!showCaptionResult);
    const toggleShowDenseCaptionsResult = () => setShowDenseCaptionsResult(!showDenseCaptionsResult);
    const toggleShowObjectsResult = () => setShowObjectsResult(!showObjectsResult);
    const handleShowProfile = () => setShowProfile(!showprofile);
  
    return (
      <>
        <div className="container">
          <button onClick={toggleShowCaptionResult} style={{margin: '10px', padding: '10px'}}>
            {showCaptionResult ? 'Hide Caption Result' : 'Show Caption Result'}
          </button>
          
  
          <button onClick={toggleShowDenseCaptionsResult} style={{margin: '10px', padding: '10px'}}>
            {showDenseCaptionsResult ? 'Hide Dense Captions Result' : 'Show Dense Captions Result'}
          </button>
          
  
          <button onClick={toggleShowObjectsResult} style={{margin: '10px', padding: '10px'}}>
            {showObjectsResult ? 'Hide Objects Result' : 'Show Objects Result'}
          </button>
          
        
          <button onClick={handleShowProfile} style={{margin: '10px', padding: '10px'}}>
            {showprofile ? 'Hide Profile' : 'Show Profile'}
          </button>

          {showCaptionResult && <CaptionResultComponent captionResult={result.captionResult} />}
          {showDenseCaptionsResult && <DenseCaptionsResultComponent denseCaptionsResult={result.denseCaptionsResult} />}
          {showObjectsResult && <ObjectsResultComponent objectsResult={result.objectsResult} />}
          {showprofile && <ProfileView profile={profile} />} 
            
        </div>
      </>
    );
  };
  
  export default App;