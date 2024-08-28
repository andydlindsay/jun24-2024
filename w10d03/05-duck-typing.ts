interface LoginUser {
  username: string;
  password: string;
}

const login = (user: LoginUser): boolean => {
  user.password
  return true;
};

const johnStamos = {
  username: 'jstamos',
  password: '1234',
  friends: [],
  someHelper: () => {}
};

login(johnStamos);
