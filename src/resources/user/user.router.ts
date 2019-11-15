import { Router } from 'express'
import UserController from './user.controller'

const router = Router()

router
  .route('/')
  .get(UserController.index)

export default router
