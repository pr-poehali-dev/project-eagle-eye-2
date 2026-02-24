import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <footer
      className="px-6 md:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
      style={{ background: "#060c18", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      {/* Copyright */}
      <p className="text-white/40 text-xs">
        © {new Date().getFullYear()} Стрельцов Digital
      </p>

      {/* Social icons */}
      <div className="flex gap-3 items-center">
        {[
          { icon: "Facebook", label: "Facebook" },
          { icon: "Instagram", label: "Instagram" },
          { icon: "Send", label: "Telegram" },
          { icon: "MessageCircle", label: "VK" },
        ].map((s) => (
          <a
            key={s.label}
            href="#"
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#00aaff] hover:text-[#00aaff] transition-all duration-300"
          >
            <Icon name={s.icon as "Facebook"} size={16} />
          </a>
        ))}
      </div>
    </footer>
  );
}
