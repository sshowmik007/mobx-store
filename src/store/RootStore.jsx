import { LoginStore } from "./loginStore"
import { ProductsStore } from "./productsStore"

export class RootStore {
  constructor() {
    this.loginStore = new LoginStore(this)
    this.productsStore = new ProductsStore(this)
  }
}
