import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
   
      constructor( 
          private userService:UserService,
          private readonly jwtService: JwtService,
        ){}

    // async validateUser(loginData) {
    //     // find if user exist with this email
    //     const user = await this.userService.findOneByEmail(loginData);

    //     if (!user) {
    //         return null;
    //     }

    //     // find if user password match
    //     const match = await this.comparePassword(loginData.password,user.password);
    //     if (!match) {
    //         return null;
    //     }

    //     // tslint:disable-next-line: no-string-literal
    //     const { password, ...result } = user['dataValues'];
    //     return result;
    // }
    public async login(user) {
        const token = await this.generateToken(user);
        return { user, token };
    }

    public async create(user) {
        // hash the password
    
        const pass = await this.hashPassword(user.password);

        // create the user
        const newUser = await this.userService.create({ ...user, password: pass });
        console.log("new user",newUser);

        // tslint:disable-next-line: no-string-literal
        const { password, ...result } = newUser['dataValues'];

        // generate token
        const token = await this.generateToken(result);

        // return the user and the token
        return { user: result, token };
    }

    private async generateToken(user) {
        const token = await this.jwtService.signAsync(user);
        return token;
    }

    private async hashPassword(password) {
        const hash = await bcrypt.hash(password, 10);
        return hash;
    }
    public async comparePassword(enteredPassword, dbPassword) {
        const match = await bcrypt.compare(enteredPassword, dbPassword);
        return match;
    }

}


