/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import CaptionResultComponent from './components/AzureAIVisionComponents/CaptionResultComponent';
import DenseCaptionsResultComponent from './components/AzureAIVisionComponents/DenseCaptionsResultComponent';
import TagsResultComponent from './components/AzureAIVisionComponents/TagsResultComponent';
import ImageAnalysisUrl from './components/ImageAnalysisComponents/ImageAnalysisUrl';
import PeopleResultComponent from './components/AzureAIVisionComponents/PeopleResultComponent';

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Get started",
    key: "ImageAnalysis",
    icon: <Icon className="material-icons">rocket_launch</Icon>,
    route: "/",
    component: ImageAnalysisUrl, 
  },
  {
    type: "collapse",
    name: "Image Caption",
    key: "Caption",
    icon: <Icon className="material-icons" >subtitles</Icon>,
    route: "/CaptionResult",
    component: CaptionResultComponent, 
  },
  {
    type: "collapse",
    name: "Image Dense Captions",
    key: "DenseCaptions",
    icon: <Icon className="material-icons" >closed_caption_add</Icon>,
    route: "/DenseCaptionsResult",
    component: DenseCaptionsResultComponent, 
  },
  {
    type: "collapse",
    name: "Image tagging",
    key: "tagging",
    icon: <Icon className="material-icons">style</Icon>,
    route: "/ObjectsResult",
    component: TagsResultComponent, 
  },
  {
    type: "collapse",
    name: "People in the image",
    key: "people",
    icon: <Icon className="material-icons">groups</Icon>,
    route: "/peopleResult",
    component: PeopleResultComponent, 
  },
  {
    type: "divider",
    key: "divider-1",
  },
  {
    type: "collapse",
    name: "About the project",
    key: "aboutproject",
    icon: <Icon className="material-icons">biotech</Icon>,
    route: "/",
    component: ImageAnalysisUrl, 
  },
  {
    type: "collapse",
    name: "About me",
    key: "aboutme",
    icon: <Icon className="material-icons">mood</Icon>,
    route: "/",
    component: ImageAnalysisUrl, 
  }
];

export default routes;
