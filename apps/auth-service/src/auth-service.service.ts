import { UserRepository } from '@libs/db/repositories';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthServiceService {
  constructor(private userRepository: UserRepository) {}

  public async login(loginData: { username: string; password: string }) {
    const isUserVerified =
      await this.userRepository.verifyCredentials(loginData);
    if (isUserVerified) {
      return {
        token: 'abcdef'
      };
    }
    return {
      token: 'error'
    };
  }
}
