/* eslint-disable sonarjs/prefer-single-boolean-return */
export default function finishDayClass(days: {
  date: Date | undefined;
  notes: string;
}[]):boolean {
  const actualDay = new Date().toLocaleDateString();

  const ultimaAulaConcluida = days
    .find((m, i) => m.date && days[i + 1]?.date === undefined);

  // Verifica se a aula do dia já foi marcada
  if (ultimaAulaConcluida
      && ultimaAulaConcluida.date?.toLocaleDateString() === actualDay) {
    return true;
  }
  // Verifica se a última aula já foi marcada como concluída
  if (days[days.length - 1].date !== undefined) {
    return true;
  }
  return false;
}
