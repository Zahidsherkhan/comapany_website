import React from "react";
import Home from "./Pages/Home/Home";
import Categories from "./Pages/Categories/Categories";
import Become_a_Partner from "./Pages/Become A Partner/Become_a_Partner";
import Contact_us from "./Pages/Contact Us/Contact_us";
import Get_a_Quote from "./Pages/Get a Quote/Get_a_Quote";
import Header from "./Pages/Home/components/Header";
import Footer from "./Pages/Home/components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/Categories",
    element: (
      <div>
        <Header></Header>
        <Categories></Categories>
        <Footer></Footer>
      </div>
    ),
  },
  {
    path: "/Become_a_partner",
    element: (
      <div>
        <Header></Header>
        <Become_a_Partner></Become_a_Partner>
        <Footer></Footer>
      </div>
    ),
  },
  {
    path: "/Contact_us",
    element: (
      <div>
        <Header></Header>
        <Contact_us></Contact_us>
        <Footer></Footer>
      </div>
    ),
  },
  {
    path: "/Get_a_quote",
    element: (
      <div>
        <Header></Header>
        <Get_a_Quote></Get_a_Quote>
        <Footer></Footer>
      </div>
    ),
  },
]);
const App = () => {
  return (
    <div>
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
};

export default App;
