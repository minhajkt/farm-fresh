import User, { IUser } from "../../models/User";
import { BaseRepository } from "../common/base.repository";
import { IUserRepository } from "./IUserRepository";

export class UserRepository extends BaseRepository<IUser> implements IUserRepository {
  constructor() {
    super(User);
  }
  async createUser(userData: Partial<IUser>): Promise<IUser> {
    return await this.create(userData);
  }

  async findByPhone(phone: string): Promise<IUser | null> {
    return await this.findOne({ phone });
  }

  async updateUser(userId: string, userData: Partial<IUser>): Promise<IUser | null> {
    return await this.update(userId, userData)
  }
}