import { useEffect, useState } from 'react';
import { Train } from 'lucide-react';

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy">
      <div className="text-center">
        <div className="relative">
          <Train className="h-16 w-16 text-primary animate-pulse mx-auto mb-4" />
          <div className="absolute -bottom-2 left-0 right-0 h-1 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-primary animate-[slide_1.5s_ease-in-out_infinite]" 
                 style={{
                   animation: 'slide 1.5s ease-in-out infinite',
                 }}
            />
          </div>
        </div>
        <p className="text-white mt-8 text-lg font-medium">Loading Excellence...</p>
      </div>
      <style>{`
        @keyframes slide {
          0% { width: 0%; margin-left: 0%; }
          50% { width: 100%; margin-left: 0%; }
          100% { width: 0%; margin-left: 100%; }
        }
      `}</style>
    </div>
  );
};

export default Loader;
