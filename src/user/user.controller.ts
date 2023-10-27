import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { Request } from "express";
import { GetUser } from "src/auth/decorator/getUserDecorator";
import { JwtGuard } from "src/auth/guard";
import { User } from "@prisma/client";

@UseGuards(JwtGuard)
@Controller("users")
export class UserController {
  @Get("me")
  getMe(@GetUser() user: User) {
    return user;
  }
}
