import { useForm } from "react-hook-form";
import User from "@/modules/domain/user";
import { UserRepository } from "@/modules/domain/userRepository";
import { PrismaClient } from "@prisma/client";
import { User as PrismaUser } from "@prisma/client";
export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async register(user: {
    name: string;
    email: string;
    hashPassword: string;
  }): Promise<User> {
    const newUser = await this.prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.hashPassword,
      },
    });
    return this.mapToDomain(newUser);
  }

  async findByEmail(email: string): Promise<null | User> {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (!user) return null;
    return this.mapToDomain(user);
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.prisma.user.findFirst({
      where: {
        id,
      },
    });
    if (!user) return null;
    return this.mapToDomain(user);
  }
  async edit(id: string, userData: Partial<User>): Promise<void> {
    const edit = await this.prisma.user.update({
      where: { id },
      data: userData,
    });
  }
  async delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  private mapToDomain(prismaUser: PrismaUser): User {
    return new User(
      prismaUser.id,
      prismaUser.name ?? "",
      prismaUser.email ?? "",
      "",
      prismaUser.image ?? undefined,
      prismaUser.role
    );
  }
}
