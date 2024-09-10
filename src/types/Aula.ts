export default interface IAula {
  title: string,
  maxClasses: number,
  className: string,
  completed: { date: Date, notes: string }[]
}
