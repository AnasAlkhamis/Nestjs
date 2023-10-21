import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post("signup")
  signUp(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }
  @Post("signin")
  signin(@Body() dto: any) {
    return this.authService.signin(dto);
  }
}
