import logoMounjaro from "@/assets/logo-mounjaro.png";
import heroInicio from "@/assets/hero-inicio.png";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen items-center justify-center bg-secondary/30">
      <div className="w-full max-w-md mx-auto px-6 py-10 flex flex-col items-center text-center">
        {/* Logo */}
        <img
          src={logoMounjaro}
          alt="Mounjaro Gelatina"
          className="w-64 mb-8"
          loading="eager"
          decoding="async"
        />

        {/* Hero Image */}
        <div className="w-full mb-6 rounded-2xl overflow-hidden">
          <img
            src={heroInicio}
            alt="Gelatina Mounjaro"
            className="w-full object-contain"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* Headline */}
        <h1 className="text-2xl font-bold text-foreground mb-2 leading-tight text-center">
          Gelatina Mounjaro
        </h1>
        <p className="text-primary font-semibold text-lg mb-4 text-center">
          ¡Para perder hasta 12 kg en 30 días!
        </p>

        {/* Subheadline */}
        <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
          Descubre cómo activar tu metabolismo y perder hasta{" "}
          <strong className="text-foreground">12 kg en 30 días</strong> con la{" "}
          <strong className="text-foreground">Gelatina Mounjaro</strong>!
        </p>

        {/* CTA Button */}
        <Button
          size="lg"
          className="w-full text-base font-semibold py-6 rounded-full bg-green-600 hover:bg-green-700 transition-colors text-white"
          onClick={() => navigate("/quiz")}
        >
          ¡Quiero saber si funciona para mí! 🍒
        </Button>

        {/* Limited Spots */}
        <p className="text-xs text-muted-foreground mt-4 mb-6 font-medium">
          Aprovecha, los cupos son limitados.
        </p>

        {/* Social Proof */}
        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <span>✓ 127.000+ mujeres</span>
          <span>·</span>
          <span>✓ 100% Natural</span>
        </div>
      </div>
    </div>
  );
};

export default Index;
