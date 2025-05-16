
import { useState, useRef, useEffect } from "react";
import { MessageCircle, MessageSquare } from "lucide-react";

const quickQuestions = [
  { 
    label: "I'd like to collaborate!", 
    message: "Hello Dr. Kareithi, I'm interested in collaborating with you." 
  },
  { 
    label: "I have a research enquiry.", 
    message: "Hi! I have a research-related enquiry and would appreciate your input." 
  },
  { 
    label: "I'm seeking mentorship.", 
    message: "Hello Dr. Kareithi, would you consider mentoring me on my academic journey?" 
  },
  { 
    label: "Other", 
    message: "Hi! I came across your website and would like to connect." 
  }
];

const whatsappNumber = "5822030835"; // international number format without plus or spaces

const WhatsAppBot = () => {
  const [open, setOpen] = useState(false);
  const botRef = useRef<HTMLDivElement | null>(null);

  // Close bot when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (open && botRef.current && !botRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClick);
    }
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  // Play "slide up" animation
  const botBoxAnim = open ? "animate-[slide-in-right_0.4s_ease]" : "";

  // Button animation grow-on-hover
  return (
    <div>
      {/* Floating WhatsApp bot button */}
      <button
        className={`
          fixed bottom-6 right-6 z-[101]
          bg-green-600 text-white rounded-full p-4 shadow-2xl
          hover:scale-110 transition-all
          animate-pulse
          flex items-center justify-center
        `}
        aria-label="Chat with me on WhatsApp"
        onClick={() => setOpen((o) => !o)}
        style={{ boxShadow: "0 8px 32px 0 rgba(34,197,94,0.16)" }}
      >
        <MessageCircle size={28} />
      </button>

      {/* Chatbot popup */}
      {open && (
        <div
          ref={botRef}
          className={`
            fixed bottom-24 right-8 z-[102] max-w-xs w-full
            bg-white border-2 border-green-600 rounded-2xl shadow-2xl
            ${botBoxAnim}
            animate-fade-in flex flex-col
          `}
          style={{ minHeight: '280px', boxShadow: "0 8px 48px 0 rgba(34,197,94,0.15)" }}
        >
          {/* WhatsApp style header */}
          <div className="bg-green-600 text-white rounded-t-2xl px-4 py-3 flex items-center gap-2">
            <MessageSquare size={22} className="text-green-300" />
            <span className="font-semibold text-base">Chat with Me</span>
          </div>
          <div className="p-4 flex-1">
            <p className="mb-2 text-gray-700 font-medium">How can I help you?</p>
            <div className="space-y-2">
              {quickQuestions.map((q) => (
                <button
                  key={q.label}
                  onClick={() => {
                    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(q.message)}`;
                    window.open(url, "_blank");
                  }}
                  className="w-full py-2 px-4 bg-green-100 hover:bg-green-200 text-green-800 font-medium rounded transition"
                >
                  {q.label}
                </button>
              ))}
            </div>
          </div>
          <button
            className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 transition text-xl"
            aria-label="Close"
            onClick={() => setOpen(false)}
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default WhatsAppBot;
