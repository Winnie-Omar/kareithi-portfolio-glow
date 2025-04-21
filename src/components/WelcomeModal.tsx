
import { useEffect, useState } from "react";

const WelcomeModal = () => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/30">
      <div className="bg-white border-2 border-pink-dark shadow-2xl rounded-2xl px-8 py-8 max-w-md text-center animate-scale-in">
        <h2 className="text-2xl font-playfair font-bold mb-4 text-pink-dark">Welcome!</h2>
        <p className="text-gray-800 font-inter mb-2">
          I'm delighted you're here. Explore my journey as a scholar, advocate, and leader in higher education.
        </p>
        <p className="text-pink mt-4 font-medium font-playfair">Dr. Wanjiru Kareithi</p>
      </div>
    </div>
  );
};

export default WelcomeModal;
