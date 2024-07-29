import { JsonController, Get } from 'routing-controllers';
import { Inject } from 'typedi';
import { AuthService } from './auth.service';

@JsonController('/auth')
export class AuthController {
  constructor(
    @Inject()
    private authService: AuthService
  ) {}

  @Get('/')
  getAll() {
    return this.authService.getAll();
  }
}
