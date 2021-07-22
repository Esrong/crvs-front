import { Account } from "src/app/core/models/account";
import { Role } from "src/app/core/models/role";

export interface MenuItem {
    id?: number;
    label?: string;
    icon?: string;
    link?: string;
    subItems?: any;
    isTitle?: boolean;
    badge?: any;
    parentId?: number;
    isLayout?: boolean;
    Role?:Role;
    // Account: Account;

}
