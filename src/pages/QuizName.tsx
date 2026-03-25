import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import QuizLayout from "@/components/QuizLayout";

const QuizName = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handleContinue = () => {
    if (name.trim()) {
      localStorage.setItem("userName", name.trim());
      navigate("/quiz/6");
    }
  };

  return (
    <QuizLayout progress={45}>
      <h1 className="text-xl font-bold text-foreground mb-2 text-center">
        Qual é o seu nome?
      </h1>
      <p className="text-muted-foreground text-sm mb-8 text-center">
        Para personalizarmos sua experiência.
      </p>

      <Input
        placeholder="Seu primeiro nome"
        value={name}
        onChange={(e) => setName(e.target.value.slice(0, 50))}
        className="mb-8 py-6 text-base rounded-xl border-primary/30 focus:border-primary"
      />

      <Button
        size="lg"
        disabled={!name.trim()}
        className="w-full text-base font-semibold py-6 rounded-full bg-gradient-to-r from-primary to-[hsl(270,80%,60%)] hover:opacity-90 transition-opacity disabled:opacity-50"
        onClick={handleContinue}
      >
        Continuar
      </Button>
    </QuizLayout>
  );
};

export default QuizName;
