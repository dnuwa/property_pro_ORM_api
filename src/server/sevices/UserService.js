import db from '../../db/models';

class UserService{

    static async createUser(newUser){
        try{
            return await db.User.create(newUser);
        } catch (error){
            // console.log(error)
            throw error; 
        }       
    }
}

export default UserService;