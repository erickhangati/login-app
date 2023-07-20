import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import Root from './components/Root';
import PageNotFound from './components/PageNotFound';
import Password from './components/Password';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Register from './components/Register';
import Reset from './components/Reset';
import UserName from './components/UserName';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<UserName />} />
      <Route path='/register' element={<Register />} />
      <Route path='/password' element={<Password />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/recovery' element={<Recovery />} />
      <Route path='/reset' element={<Reset />} />
      <Route path='*' element={<PageNotFound />} />
    </Route>
  )
);

const App = () => {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
};

export default App;
