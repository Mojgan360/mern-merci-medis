import User from "../models/user.model";
import extend from "lodash/extend";
import errorHandler from "./../helpers/dbErrorHandler";

// @route    Post api/profile
// @desc     Create new user
// @access   Public
const create = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    return res.status(200).json({
      message: "Successfully signed up!",
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

// @route    GET api/users
// @desc     Get all users
// @access   Public
const list = async (req, res) => {
  try {
    let users = await User.find().select("name email updated created");
    res.json(users);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

/**
 * Load user and append to req.
 */
const userByID = async (req, res, next, id) => {};

const read = (req, res) => {};

const update = async (req, res) => {};

const remove = async (req, res) => {};

export default {
  create,
  userByID,
  read,
  list,
  remove,
  update,
};
