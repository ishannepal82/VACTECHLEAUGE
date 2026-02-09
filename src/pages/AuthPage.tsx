import { useState } from 'react';
import { toast, Toaster } from 'sonner';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const DEMO_USER = {
    email: 'admin@breathemaps.com',
    password: 'password123'
  };

  const handleAuth = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const name = formData.get('name') as string;

    if (isLogin) {
      if (email === DEMO_USER.email && password === DEMO_USER.password) {
        toast.success('Login Successful! Redirecting...');
        localStorage.setItem('user', JSON.stringify({ email, name: 'Demo User' }));
        setTimeout(() => navigate('/dashboard'), 1500);
      } else {
        toast.error('Invalid credentials. Try: admin@breathemaps.com / password123');
      }
    } else {
      if (!name || !email || !password) {
        toast.warning('Please fill in all fields');
        return;
      }
      toast.success('Account created! Please sign in.');
      setIsLogin(true);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background text-text p-4">
      <Toaster position="top-center" richColors />
      
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 bg-white dark:bg-[#0c0e0b] rounded-3xl overflow-hidden shadow-2xl animate-fade-in-up">
        
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">
              {isLogin ? 'Welcome Back 🌿' : 'Join the Greenery 🍃'}
            </h2>
            <p className="text-text/60">
              {isLogin
                ? 'Sign in to access your clean route dashboard.'
                : 'Join the movement for a greener tomorrow.'}
            </p>
          </div>

          <form className="flex flex-col gap-4" onSubmit={handleAuth}>
            {!isLogin && (
              <div className="animate-fade-in-up">
                <label className="block text-sm font-medium mb-1.5 ml-1">Full Name</label>
                <input 
                  name="name"
                  type="text" 
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background border border-text/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-text"
                />
              </div>
            )}

            <div className="animate-fade-in-up [animation-delay:100ms]">
              <label className="block text-sm font-medium mb-1.5 ml-1">Email Address</label>
              <input 
                name="email"
                type="email" 
                placeholder="hello@breathemaps.com"
                required
                className="w-full px-4 py-3 rounded-xl bg-background border border-text/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-text"
              />
            </div>

            <div className="animate-fade-in-up [animation-delay:200ms]">
              <label className="block text-sm font-medium mb-1.5 ml-1">Password</label>
              <input 
                name="password"
                type="password" 
                placeholder="••••••••"
                required
                className="w-full px-4 py-3 rounded-xl bg-background border border-text/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-text"
              />
            </div>

            {isLogin && (
              <div className="flex justify-end">
                <button type="button" className="text-sm text-primary font-semibold hover:underline">Forgot Password?</button>
              </div>
            )}

            <button type="submit" className="w-full py-4 mt-2 bg-primary text-background font-bold rounded-xl shadow-lg shadow-primary/30 hover:brightness-110 transition-all hover:-translate-y-0.5 animate-fade-in-up [animation-delay:300ms]">
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-text/10"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white dark:bg-[#0c0e0b] px-2 text-text/40">Secure Access</span>
            </div>
          </div>

          <p className="text-center text-sm text-text/60">
            {isLogin ? "Don't have an account?" : "Already a member?"}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="ml-1 text-primary font-bold hover:underline"
            >
              {isLogin ? 'Sign Up' : 'Log In'}
            </button>
          </p>
        </div>

        <div className="hidden lg:block relative bg-secondary overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl" />
          
          <div className="relative h-full w-full flex flex-col items-center justify-center p-12 text-center">
            <div className="mb-8 animate-morph">
              <div className="w-64 h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 relative">
                <img 
                  src="https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?q=80&w=1000&auto=format&fit=crop" 
                  alt="Nature" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-text mb-4">Clean. Grow. Sustain.</h3>
            <p className="text-text/70 max-w-xs mx-auto italic font-light">
              "To plant a seed is to trust the future."
            </p>
            
            <div className="mt-12 flex items-center gap-2 opacity-30">
               <div className="w-8 h-8 bg-primary rounded-lg" />
               <span className="font-bold tracking-tighter text-text">BreatheMaps</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;