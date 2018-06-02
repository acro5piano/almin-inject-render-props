import { Building } from '../entities/Building'

interface IAppStateArgs {
  buildings: Building[]
}

export interface IAppStatePayload {
  type: string
  buildings: Building[]
}

export class BuildingState {
  public buildings: Building[]

  constructor({ buildings }: IAppStateArgs) {
    this.buildings = buildings;
  }

  public reduce(payload: IAppStatePayload) {
    return this
    const { buildings } = payload
    return Object.assign(this, { buildings })
  }
}
