import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { userService } from './user.service';
import { CreateUsersDto } from "./data/dto/create-user.dto";
import { UpdateUserDto } from "./data/dto/update-user.dto";

@Controller("users")
export class userController {
    constructor(private userService: userService) {}

    @Post()
    create(@Body() createUserDto: CreateUsersDto) {
        return this.userService.create(createUserDto);
    }

    @Get()
    findAll() {
        return this.userService.findAll();
    }

    @Put(':id')
    update(@Param() params, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(params.id, updateUserDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.userService.remove(id);
    }
}