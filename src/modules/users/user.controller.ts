import { Get, JsonController } from 'routing-controllers';
import { Inject, Service } from 'typedi';
import { UserService } from './user.service';

@JsonController('/users')
@Service()
export class UserController {
    constructor(
        @Inject()
        private userService: UserService
    ) { }

    @Get('/')
    getAll() {
        return this.userService.getUsers();
    }
}
