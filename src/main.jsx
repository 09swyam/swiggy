import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css";
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import Body from './components/Body.jsx';
import About from './components/About.jsx'; 
import App from './App.jsx'
import Error from './components/Error.jsx';
import MenuCard from './components/MenuCard.jsx';
import Cart from './components/Cart.jsx';

const router = createBrowserRouter([
  {
    path : "/",
    element : <App />,
    children : [
      {
        path : "/",
        element : <Body />
      },
      {
        path : "/about",
        element : <About />
      },
      {
        path : "/menu/:id",
        element : <MenuCard />
      },
      {
        path: "/cart",
        element: <Cart />,
      }
    ],
    errorElement : <Error />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
