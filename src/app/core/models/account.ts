import { Role } from './role';

export class Account {
    id: String;
   phone: number;
   region: String;
   zone: String;
   wereda: String;
   kebele: String;
   firstName: String;
   lastName: String;
   email: String;
   role: Role;
   date: Date;
   jwtToken?: any;
}
// export class Account{
//     constructor(
//         public id: String,
//         public phone: number,
//         public region: String,
//         public zone: String,
//         public wereda: String,
//         public kebele: String,
//         public firstName: String,
//         public lastName: String,
//         public email: String,
//         public role: Role,
//         public date: Date,
//         public jwtToken?: any

//     ){}
// }