import { BadRequestError, Body, Get, JsonController, Post } from 'routing-controllers';
import { Inject, Service } from 'typedi';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

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

    @Get('/all')
    getA() {
        return this.userService.getUsers();
    }

    @Post('/')
    async createUser(@Body() body: any) {
    //   const userDto = plainToInstance(UserDto, body);
  
      // Validate the DTO
    //   const errors = await validate(userDto);
    //   if (errors.length > 0) {
    //     throw new BadRequestError('Validation failed!', errors);
    //   }
  
      // Use the validated DTO
    //   return {
    //     message: 'User created successfully!',
    //     user: userDto,
    //   };
    }
}
