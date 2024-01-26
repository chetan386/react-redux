import Cart from './components/Cart';
import Dashboard from './components/Dashboard';
import { createBrowserRouter,createRoutesFromElements,Route, RouterProvider } from 'react-router-dom';
import RootRoute from './components/RootRoute';
// json.strihngy, function passing onclick
function App() {
   
  const router = createBrowserRouter(createRoutesFromElements(
     <Route path='/' element={<RootRoute />} >
      <Route index element={<Dashboard />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
     </Route>  

  ))

  return (
    <div>
    <RouterProvider router = {router} />
    </div>
  );
}

export default App;
