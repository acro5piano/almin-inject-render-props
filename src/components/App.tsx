import * as React from 'react'
import { appContext } from '../appContext'
import { BuildingState } from '../store/BuildingState'
import { CreateBuildingUseCase } from '../use-case/CreateBuildingUseCase'

interface IAppState {
  buildingState: BuildingState
}

class App extends React.Component<{}, IAppState> {
  public constructor(props: {}) {
    super(props)

    this.state = appContext.getState()
  }

  public componentDidMount() {
    this.setState(appContext.getState())

    const onChangeHandler = () => {
      this.setState(appContext.getState())
    }
    appContext.onChange(onChangeHandler)
  }

  public render() {
    return (
      <div className="App">
        <ul>
          {this.state.buildingState.buildings.map(({name, id}: any) =>
            <li key={id}>{name}</li>
          )}
        </ul>

        <button onClick={this.createBuilding}>Add building</button>
      </div>
    )
  }

  private createBuilding = () => {
    appContext.useCase(new CreateBuildingUseCase()).execute()
  }
}

export default App
