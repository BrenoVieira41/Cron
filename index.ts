import { scheduleJob } from 'node-schedule';

(async () => {
  const mealTimes = [8, 12, 15, 19];

  scheduleJob('0 * * * *', () => {
    const currentHour = new Date().getHours();
    const validateHours = compareHours(currentHour, mealTimes);

    console.log(response(validateHours));
  });

  function compareHours(current: Number, values: Number[]) {
    return values.find(it => it === current);
  }

  function response(value: Number | undefined) {
    switch(value) {
      case 8:
        return 'Café da manhã é a principal refeição do dia';
      case 12:
        return 'Hora do almoço'
      case 15:
        return 'Hora do lanche da tarde, coma frutas <3'
      case 19:
        return 'Hora da janta, coma coisas leves para facilitar a digestão e dormir melhor 😊'
      default:
        return 'Nenhuma refeição esperada.';
    }
  }
})();
