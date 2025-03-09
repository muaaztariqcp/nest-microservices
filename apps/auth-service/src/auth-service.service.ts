import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthServiceService {
  public async login() {
    return { token: 'ab' };
  }
}
