
import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '+5822030835';

  const handleChatOpen = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      const whatsappURL = `https://wa.me/${phoneNumber}?text=Hello%20Dr.%20Kareithi,%20I%20visited%20your%20website%20and%20would%20like%20to%20connect.`;
      window.open(whatsappURL, '_blank');
    }
  };

  return (
    <button 
      onClick={handleChatOpen}
      className="whatsapp-button animate-pulse hover:animate-none"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </button>
  );
};

export default WhatsAppChat;
