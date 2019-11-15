import { Schema, model, Document } from 'mongoose'

interface UserInterface extends Document {
  login: string,
  name: string,
  repos: string[]
}

const UserSchema = new Schema({
  login: String,
  name: String,
  repos: [String]
}, {
  timestamps: true
})

export default model<UserInterface>('User', UserSchema)
