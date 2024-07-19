import { RegisterUserService } from "./registerUser.service";
import { PrismaUserRepository } from "../adapters/user/prismaUserRepository";
import prismadb from "../../infra/database/prisma-db";
import { EncryptAdapter } from "../adapters/encryptor.adapter";
import User from "@/modules/domain/user";

describe("Create a user", () => {
  it("Should be able to create a new User", async () => {
    const userRepository = new PrismaUserRepository(prismadb);
    const encrypt = new EncryptAdapter();
    const registerUserService = new RegisterUserService(
      userRepository,
      encrypt
    );

    await prismadb.user.deleteMany({ where: {} });
    const users = await prismadb.user.findMany({ where: {} });
    expect(users).toHaveLength(0);
    const userData = {
      name: "Bruno",
      email: "bruno@test.com",
      password: "123@bcde",
    };

    const user = await registerUserService.execute(userData);
    console.log(user);
    expect(user).toBeInstanceOf(User);
  });
});
