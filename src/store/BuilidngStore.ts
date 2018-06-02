import { DispatchedPayload, Store } from 'almin'
import { Building } from '../entities/Building'
import { BuildingState } from './BuildingState'

const createBuilding = () => new Building({
  id: 1,
  name: 'Hoge',
})

export class BuildingStore extends Store {
  constructor() {
    super()

    this.state = new BuildingState({
      buildings: [createBuilding()],
    })
  }

  public getState() {
    return this.state
  }

  public receivePayload(payload: DispatchedPayload) {
    this.setState(this.state.reduce(payload))
  }
}
