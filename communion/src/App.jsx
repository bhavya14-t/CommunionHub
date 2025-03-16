import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Home } from "./pages/Home";
import {About} from "./pages/About";
import { EventPage } from "./pages/EventPage";
// import { EventForm } from "./components/UI/EventForm";
import { AppLayout } from "./components/layout/AppLayout";
// import { eventsData } from "./components/utils/eventsData";
// import { Card } from "./components/UI/Card";
import "./App.css";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/events",
          element: <EventPage />,
        },
        
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
