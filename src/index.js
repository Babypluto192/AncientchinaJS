import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"
import Homepage from "./pages/Homepage";
import Phylosophia from "./pages/Phylosophia";
import Religia from "./pages/Religia";
import Archeticture from "./pages/Archeticture";
import Dinasty from "./pages/Dinasty";
import Dinasty2 from "./pages/Dinasty2";
import Art from "./pages/Art";
import History from "./pages/History";
import InteresnieFacti from "./pages/IntersnieFacti";
import Video from "./pages/Video";
import Ernar from "./pages/Ernar"


const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        errorElement: <div><h1>EROR 404 </h1></div>
    },
    {
        path: "history",
        element: <History />,
    }, {
        path: "phylosophia",
        element: <Phylosophia />,
    }, {
        path: "religia",
        element: <Religia />,
    },{
        path: "architecture",
        element: <Archeticture />,
    }, {
        path: "dinasty",
        element: <Dinasty />,
    }, {
        path: "dinasty2",
        element: <Dinasty2 />,
    }, {
        path: "art",
        element: <Art />,
    }, {
        path: "facti",
        element: <InteresnieFacti/>,
    },
    {
        path: "video",
        element: <Video/>,
    }, {
        path: "ernarabishev",
        element: <Ernar/>,
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
    <App />


  </React.StrictMode>
);

