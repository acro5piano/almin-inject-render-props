import * as React from 'react'
import { Building } from '../entities/Building'
import { BuildingState } from '../store/BuildingState'
import { BuildingProvider } from './BuildingProvider'
import { withBuildingState } from './withBuildingState'

interface IProvider {
  buildingState: BuildingState
}

const BuildingListBase = ({ buildingState }: IProvider) => (
  <ul>
    {buildingState.buildings.map(({name, id}: Building) =>
      <li key={id}>{name}</li>
    )}
  </ul>
)

export function BuildingList() {
  return <BuildingProvider render={BuildingListBase} />
}

// TODO: not working
export function BuildingListUsingHoc() {
  return withBuildingState(BuildingListBase)
}
