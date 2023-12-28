import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import { AboutUs, ContactUs, Home, Properties, Services, PropertyDetails } from "./pages";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<AboutUs />} />
          <Route path='properties' element={<Properties />} />
          <Route path='services' element={<Services />} />
          <Route path='contact' element={<ContactUs />} />
          <Route path='property-details/:id' element={<PropertyDetails />} />
      </Route>
    )
  )
  return <RouterProvider router={router} />
}

export default App;
