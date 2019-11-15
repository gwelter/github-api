import { Request, Response } from 'express'
import User from './user.model'

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    const users = await User.find()
    return res.json({ users })
  }
}

export default new UserController()
