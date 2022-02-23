import { User } from '@models/User'

export class UserContoller {
  handle () {
    const user = new User()
    return user
  }
}
