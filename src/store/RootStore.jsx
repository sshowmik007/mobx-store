import { LoginStore } from "./loginStore"
import { ProductsStore } from "./productsStore"
import { CartStore } from './CartStore';

export class RootStore {
  constructor() {
    this.loginStore = new LoginStore(this)
    this.productsStore = new ProductsStore(this)
    this.CartStore =new CartStore(this);
  }
}
