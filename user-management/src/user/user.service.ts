import { Injectable } from "@nestjs/common";
import { CreateUsersDto } from "./data/dto/create-user.dto";
import { v4 as uuidv4 } from 'uuid';
import { UpdateUserDto } from "./data/dto/update-user.dto";

@Injectable()
export class userService {

    public users:CreateUsersDto[]=[];

    // Create User

    create(user: CreateUsersDto): string {

        const existinguser=this.users.find((u)=>{
            return u.email===user.email;
        })

        if(existinguser) return `user with this email already exists`;

        user.id=uuidv4();
        this.users.push(user);
        return `user create successfully \n${JSON.stringify(user)}`;
    }   

    // Get All Users

    findAll():CreateUsersDto[] {
        return this.users;
    }

    // Update User

    update(id: string, updateUser: UpdateUserDto): string {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex === -1) return `user not found`;
        
        this.users[userIndex] = { ...this.users[userIndex], ...updateUser, id };
        return `user update successfully \n${JSON.stringify(this.users[userIndex])}`;
    }

    // Delete User

    remove(id: string): string {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex === -1) return `user not found`;
    
        this.users.splice(userIndex, 1);
        return `user delete successfully`;
    }
}