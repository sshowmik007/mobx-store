import axios from "axios"
import { find } from "lodash"
import { action, computed, makeObservable, observable } from "mobx"

export class LoginStore {
  loginToken = ""
  userDetails = null

  constructor(rootStore) {
    makeObservable(this, {
      loginToken: observable,
      userDetails: observable,
      fetchUserToken: action,
      getUserToken: computed,
      getUserDetails: computed
    })
    this.rootStore = rootStore
  }

  logout() {
    this.loginToken = ""
    this.userDetails = null
  }
  //  action
  async fetchUserToken(userName, password) {
    const data = {
      username: userName,
      password: password
    }

    // login
    const tokenRes = await axios.post(
      `https://fakestoreapi.com/auth/login`,
      data
    )
    const userLists = await axios.get(`https://fakestoreapi.com/users`)
    if (tokenRes.data.token) {
      const user = find(userLists.data, u => u.username === userName)
      this.loginToken = tokenRes.data.token
      this.userDetails = user
    }
  }
// computed values
  get getUserToken() {
    return this.loginToken
  }

  get getUserDetails() {
    return this.userDetails
  }
}
