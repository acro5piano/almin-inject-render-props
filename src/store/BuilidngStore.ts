import { DispatchedPayload, Store } from 'almin'
import { createBuilding } from './BuildingState'
import { BuildingState } from './BuildingState'

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
