import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import QuizLayout from "@/components/QuizLayout";

const QuizName = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  return (
    <QuizLayout progress={80}>
      <h1 className="text-xl font-bold text-foreground mb-2 text-center">
        Qual é o seu nome?
      </h1>
      <p className="text-muted-foreground text-sm mb-6 text-center">
        Para personalizarmos sua experiência.
      </p>

      <Input
        placeholder="Seu primeiro nome"
        value={name}
        onChange={(e) => setName(e.target.value.slice(0, 50))}
        className="mb-6 py-6 text-base rounded-xl"
      />

      <Button
        size="lg"
        className="w-full text-base font-semibold py-6 rounded-full bg-gradient-to-r from-primary to-[hsl(270,80%,60%)] hover:opacity-90 transition-opacity"
        onClick={() => navigate("/quiz/6")}
      >
        Continuar
      </Button>
    </QuizLayout>
  );
};

export default QuizName;
