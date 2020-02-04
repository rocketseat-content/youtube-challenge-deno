import User from '../models/User.js';

class UserController {
  async index({ response }) {
    const users = await User.find();

    response.body = users.rows;
  }

  async show({ params, response }) {
    const users = await User.findById(params.id);

    response.body = users.rows;
  }

  async store({ request, response }) {
    const {
      value: { email },
    } = await request.body();

    const result = await User.create({
      email,
    });

    response.body = result.rows;
  }

  async update({ params, request, response }) {
    const {
      value: { email },
    } = await request.body();

    const result = await User.findByIdAndUpdateEmail(params.id, email);

    response.body = result.rows;
  }

  async delete({ params, response }) {
    const users = await User.destroy(params.id);

    response.body = 'OK';
  }
}

export default new UserController();
