export class User {
    id: number | undefined;
    username: string | undefined;
    password: string | undefined;
    fullName: string | undefined;
    email: string | undefined;
    address: string | undefined;
    gender: string | undefined;
    phone: string | undefined;
    // profile: string | undefined;
    enabled: boolean | undefined;
    authorities: Array<any> = [{ authority: '' }];
  }
  