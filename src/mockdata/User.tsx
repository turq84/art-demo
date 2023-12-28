export type User = {
  id: number;
  username: string;
  email: string;
  password: string;
  last_login_date: string;
};

export const UserData: User[] = [
  {
    id: 1,
    username: 'john_doe',
    email: 'john.doe@example.com',
    password: 'password123',
    last_login_date: '',
  },
  {
    id: 2,
    username: 'jane_smith',
    email: 'jane.smith@example.com',
    password: 'securepass456',
    last_login_date: '',
  },
  {
    id: 3,
    username: 'bob_jackson',
    email: 'bob.jackson@example.com',
    password: 'strongpassword789',
    last_login_date: '',
  },
  {
    id: 4,
    username: 'test',
    email: 'test@test.com',
    password: 'test',
    last_login_date: '',
  },
];
