import * as React from 'react'
import { BuildingState } from '../store/BuildingState'
import { BuildingProvider } from './BuildingProvider'

interface IProvider {
  buildingState: BuildingState
}

export function _BuildingList({ buildingState }: IProvider) {
  return (
    <ul>
      {buildingState.buildings.map(({name, id}: any) =>
        <li key={id}>{name}</li>
      )}
    </ul>
  )
}

export function BuildingList() {
  return <BuildingProvider render={_BuildingList} />
}
