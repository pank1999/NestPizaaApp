import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';
import { USER_REPOSITORY } from '../core/constants/index';
import {forwardRef} from "@nestjs/common";

interface LoginType{
    email:string,
    password:string
}

@Injectable()
export class UserService {

    constructor(@Inject(forwardRef(() => USER_REPOSITORY)) private readonly userRepository: typeof User) { }

    async create(user: UserDto): Promise<User> {
        console.log("user service",user);
        const createdUser =await this.userRepository.create<User>(user);
        console.log("created user",createdUser);
        return createdUser;
        
    }

    async findOneByEmail(loginData:LoginType){
        const userDB=await this.userRepository.findOne<User>({ where: { email:loginData.email } });
        if(userDB){
            if(userDB.password===loginData.password){
                return userDB;
            }
            else{
                console.log("wrong password")
                return {message:"wrong password"}
            } 
        }
        else{
              console.log("user dose not exists!");
             return {message:"user dose not exists!"}
        }

    }

    async findOneById(id: number): Promise<User> {
        return await this.userRepository.findOne<User>({ where: { id } });
    }

    async findAll(): Promise<User[]> {
        return await this.userRepository.findAll();
    }
}