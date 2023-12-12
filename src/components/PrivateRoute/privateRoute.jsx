import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ Item }) => {
  const { signed } = useAuth();
  return signed ? <Item /> : <Navigate to='/login' />
};

PrivateRoute.propTypes = {
  Item: PropTypes.elementType.isRequired,
};

export default PrivateRoute;
