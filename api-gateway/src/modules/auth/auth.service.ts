import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authMicroservice: ClientProxy
  ) {}

  public async login() {
    return lastValueFrom(this.authMicroservice.send('login', {}));
  }
}
