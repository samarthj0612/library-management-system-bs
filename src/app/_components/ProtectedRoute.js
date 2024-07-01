// components/ProtectedRoute.js
import { useAuth } from '@/contexts/authContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/auth/login');
    }
  }, [user, router]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return children;
};

export default ProtectedRoute; 
