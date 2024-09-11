export default interface IAula {
  title: string,
  className: string,
  completed: { date: Date | undefined, notes: string }[],
  id: number,
}
