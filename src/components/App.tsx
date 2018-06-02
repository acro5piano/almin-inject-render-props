import * as React from 'react'
import { appContext } from '../appContext'
import { BuildingState } from '../store/BuildingState'
import { CreateBuildingUseCase } from '../use-case/CreateBuildingUseCase'
import { BuildingList } from './BuildingList'

interface IAppState {
  buildingState: BuildingState
}

class App extends React.Component<{}, IAppState> {
  public render() {
    return (
      <div className="App">
        <BuildingList />

        <button onClick={this.createBuilding}>Add building</button>
      </div>
    )
  }

  private createBuilding = () => {
    appContext.useCase(new CreateBuildingUseCase()).execute()
  }
}

export default App
