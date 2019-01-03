import { route } from "./";
import usersDB from "../db/users";

/**
 * Route to create a user. Returns the new user in the payload
 */
export const create = route(
  async (req, res) => {
    const { name, password } = req.body;
    const newUser = await usersDB.create(name, password);
    res.send({ data: newUser });
  },
  {
    requiredFields: ["name", "password"]
  }
);

/**
 * Route to list out all users. Returns a list of all users in the payload.
 */
export const list = route(async (req, res) => {
  const users = await usersDB.list();
  res.send({ data: users });
});
