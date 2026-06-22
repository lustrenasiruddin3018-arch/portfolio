import { useScrollProgress } from '../hooks/useScrollProgress';

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-gray-200 dark:bg-gray-700">
      <div
        className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
