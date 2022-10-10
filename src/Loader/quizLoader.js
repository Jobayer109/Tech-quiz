export const quizLoaderFunc = async () => {
  const quizzData = await fetch("https://openapi.programming-hero.com/api/quiz");
  const quizz = await quizzData.json();

  return quizz;
};
