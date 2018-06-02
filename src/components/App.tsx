import * as React from 'react'
import { appContext } from '../appContext'
import { BuildingState } from '../store/BuildingState'

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
    setInterval(() => console.log(appContext.getState()), 2000)
  }

  public render() {
    return (
      <div className="App">
        a
        <ul>
          {this.state.buildingState.buildings.map(({name, id}: any) =>
            <li key={id}>{name}</li>
          )}
        </ul>
      </div>
    )
  }
}

export default App;
