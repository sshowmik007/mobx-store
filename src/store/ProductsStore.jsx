import axios from "axios"
import { action, computed, makeObservable, observable } from "mobx"

export class ProductsStore {
  products = []

  constructor(rootStore) {
    makeObservable(this, {
      products: observable,
      fetchProducts: action,
      getProducts: computed
    })
    this.rootStore = rootStore
  }

  async fetchProducts() {
    const productsResponse = await axios.get(
      "https://fakestoreapi.com/products"
    )
    this.products = productsResponse?.data ?? []
  }

  get getProducts() {
    return this.products
  }
}
