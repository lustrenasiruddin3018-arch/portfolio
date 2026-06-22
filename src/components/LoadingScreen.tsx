import { useState, useEffect } from 'react';
import { Code2 } from 'lucide-react';

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsComplete(true), 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  if (isComplete) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-secondary flex flex-col items-center justify-center transition-opacity duration-500">
      <div className="relative">
        <div className="absolute inset-0 animate-pulse-ring rounded-full border-2 border-primary opacity-50" />
        <div className="relative p-6 bg-secondary rounded-full">
          <Code2 className="w-12 h-12 text-primary" />
        </div>
      </div>
      <h2 className="mt-8 text-2xl font-bold text-white">Alex Morgan</h2>
      <p className="mt-2 text-gray-400">Loading portfolio...</p>
      <div className="mt-6 w-64 h-1 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-200"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
      <span className="mt-2 text-sm text-gray-500">{Math.min(Math.round(progress), 100)}%</span>
    </div>
  );
}
