import { IsString } from "class-validator";
import { ApiProperty, ApiResponse } from "@nestjs/swagger";

export class CreateUserDTO {

  @ApiProperty()
  @IsString()
  firstName: string

  @ApiProperty()
  @IsString()
  userName: string

  @ApiProperty()
  @IsString()
  email: string

  @ApiProperty()
  @IsString()
  password: string
}

export class UpdateUserDTO {
  @ApiProperty()
  @IsString()
  firstName: string

  @ApiProperty()
  @IsString()
  userName: string

  @ApiProperty()
  @IsString()
  email: string
}