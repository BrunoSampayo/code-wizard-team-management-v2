import User from "./user";

export interface UserRepository {
  register(user: {
    name: string;
    email: string;
    hashPassword: string;
  }): Promise<User>;

  findByEmail(email: string): Promise<User | null>;

  findById(id: string): Promise<User | null>;

  edit(id: string, userData: Partial<User>): Promise<void>;

  delete(id: string): Promise<void>;
}
