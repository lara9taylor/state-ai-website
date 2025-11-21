import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Auth } from './Auth';
import { Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { useNavigate, useLocation } from 'react-router-dom';

interface AuthWrapperProps {
  children: React.ReactNode;
}

export const AuthWrapper = ({ children }: AuthWrapperProps) => {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
      
      // If no session and on a protected route, redirect to auth
      if (!session) {
        navigate(`/auth?view=sign_in&returnTo=${encodeURIComponent(location.pathname)}`);
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (_event === 'SIGNED_IN') {
        toast.success('Successfully signed in!');
        // Get returnTo from URL and redirect if present
        const params = new URLSearchParams(window.location.search);
        const returnTo = params.get('returnTo');
        if (returnTo) {
          navigate(returnTo);
        }
      } else if (_event === 'SIGNED_OUT') {
        toast.success('Successfully signed out!');
        navigate('/');
      } else if (_event === 'USER_UPDATED') {
        setSession(session);
      }
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, [navigate, location]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 text-[#19FF7F] animate-spin" />
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return <>{children}</>;
};