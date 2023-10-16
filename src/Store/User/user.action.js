import { USER_ACTION_TYPES } from "./user.types";

import { createAction } from "../../Utils/Reducer/reducer.utils";

export const setCurrentUser = (user) =>
  createAction(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
