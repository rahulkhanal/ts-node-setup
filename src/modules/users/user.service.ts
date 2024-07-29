import { Service } from 'typedi';

@Service()
export class UserService {
    getUsers() {
        return [{ id: 1, name: 'John Doep' }];
    }
}
