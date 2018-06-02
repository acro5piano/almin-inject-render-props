import { Context, Dispatcher, StoreGroup } from "almin";

import { BuildingStore } from './store/BuilidngStore'

const dispatcher = new Dispatcher()
const buildingStore = new BuildingStore()
const storeGroup = new StoreGroup({
  buildings: buildingStore,
})

export const appContext = new Context({
  dispatcher,
  options: {
    strict: true
  },
  store: storeGroup,
})
