import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// New imports
import { Layout } from './components/Layout.tsx';

import { selectIsRefreshing } from './redux/auth/selectors.ts';
import { refreshUser } from './redux/auth/operations.ts';
import { LocationProvider } from './components/LocationProvider/LocationProvider.jsx';
import { RoutesWithAnimation } from './components/RoutesWithAnimation/RoutesWithAnimation.tsx';

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  // console.log('isRefreshing', isRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Layout>
      <LocationProvider>
        <RoutesWithAnimation />
      </LocationProvider>
    </Layout>
  );
}
{
  /* <Layout>
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route
    path="/register"
    element={
      <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
    }
  />
  <Route
    path="/login"
    element={
      <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
    }
  />
  <Route
    path="/tasks"
    element={
      <PrivateRoute redirectTo="/login" component={<TasksPage />} />
    }
  />
</Routes>
</Layout> */
}
export default App;
