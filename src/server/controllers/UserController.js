import bcrypt, { hashSync } from "bcryptjs";
import UserService from "../sevices/UserService";
import Util from "../utils";
import Auth from "../middleware";

const util = new Util();

class UserContorller {
  static async addUser(req, res) {
    const { firstName, lastName, displayPhoto, email, password, phoneNumber, address,} = req.body;

    const hashedPassword = hashSync(password, 8);

    const newUser = { 
      firstName, 
      lastName,
      displayPhoto, 
      email, 
      password: hashedPassword, 
      phoneNumber, 
      address, 
      isAdmin: false,
      isActive: true
    };

    try {
      const createdUser = await UserService.createUser(newUser);

      return res.status(201).send({
        status: 201,
        message: "User Successfully Created",
        data: {
          token: Auth.generateToken(
            createdUser.dataValues.id,
            createdUser.dataValues.firstName
          ),
          userId: createdUser.dataValues.id,
          firstName: createdUser.dataValues.firstName,
          lastName: createdUser.dataValues.lastName,
          displayPhoto: createdUser.dataValues.displayPhoto,
          email: createdUser.dataValues.email,
          phoneNumber: createdUser.dataValues.phoneNumber,
          password: createdUser.dataValues.password,
          address: createdUser.dataValues.address,
          isAdmin: createdUser.dataValues.isAdmin,
          isActive: createdUser.dataValues.isActive
        },
      });
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async signin(req, res){
    const { email, password } = req.body;
  
    try {
      const user = await UserService.getUser(email)
      // return user.dataValues;

      if (!user){
        return res.status(400).json({
          status: 400,
          error: 'wrong email or password',
        });
      }

      const isAuthenticated = bcrypt.compareSync(password, user.dataValues.password);

      if (!isAuthenticated) {

        console.log(isAuthenticated)
        return res.status(400).json({
          status: 400,
          error: 'wrong email or password',
        });
      }

      return res.status(200).json({
        status: 200,
        message: 'User Successfuly Logged In',
        data: {
          token: Auth.generateToken(
            user.dataValues.id,
            user.dataValues.firstName
          ),
          userId: user.dataValues.id,
          firstName: user.dataValues.firstName
        },
    });

    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }

  };
}

export default UserContorller;
