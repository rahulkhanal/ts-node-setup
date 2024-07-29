import { Service } from 'typedi';

@Service()
export class AuthService {
  getAll() {
    return 'auth works!';
  }
}
