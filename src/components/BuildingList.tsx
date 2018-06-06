import * as React from 'react'
import { Building } from '../entities/Building'
import { BuildingState } from '../store/BuildingState'
import { BuildingProvider } from './BuildingProvider'

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
