import semrushLogo from "@/assets/logos/semrush.png";
import localDominatorLogo from "@/assets/logos/local-dominator.jpg";
import brightlocalLogo from "@/assets/logos/brightlocal.webp";
import ahrefsLogo from "@/assets/logos/ahrefs.webp";
import claudeLogo from "@/assets/logos/claude.png";
import geminiLogo from "@/assets/logos/gemini.png";
import chatgptLogo from "@/assets/logos/chatgpt.png";

const PoweredBy = () => {
  const logos = [
    { name: "Semrush", src: semrushLogo },
    { name: "Ahrefs", src: ahrefsLogo },
    { name: "BrightLocal", src: brightlocalLogo },
    { name: "Local Dominator", src: localDominatorLogo },
    { name: "ChatGPT", src: chatgptLogo },
    { name: "Claude", src: claudeLogo },
    { name: "Gemini", src: geminiLogo },
  ];

  return (
    <section className="py-12 bg-transparent">
      <div className="container mx-auto px-6">
        <p className="text-center text-xs text-muted-foreground uppercase tracking-widest mb-8">
          Powered By
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.name}
              className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PoweredBy;
