import { useContext } from 'react';

import { AuthContext } from '@app/contexts/auth.context';

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth requeres AuthProvider');
  return context;
}

export default useAuth;
