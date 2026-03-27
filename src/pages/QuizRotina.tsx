import QuizSingleSelect from "@/components/QuizSingleSelect";

const QuizRotina = () => (
  <QuizSingleSelect
    progress={78}
    title="¿Cuántos embarazos has tenido?"
    subtitle="Esto nos ayuda a personalizar tu plan."
    options={[
      { label: "Nunca estuve embarazada", emoji: "⊘" },
      { label: "1 embarazo", emoji: "1️⃣" },
      { label: "2 embarazos", emoji: "2️⃣" },
      { label: "3 o más embarazos", emoji: "3️⃣" },
    ]}
    nextRoute="/quiz/16"
  />
);

export default QuizRotina;
