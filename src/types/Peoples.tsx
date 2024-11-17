export default interface Peoples {
  count: number
  next: any
  previous: any
  results: Array<IPeople>
}

interface IPeople {
  name: string
  gender: string
  mass: any
}
