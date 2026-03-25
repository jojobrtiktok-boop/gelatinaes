import QuizSingleSelect from "@/components/QuizSingleSelect";

const QuizCorpoSonhos = () => (
  <QuizSingleSelect
    progress={97}
    title="Você se compromete a aplicar o protocolo por pelo menos 1 semana para poder ver os resultados?"
    subtitle="PARA LIBERAR SEU PLANO, PRECISO SABER:"
    options={[
      { label: "Sim me comprometo!", emoji: "😊" },
      { label: "Quero começar hoje", emoji: "😊" },
      { label: "Não sei...", emoji: "😐" },
    ]}
    nextRoute="/quiz/22"
  />
);

export default QuizCorpoSonhos;
