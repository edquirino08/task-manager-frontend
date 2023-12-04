import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ Item }) => {
    const signed = false;

    return signed ? <Item /> : <Navigate to='/login' />;
};

PrivateRoute.propTypes = {
  Item: PropTypes.elementType.isRequired,
};

export default PrivateRoute;
