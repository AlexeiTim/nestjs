import { Body, Controller, Delete, Patch, Req, UseGuards } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { request } from 'http';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { UpdateUserDTO } from './dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @ApiTags('API')
  @ApiResponse({
    status: 200,
    type: UpdateUserDTO
  })
  @UseGuards(JwtAuthGuard)
  @Patch()
  updateUser(@Body() updateDto: UpdateUserDTO, @Req() request): Promise<UpdateUserDTO> {
    const user = request.user;
    return this.userService.updateUser(user.email, updateDto)
  }

  @ApiTags('API')
  @UseGuards(JwtAuthGuard)
  @Delete()
  deleteUser(@Req() request) {
    const user = request.user
    return this.userService.deleteUser(user.email)
  }
}
