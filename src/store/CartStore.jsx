import { filter } from "lodash"
import { action, computed, makeObservable, observable } from "mobx"

export class CartStore {
  products = []
  cart = { products: [] }

  constructor(rootStore) {
    makeObservable(this, {
      cart: observable,
      addProductInCart: action,
      removeProductInCart: action,
      getCarts: computed,
      getCartCount: computed
    })
    this.rootStore = rootStore
  }

  addProductInCart(product) {
    this.cart.products?.push(product)
  }

  removeProductInCart(product) {
    const products = filter(this.cart.products, p => p.id !== product.id)
    this.cart.products = products || []
  }

  get getCarts() {
    return this.cart.products || []
  }
  get getCartCount() {
    return this.cart.products?.length || 0
  }
}
