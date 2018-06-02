import * as React from 'react'
import { BuildingProvider } from './BuildingProvider'

// TODO: not working
export const withBuildingState = (WrappedComponent: any) => class extends React.Component {
  public render() {
    return (
      // tslint:disable-next-line
      <BuildingProvider render={buildingState => (
        <WrappedComponent {...this.props} buildingState={buildingState} />
      )}/>
    )
  }
}
