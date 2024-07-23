
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

=========================================================
*/
import React, { useState, useEffect, useMemo } from 'react';
// react-router components
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// Material Dashboard 2 React themes
import theme from "assets/theme";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
// Material Dashboard 2 React contexts
import { useMaterialUIController, setMiniSidenav, setOpenConfigurator } from "context";
import ImageAnalysisUrl from './components/ImageAnalysisControls/ImageAnalysisUrl';
// Images
import brandWhite from "assets/images/logo-ct.png";
import brandDark from "assets/images/logo-ct-dark.png";
// Material Dashboard 2 React Dark Mode themes
import themeDark from "assets/theme-dark";
// Material Dashboard 2 React example components
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";
// Material Dashboard 2 React routes
import routes from "routes";

import exampleResult from './Mock/result';




function App() {

  const [showprofile, setShowProfile] = useState(false);
  const [showCaptionResult, setShowCaptionResult] = useState(false);
  const [showDenseCaptionsResult, setShowDenseCaptionsResult] = useState(false);
  const [showObjectsResult, setShowObjectsResult] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    direction,
    layout,
    openConfigurator,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  /*
  useEffect(() => {
    setAnalysisResult(exampleResult);
  }, []);*/

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }
      if (route.route) {
        const Component = route.component;
        if (route.key === "ImageAnalysis") {
          return (
            <Route
            exact
            path={route.route}
            element={<ImageAnalysisUrl analysisResult={analysisResult} setAnalysisResult={handleAnalysisResult} />}
            key={route.key}
          />
          );
        }
        else {
        return (
          <Route
            exact
            path={route.route}
            element={<Component analysisResult={analysisResult} />}
            key={route.key}
          />
        );
      }
      }
      return null;
    });


    const handleAnalysisResult = (result) => {
    setAnalysisResult(result);
  };

  const toggleShowCaptionResult = () => setShowCaptionResult(!showCaptionResult);
  const toggleShowDenseCaptionsResult = () => setShowDenseCaptionsResult(!showDenseCaptionsResult);
  const toggleShowObjectsResult = () => setShowObjectsResult(!showObjectsResult);
  const { pathname } = useLocation();



  return (
    <>
      <ThemeProvider theme={darkMode ? themeDark : theme}>
        <CssBaseline />


        <Sidenav
          color={sidenavColor}
          brand= {brandWhite}
          brandName="AZURE AI VISION"
          routes={routes}
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
        />

        <MDBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="60rem"
          height="60rem"
          bgColor="tranparent"
          shadow="sm"
          borderRadius="10%"
          position="absolute"
          left="30rem"
          top="1rem"
          zIndex={99}
          color="dark"
          
        >
           <Routes>{getRoutes(routes)}</Routes>
        </MDBox>

      </ThemeProvider>
    </>
  );
};

export default App;