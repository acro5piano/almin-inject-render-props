import { UseCase } from 'almin'

export class CreateBuildingUseCase extends UseCase {
  public execute() {
    this.dispatch({
      type: 'CREATE_BUILDING',
    })
  }
}
