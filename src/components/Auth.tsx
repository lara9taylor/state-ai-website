import { Auth as SupabaseAuth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '../lib/supabase';
import { useState } from 'react';
import { Mail, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const Auth = () => {
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const returnTo = searchParams.get('returnTo') || '/';
  const isSignIn = searchParams.get('view') === 'sign_in';

  const handleResendEmail = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email: email,
      });

      if (error) throw error;
      toast.success('Confirmation email resent successfully!');
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen pt-32 pb-32 px-4">
        <div className="max-w-md mx-auto p-8 bg-gradient-to-br from-[#4B007F]/80 to-[#A23ACD]/80 rounded-xl backdrop-blur-lg border border-white/10">
          <div className="text-center">
            <Mail className="w-16 h-16 text-[#19FF7F] mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">Check Your Email</h2>
            <p className="text-white/80 mb-6">
              We've sent a confirmation email to <span className="text-[#19FF7F]">{email}</span>. 
              Please click the link in the email to verify your account.
            </p>
            <div className="space-y-4">
              <button
                onClick={handleResendEmail}
                disabled={loading}
                className="w-full px-4 py-2 bg-[#19FF7F] text-black rounded-md hover:bg-[#19FF7F]/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Resending...
                  </>
                ) : (
                  'Resend Confirmation Email'
                )}
              </button>
              <button
                onClick={() => navigate('/auth?view=sign_in')}
                className="w-full px-4 py-2 bg-white/10 text-white rounded-md hover:bg-white/20 transition-colors duration-200"
              >
                Go to Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-32 px-4">
      <div className="max-w-md mx-auto p-8 bg-gradient-to-br from-[#4B007F]/80 to-[#A23ACD]/80 rounded-xl backdrop-blur-lg border border-white/10">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          {isSignIn ? 'Welcome Back!' : 'Create Your Build-A-Bot Account'}
        </h2>
        <SupabaseAuth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#19FF7F',
                  brandAccent: '#FDC526',
                  inputBackground: 'rgba(255, 255, 255, 0.1)',
                  inputBorder: 'rgba(255, 255, 255, 0.2)',
                  inputText: 'white',
                  inputPlaceholder: 'rgba(255, 255, 255, 0.5)',
                  messageText: 'white',
                  messageBackground: 'rgba(255, 94, 0, 0.1)',
                  messageBorder: '#FF5E00',
                },
              },
            },
            style: {
              button: {
                borderRadius: '8px',
                height: '42px',
                fontSize: '16px',
              },
              input: {
                borderRadius: '8px',
                height: '42px',
                fontSize: '16px',
              },
              message: {
                borderRadius: '8px',
                padding: '12px',
              },
              container: {
                gap: '16px',
              },
              label: {
                color: 'white',
                marginBottom: '4px',
              },
              anchor: {
                color: '#19FF7F',
                fontSize: '14px',
                textAlign: 'center',
              },
            },
          }}
          providers={[]}
          onlyThirdPartyProviders={false}
          redirectTo={`${window.location.origin}/auth/callback?returnTo=${returnTo}`}
          onSubmit={(e) => {
            const emailInput = e.target.querySelector('input[type="email"]') as HTMLInputElement;
            if (emailInput) {
              setEmail(emailInput.value);
            }
          }}
          afterSignUp={() => {
            navigate(returnTo);
            toast.success('Account created successfully!');
          }}
          onError={(error) => {
            if (error.message.includes('invalid_credentials')) {
              toast.error('Invalid email or password. Please try again.');
            } else if (error.message.includes('user_already_exists')) {
              toast.error('An account with this email already exists. Please sign in instead.');
              // Redirect to sign in view after a short delay
              setTimeout(() => {
                navigate('/auth?view=sign_in' + (returnTo ? `&returnTo=${returnTo}` : ''));
              }, 1500);
            } else {
              toast.error(error.message);
            }
          }}
          view={searchParams.get('view') as any || 'sign_up'}
          localization={{
            variables: {
              sign_up: {
                email_label: 'Email',
                password_label: 'Password',
                button_label: 'Create Account',
                loading_button_label: 'Creating account...',
                social_provider_text: 'Sign up with {{provider}}',
                link_text: 'Already have an account? Sign in',
              },
              sign_in: {
                email_label: 'Email',
                password_label: 'Password',
                button_label: 'Sign In',
                loading_button_label: 'Signing in...',
                social_provider_text: 'Sign in with {{provider}}',
                link_text: 'Need an account? Create one',
              },
            },
          }}
          showLinks={true}
        />
      </div>
    </div>
  );
};

export { Auth }