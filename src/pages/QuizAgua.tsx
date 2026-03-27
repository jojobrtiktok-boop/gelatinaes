import QuizSingleSelect from "@/components/QuizSingleSelect";

const QuizAgua = () => (
  <QuizSingleSelect
    progress={86}
    title="¿Cuántas horas duermes por noche?"
    subtitle="El sueño es esencial para adelgazar."
    options={[
      { label: "Menos de 5 horas", emoji: "😴" },
      { label: "5 a 7 horas", emoji: "🛏️" },
      { label: "7 a 9 horas", emoji: "😊" },
      { label: "Más de 9 horas", emoji: "🏢" },
    ]}
    nextRoute="/quiz/18"
  />
);

export default QuizAgua;
