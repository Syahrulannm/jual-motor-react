import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Wa() {
  return (
    <a href="https://wa.me/6281234567890" target="_blank" className="fixed bottom-6 right-6 z-50 items-center flex flex-col">
      <p className="font-bold text-lg text-orange-100 mb-2 animate-pulse">Pesan Sekarang!</p>
      <img src="/img/whatsapp-logo.svg" alt="WhatsApp Logo" className="w-16 animate-pulse hover:scale-110 transition-smooth" />
    </a>
  );
}
