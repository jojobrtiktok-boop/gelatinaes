import QuizSingleSelect from "@/components/QuizSingleSelect";

const QuizGestacoes = () => (
  <QuizSingleSelect
    progress={40}
    title="Quantas gestações você já teve?"
    subtitle="Isso ajuda a personalizar seu plano."
    options={[
      { label: "Nunca estive grávida", emoji: "🚫" },
      { label: "1 gestação", emoji: "1️⃣" },
      { label: "2 gestações", emoji: "2️⃣" },
      { label: "3 ou mais gestações", emoji: "3️⃣" },
    ]}
    nextRoute="/quiz/15"
  />
);

export default QuizGestacoes;
