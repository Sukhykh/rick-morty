import { Navigate } from 'react-router-dom';
import { AppRouter } from '@enums/router';

export const RedirectionConfig = () => {
	return <Navigate to={AppRouter.EPISODES} />
  }
