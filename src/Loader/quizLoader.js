export const quizLoaderFunc = async () => {
  const quizzData = await fetch("https://openapi.programming-hero.com/api/quiz");
  const quizz = await quizzData.json();

  return quizz;
};

export const quizDetailsFunc = async ( {params} ) => {
  const quizDetails = await fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`);
  const quizData = await quizDetails.json();
  // console.log(quizData);
  return quizData;
};
