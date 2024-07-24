
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
import ImageAnalysisUrl from './components/ImageAnalysisComponents/ImageAnalysisUrl';
// Images
import brandWhite from "assets/images/logo-ct.png";
import brandDark from "assets/images/logo-ct-dark.png";
// Material Dashboard 2 React Dark Mode themes
import themeDark from "assets/theme-dark";
// Material Dashboard 2 React example components
import Sidenav from "examples/Sidenav";
// Material Dashboard 2 React routes
import routes from "routes";
import ImageDisplay from './components/ShowDataComponents/ImageDisplay';
import AboutMeComponent from './components/AboutComponents/AboutMeComponent'
import AboutProjectComponent from 'components/AboutComponents/AboutProjectComponent';

function App() {

  const [analysisResult, setAnalysisResult] = useState(null);
  const [displayImageUrl, setDisplayImageUrl] = useState('');
  const [showImage, setShowImage] = useState(true);
  const [about, setAbout] = useState('');
  const [currentBoundingBox, setCurrentBoundingBox] = useState(null);
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
  const location = useLocation();
  const me = {
    imageUrl: '/about_me.jpg',
    name: 'Moustafa Attia',
    description: 'A Software engineer .Net/C# with over 9 years of experience in software development using various technologies and frameworks in both backend and frontend such as Node JS, React, SQL Server, Git, Azure services and CI/CD.',
    linkedinUrl: 'https://www.linkedin.com/in/mustafa1090',
    githubUrl: 'https://github.com/Moustafaa91'
  };

  useEffect(() => {
    const currentRoute = routes.find(route => route.route === location.pathname);
    if (currentRoute) {
      if (currentRoute.key === "aboutme") {
        setShowImage(false);
      } else {
        setShowImage(true);
      }
    }
  }, [location.pathname]);

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
              element={<ImageAnalysisUrl setAnalysisResult={handleAnalysisResult} setDisplayImageUrl={setDisplayImageUrl} />}
              key={route.key}
            />
          );
        }
        if (route.key === "aboutme" || route.key === "aboutproject") {
          return null;
        }
        else {
          return (
            <Route
              exact
              path={route.route}
              element={<Component analysisResult={analysisResult} setCurrentBoundingBox={setCurrentBoundingBox} />}
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



  return (
    <>
      <ThemeProvider theme={darkMode ? themeDark : theme}>
        <CssBaseline />


        <Sidenav
          color={sidenavColor}
          brand={brandWhite}
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
          height="100%"
          bgColor="tranparent"
          shadow="sm"
          position="absolute"
          left="30rem"
          zIndex={99}
          color="dark" >
          {showImage ? (
           <ImageDisplay imageUrl={displayImageUrl} boundingBox={currentBoundingBox} />
          ) : (
            <AboutProjectComponent />
            
          )}
          <MDBox display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            bgColor="transparent"
            position="absolute"
            zIndex={-1}
            top="55%"
            color="dark" >
            <Routes>{getRoutes(routes)}</Routes>
          </MDBox>
        </MDBox>

      </ThemeProvider>


    </>
  );
};

export default App;