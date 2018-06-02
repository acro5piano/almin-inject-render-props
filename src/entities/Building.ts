interface IBuildingArgs {
  id: number
  name: string
}

export class Building {
  public id: number
  public name: string

  constructor({ id, name }: IBuildingArgs) {
    this.id = id
    this.name = name
  }
}
