import db from "../../db/models";

class UserService {
  static async createUser(newUser) {
    try {
      return await db.User.create(newUser);
    } catch (error) {
      throw error;
    }
  }

  static async getUser(userEmail) {
    try {
      const user = await db.User.findOne({
        where: { email: userEmail },
      });

      return user;
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;
