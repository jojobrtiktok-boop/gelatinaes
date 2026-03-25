import logoMounjaro from "@/assets/logo-mounjaro.png";
import gelatinaBowl from "@/assets/gelatina-bowl.png";
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
          className="w-40 mb-8"
          loading="eager"
          decoding="async"
        />

        {/* Product Image */}
        <div className="bg-secondary/50 rounded-2xl p-4 mb-8 w-48 h-48 flex items-center justify-center">
          <img
            src={gelatinaBowl}
            alt="Gelatina Mounjaro"
            className="w-36 h-36 object-contain"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* Headline */}
        <h1 className="text-2xl font-bold text-foreground mb-2 leading-tight text-center">
          Gelatina Mounjaro
        </h1>
        <p className="text-primary font-semibold text-lg mb-4 text-center">
          Para perder até 12 kg em 30 dias!
        </p>

        {/* Subheadline */}
        <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
          Descubra como ativar seu metabolismo e perder até{" "}
          <strong className="text-foreground">12kg em 30 dias</strong> com a{" "}
          <strong className="text-foreground">Gelatina Mounjaro</strong>!
        </p>

        {/* CTA Button */}
        <Button
          size="lg"
          className="w-full text-base font-semibold py-6 rounded-full bg-green-600 hover:bg-green-700 transition-colors text-white"
          onClick={() => navigate("/quiz")}
        >
          Quero saber se funciona para mim! 🍒
        </Button>

        {/* Limited Spots */}
        <p className="text-xs text-muted-foreground mt-4 mb-6 font-medium">
          Aproveite as vagas são limitadas.
        </p>

        {/* Social Proof */}
        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <span>✓ 127.000+ mulheres</span>
          <span>·</span>
          <span>✓ 100% Natural</span>
        </div>
      </div>
    </div>
  );
};

export default Index;
