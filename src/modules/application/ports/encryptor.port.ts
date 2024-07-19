export interface EncryptProvider {
  encrypt(data: string): Promise<string>;
  hashCompare(data: string, hash: string): Promise<boolean>;
}
