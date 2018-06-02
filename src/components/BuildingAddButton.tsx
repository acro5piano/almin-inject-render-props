import * as React from 'react'
import { appContext } from '../appContext'
import { CreateBuildingUseCase } from '../use-case/CreateBuildingUseCase'

const createBuilding = () => {
  appContext.useCase(new CreateBuildingUseCase()).execute()
}

export function BuildingAddButton() {
  return <button onClick={createBuilding}>Add building</button>
}
