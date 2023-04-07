import User from "./user-module.js";

export const getUsers = async (request, response) => {
    // if (request.params.id) {
    //     return response.send(
    //         users.find((user) => user.id == request.params.id)
    //     );
    // }

    let users;
    if (request.params.id) {
        users = await User.findById(request.params.id);
    } else {
        users = await User.find();
    }
    response.send(users);
};

export const createUser = async (request, response) => {
    const user = await User.create(request.body);
    response.send(user);
};
