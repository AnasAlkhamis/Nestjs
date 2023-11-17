import { Controller, Get, Patch, Req, UseGuards } from "@nestjs/common";
import { Request } from "express";
import { UserDecorator } from "../auth/decorator";
import { JwtGuard } from "../auth/guard";
import { User } from "@prisma/client";

@UseGuards(JwtGuard)
@Controller("users")
export class UserController {
  @Get("me")
  getMe(@UserDecorator() user: User) {
    return user;
  }

  @Patch()
  editUser(){

  }
}
