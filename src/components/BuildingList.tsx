import * as React from 'react'
import { BuildingState } from '../store/BuildingState'
import { BuildingProvider } from './BuildingProvider'
import { withBuildingState } from './withBuildingState'

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

// TODO: not working
export function BuildingListUsingHoc() {
  return withBuildingState(_BuildingList)
}
