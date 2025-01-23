import { lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { RestrictedRoute } from '../../components/RestrictedRoute.tsx';
import { PrivateRoute } from '../../components/PrivateRoute.tsx';
//Lazy Loading Pages
const HomePage = lazy(() => import('../../pages/HomePage/HomePage.tsx'));
const RegisterPage = lazy(
  () => import('../../pages/RegisterPage/RegisterPage.tsx')
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage.tsx'));
const PhoneBookPage = lazy(
  () => import('../../pages/PhoneBookPage/PhoneBookPage.tsx')
);

export const RoutesWithAnimation = () => {
  const location = useLocation();

  return (
    <main>
      <Routes location={location} key={location.key}>
        <Route path='/' element={<HomePage />} />
        <Route
          path='/register'
          element={
            <RestrictedRoute
              redirectTo='/contacts'
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path='/login'
          element={
            <RestrictedRoute redirectTo='/contacts' component={<LoginPage />} />
          }
        />
        <Route
          path='/contacts'
          element={
            <PrivateRoute redirectTo='/login' component={<PhoneBookPage />} />
          }
        />
      </Routes>
    </main>
  );
};
