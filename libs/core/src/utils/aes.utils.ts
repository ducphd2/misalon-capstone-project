import { AES, enc } from 'crypto-js';

const AES_KEY = process.env.AES_KEY || 'secret-aes';

export const encryptData = (text: string, secretKey?: string) => {
  return AES.encrypt(text, secretKey ?? AES_KEY).toString();
};

export const decryptData = (encryptedData: string, secretKey?: string) => {
  const bytes = AES.decrypt(encryptedData, secretKey ?? AES_KEY);
  return bytes.toString(enc.Utf8);
};
