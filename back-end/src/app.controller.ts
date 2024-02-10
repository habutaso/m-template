import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './app.dto';
import { UserService } from './app.service';
import { User as UserModel } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): string {
    return 'hello';
  }

  @Post('/hello')
  post(@Body() message: CreateUserDto): CreateUserDto {
    console.log(message);
    return message;
  }

  @Get('user/:id')
  async getPostById(@Param('id') id: string): Promise<UserModel> {
    return this.userService.user({ id: Number(id) });
  }

  @Post('user')
  async signupUser(
    @Body() userData: { name?: string; email: string },
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }
}
