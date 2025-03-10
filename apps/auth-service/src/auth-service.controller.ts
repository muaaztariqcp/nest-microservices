import { Controller } from '@nestjs/common';
import { AuthServiceService } from './auth-service.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AuthServiceController {
  constructor(private readonly authServiceService: AuthServiceService) {}

  @MessagePattern('login')
  login(
    @Payload() loginData: { username: string; password: string }
  ): Promise<{ token: string }> {
    return this.authServiceService.login(loginData);
  }
}
