import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Homepage } from "./pages";
// import SidebarCmp from "./components/sidebar/SidebarCmp";
// import { Navbar } from "./components/navbar";

const App = () => {
  return (
    // <Provider store={store}>
    <RouterProvider router={routes} />
    // </Provider>
  );
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <div className="font-[Nunito] flex">
          {/* <SidebarCmp /> */}
          <div className="w-full">
            {/* <Navbar /> */}
            <Outlet />
          </div>
        </div>
      </>
    ),
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
    ],
  },
]);

export default App;
