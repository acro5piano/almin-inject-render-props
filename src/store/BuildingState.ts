import { Building } from '../entities/Building'

interface IAppStateArgs {
  buildings: Building[]
}

export interface IAppStatePayload {
  type: string
  buildings: Building[]
}

export class BuildingsState {
  public buildings: Building[]

  constructor({ buildings }: IAppStateArgs) {
    this.buildings = buildings;
  }

  public reduce(payload: IAppStatePayload) {
    const { buildings } = payload
    return Object.assign(this, { buildings })
  }
}
