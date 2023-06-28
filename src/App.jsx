import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { SignUp } from "./pages";

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
          <div className="w-full h-full bg-green-50">
            {/* <Navbar /> */}
            <Outlet />
          </div>
        </div>
      </>
    ),
    children: [
      {
        path: "/",
        element: <SignUp />,
      },
    ],
  },
]);

export default App;
