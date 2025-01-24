import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// New imports
import { Layout } from './Layout.tsx';
import { selectIsRefreshing } from '../redux/auth/selectors.ts';
import { refreshUser } from '../redux/auth/operations.ts';
import { LocationProvider } from './LocationProvider/LocationProvider.jsx';
import { RoutesWithAnimation } from './RoutesWithAnimation/RoutesWithAnimation.tsx';

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b
      style={{
        textAlign: 'center',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      Refreshing user...
    </b>
  ) : (
    <Layout>
      <LocationProvider>
        <RoutesWithAnimation />
      </LocationProvider>
    </Layout>
  );
}

export default App;
