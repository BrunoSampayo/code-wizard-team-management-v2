import { UserRepository } from "@/modules/domain/userRepository";
import UserUseCase from "@/modules/shared/userUseCase";
import { EncryptProvider } from "@/modules/application/ports/encryptor.port";
import User from "@/modules/domain/user";
interface UserDTO {
  name: string;
  email: string;
  password: string;
}
export class RegisterUserService implements UserUseCase<UserDTO, User | void> {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly encrypt: EncryptProvider
  ) {}
  async execute(input: UserDTO): Promise<User | void> {
    const alreadyExists = await this.userRepository.findByEmail(input.email);
    if (alreadyExists) return;

    const hashPassword = await this.encrypt.encrypt(input.password);
    const data = { name: input.name, email: input.email, hashPassword };
    return await this.userRepository.register(data);
  }
}
