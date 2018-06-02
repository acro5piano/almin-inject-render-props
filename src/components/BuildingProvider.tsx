import * as React from 'react'
import { appContext } from '../appContext'
import { BuildingState } from '../store/BuildingState'

interface IBuildingProviderProps {
  render: (buildingState: BuildingState) => React.ComponentClass
}

interface IBuildingProviederState {
  buildingState: BuildingState
}

class BuildingProvider extends React.Component<IBuildingProviderProps, IBuildingProviederState> {
  public state = appContext.getState()

  public componentDidMount() {
    this.setState(appContext.getState())

    const onChangeHandler = () => {
      this.setState(appContext.getState())
    }
    appContext.onChange(onChangeHandler)
  }

  public render() {
    return this.props.render(this.state.buildingState)
  }
}

export default BuildingProvider
