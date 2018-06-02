import { DispatchedPayload, Store } from 'almin'
import { BuildingsState } from './BuildingState'

export class BuildingStore extends Store {
  constructor() {
    super()

    this.state = new BuildingsState({
      buildings: [],
    })
  }

  public getState() {
    return this.state
  }

  public receivePayload(payload: DispatchedPayload) {
    this.setState(this.state.reduce(payload))
  }
}
