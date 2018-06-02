import { Building } from '../entities/Building'

export const createBuilding = () => new Building({
  id: Math.round(Math.random() * 10000),
  name: 'Hoge',
})

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
    this.buildings = buildings
  }

  public reduce(payload: IAppStatePayload) {
    switch (payload.type) {
      case 'CREATE_BUILDING':
        return new BuildingState({
          buildings: [...this.buildings, createBuilding()],
        })
      default:
        return this
    }
  }
}
