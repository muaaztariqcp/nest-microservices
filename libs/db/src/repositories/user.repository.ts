import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  public async verifyCredentials(credentials: {
    username: string;
    password: string;
  }): Promise<boolean> {
    console.log('In user repository...');
    console.log(credentials);
    return true;
  }
}
