import { EncryptProvider } from "@/modules/application/ports/encryptor.port";
import { hash, compare } from "bcrypt";
export class EncryptAdapter implements EncryptProvider {
  async encrypt(data: string): Promise<string> {
    return await hash(data, 10);
  }
  async hashCompare(data: string, hash: string): Promise<boolean> {
    const compareHash = await compare(data, hash);
    if (compareHash) return true;
    return false;
  }
}
