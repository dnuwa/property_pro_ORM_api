import UserService from '../sevices/UserService';
import Util from '../utils';

const util = new Util();

class UserContorller{
    static async addUser(req, res){
        if (!req.body.firstName || !req.body.lastName || !req.body.password || !req.body.phoneNumber || !req.body.address || !req.body.isAdmin) {
            util.setError(400, 'Please provide complete details');
            return util.send(res);
          }
          const newUser = req.body;
          try {
            const createdUser = await UserService.createUser(newUser);
            util.setSuccess(201, 'User Added!', createdUser);
            return util.send(res);
          } catch (error) {
            util.setError(400, error.message);
            return util.send(res);
          }
    }
}

export default UserContorller;