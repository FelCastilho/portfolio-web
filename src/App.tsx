import { createBrowserRouter } from "react-router-dom";

import Home from './home';
import Certificate from "./certificate";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/certificados',
    element: <Certificate/>
  },
])

export { router };

