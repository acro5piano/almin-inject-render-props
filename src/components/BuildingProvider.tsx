import * as React from 'react'
import { appContext } from '../appContext'
import { BuildingState } from '../store/BuildingState'

interface IBuildingProviderProps {
  render: ({ buildingState }: any) => JSX.Element
}

interface IBuildingProviederState {
  buildingState: BuildingState
}

export class BuildingProvider extends React.Component<IBuildingProviderProps, IBuildingProviederState> {
  public state = appContext.getState()

  public componentDidMount() {
    this.setState(appContext.getState())

    const onChangeHandler = () => {
      this.setState(appContext.getState())
    }
    appContext.onChange(onChangeHandler)
  }

  public render() {
    const { buildingState } = this.state
    return this.props.render({ buildingState })
  }
}
