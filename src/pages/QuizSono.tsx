import QuizSingleSelect from "@/components/QuizSingleSelect";

const QuizSono = () => (
  <QuizSingleSelect
    progress={55}
    title="Quantas horas você dorme por noite?"
    subtitle="O sono é essencial para o emagrecimento."
    options={[
      { label: "Menos de 5 horas", emoji: "🥱" },
      { label: "5 a 7 horas", emoji: "🛏️" },
      { label: "7 a 9 horas", emoji: "😊" },
      { label: "Mais de 9 horas", emoji: "😴" },
    ]}
    nextRoute="/quiz/17"
  />
);

export default QuizSono;
