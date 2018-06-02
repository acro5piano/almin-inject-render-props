import * as React from 'react'
import { BuildingAddButton } from './BuildingAddButton'
import { BuildingList } from './BuildingList'

export class App extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="App">
        <BuildingList />
        <BuildingAddButton />
      </div>
    )
  }
}
