import * as React from 'react'
import { appContext } from '../appContext'

class App extends React.Component {
  public constructor(props: any) {
    super(props);

    this.state = appContext.getState();
  }

  public componentDidMount() {
    console.log(appContext.getState())
  }

  public render() {
    return (
      <div className="App">
        a
      </div>
    )
  }
}

export default App;
