import { publicRequest } from "../../requestMethods";
import {
  addUsersFailure,
  addUsersStart,
  addUsersSuccess,
  getUsersFailure,
  getUsersStart,
  getUsersSuccess,
} from "./usersRedux";

export const getAllUsers = async (dispatch) => {
  dispatch(getUsersStart());
  try {
    const res = await publicRequest.get("/users");
    dispatch(getUsersSuccess(res.data));
  } catch (error) {
    dispatch(getUsersFailure());
  }
};

export const addUser = async (user, dispatch) => {
  dispatch(addUsersStart());

  try {
    const res = await publicRequest.post("/users", user);
    dispatch(addUsersSuccess(res.data));
  } catch (error) {
    dispatch(addUsersFailure());
  }
};
