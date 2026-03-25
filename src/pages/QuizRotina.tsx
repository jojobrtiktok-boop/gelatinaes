import QuizSingleSelect from "@/components/QuizSingleSelect";

const QuizRotina = () => (
  <QuizSingleSelect
    progress={45}
    title="Como é sua rotina diária?"
    subtitle="Selecione a que mais se encaixa."
    options={[
      { label: "Trabalho fora de casa", emoji: "🏢" },
      { label: "Trabalho em home office", emoji: "🏠" },
      { label: "Cuido da casa/família", emoji: "👨‍👩‍👧" },
      { label: "Estudo", emoji: "📚" },
    ]}
    nextRoute="/quiz/16"
  />
);

export default QuizRotina;
