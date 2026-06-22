import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Lock, User, ArrowRight, AlertCircle, CheckCircle, Eye, EyeOff } from 'lucide-react';

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

const forgotSchema = z.object({
  email: z.string().email('Please enter a valid email'),
});

type LoginFormData = z.infer<typeof loginSchema>;
type RegisterFormData = z.infer<typeof registerSchema>;
type ForgotFormData = z.infer<typeof forgotSchema>;

export function Auth() {
  const [mode, setMode] = useState<'login' | 'register' | 'forgot'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const registerForm = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const forgotForm = useForm<ForgotFormData>({
    resolver: zodResolver(forgotSchema),
  });

  const handleLogin = async (data: LoginFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Login:', data);
      setSubmitStatus('success');
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRegister = async (data: RegisterFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Register:', data);
      setSubmitStatus('success');
      registerForm.reset();
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleForgot = async (data: ForgotFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Forgot:', data);
      setSubmitStatus('success');
      forgotForm.reset();
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const switchMode = (newMode: 'login' | 'register' | 'forgot') => {
    setMode(newMode);
    setSubmitStatus('idle');
    loginForm.reset();
    registerForm.reset();
    forgotForm.reset();
  };

  return (
    <div className="min-h-screen bg-background dark:bg-secondary flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <Link to="/" className="inline-block">
            <span className="text-3xl font-bold gradient-text">AM</span>
          </Link>
          <h1 className="mt-4 text-2xl font-bold text-text-primary dark:text-white">
            {mode === 'login' && 'Welcome Back'}
            {mode === 'register' && 'Create Account'}
            {mode === 'forgot' && 'Reset Password'}
          </h1>
          <p className="mt-2 text-text-secondary">
            {mode === 'login' && 'Sign in to access your account'}
            {mode === 'register' && 'Join our community today'}
            {mode === 'forgot' && 'Enter your email to reset your password'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
        >
          <AnimatePresence mode="wait">
            {submitStatus === 'success' && mode === 'forgot' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-100 dark:bg-green-900/20 rounded-xl text-green-600 dark:text-green-400 flex items-center space-x-2"
              >
                <CheckCircle className="w-5 h-5" />
                <span>Password reset link sent to your email!</span>
              </motion.div>
            )}

            {mode === 'login' && (
              <motion.form
                key="login"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={loginForm.handleSubmit(handleLogin)}
                className="space-y-5"
              >
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      {...loginForm.register('email')}
                      type="email"
                      placeholder="you@example.com"
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary text-text-primary dark:text-white"
                    />
                  </div>
                  {loginForm.formState.errors.email && (
                    <p className="mt-1 text-sm text-error flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{loginForm.formState.errors.email.message}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      {...loginForm.register('password')}
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      className="w-full pl-10 pr-12 py-3 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary text-text-primary dark:text-white"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {loginForm.formState.errors.password && (
                    <p className="mt-1 text-sm text-error flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{loginForm.formState.errors.password.message}</span>
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2 text-sm text-text-secondary">
                    <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                    <span>Remember me</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => switchMode('forgot')}
                    className="text-sm text-primary hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary inline-flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Sign In</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-center text-sm text-text-secondary">
                  Don't have an account?{' '}
                  <button
                    type="button"
                    onClick={() => switchMode('register')}
                    className="text-primary hover:underline font-medium"
                  >
                    Sign up
                  </button>
                </p>
              </motion.form>
            )}

            {mode === 'register' && (
              <motion.form
                key="register"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={registerForm.handleSubmit(handleRegister)}
                className="space-y-5"
              >
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      {...registerForm.register('name')}
                      type="text"
                      placeholder="John Doe"
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary text-text-primary dark:text-white"
                    />
                  </div>
                  {registerForm.formState.errors.name && (
                    <p className="mt-1 text-sm text-error flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{registerForm.formState.errors.name.message}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      {...registerForm.register('email')}
                      type="email"
                      placeholder="you@example.com"
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary text-text-primary dark:text-white"
                    />
                  </div>
                  {registerForm.formState.errors.email && (
                    <p className="mt-1 text-sm text-error flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{registerForm.formState.errors.email.message}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      {...registerForm.register('password')}
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Create a password"
                      className="w-full pl-10 pr-12 py-3 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary text-text-primary dark:text-white"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {registerForm.formState.errors.password && (
                    <p className="mt-1 text-sm text-error flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{registerForm.formState.errors.password.message}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      {...registerForm.register('confirmPassword')}
                      type="password"
                      placeholder="Confirm your password"
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary text-text-primary dark:text-white"
                    />
                  </div>
                  {registerForm.formState.errors.confirmPassword && (
                    <p className="mt-1 text-sm text-error flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{registerForm.formState.errors.confirmPassword.message}</span>
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary inline-flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Create Account</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-center text-sm text-text-secondary">
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => switchMode('login')}
                    className="text-primary hover:underline font-medium"
                  >
                    Sign in
                  </button>
                </p>
              </motion.form>
            )}

            {mode === 'forgot' && (
              <motion.form
                key="forgot"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={forgotForm.handleSubmit(handleForgot)}
                className="space-y-5"
              >
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      {...forgotForm.register('email')}
                      type="email"
                      placeholder="you@example.com"
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary text-text-primary dark:text-white"
                    />
                  </div>
                  {forgotForm.formState.errors.email && (
                    <p className="mt-1 text-sm text-error flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{forgotForm.formState.errors.email.message}</span>
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary inline-flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Reset Link</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => switchMode('login')}
                  className="w-full text-center text-sm text-primary hover:underline"
                >
                  Back to sign in
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
