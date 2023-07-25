import axios from "axios";
import {
  ADD_USER,
  DELETE_USER,
  FAIL_REQUEST,
  GET_USER_LIST,
  GET_USER_OBJ,
  MAKE_REQUEST,
  UPDATE_USER
} from "./ActionType";
import { toast } from "react-toastify";


export const MakeRequest = () => {
  return {
    type: MAKE_REQUEST
  };
};

export const FailRequest = (error: any) => {
  return {
    type: FAIL_REQUEST,
    payload: error
  };
};

export const GetUserList = (data: any) => {
  return {
    type: GET_USER_LIST,
    payload: data
  };
};

export const DeleteUser = () => {
  return {
    type: DELETE_USER
  };
};

export const AddUser = () => {
  return {
    type: ADD_USER
  };
};

export const UpdateUser = () => {
  return {
    type: UPDATE_USER
  };
};

export const GetUserObj = (data: any) => {
  return {
    type: GET_USER_OBJ,
    payload: data
  };
};


export const FetchUserList = () => {
  return (dispatch: any) => {
    dispatch(MakeRequest());
    // setTimeout(() => {
    axios.get('http://localhost:8000/user').then(res => {
      const userlist = res.data;
      console.log(res.data);

      dispatch(GetUserList(userlist));
    }).catch(err => {
      dispatch(FailRequest(err.message))
    })
    // }, 2000);
  }
};

export const RemoveUser = (code: any) => {
  return (dispatch: any) => {
    dispatch(MakeRequest());
    // setTimeout(() => {
    axios.delete('http://localhost:8000/user/' + code).then(res => {
      dispatch(DeleteUser());
    }).catch(err => {
      dispatch(FailRequest(err.message))
    })
    // }, 2000);
  }
};

export const AddUserFunction = (data: any) => {
  return (dispatch: any) => {
    dispatch(MakeRequest());
    // setTimeout(() => {
    axios.post('http://localhost:8000/user/', data).then(res => {
      dispatch(AddUser());
      toast.success('Signature added successfully')
    }).catch(err => {
      dispatch(FailRequest(err.message))
    })
    // }, 2000);
  }
};

export const UpdateUserFunction = (data: any, code: any) => {
  return (dispatch: any) => {
    dispatch(MakeRequest());
    // setTimeout(() => {
    axios.put('http://localhost:8000/user/' + code, data).then(res => {
      dispatch(UpdateUser());
      toast.success('Your information updated successfully')
    }).catch(err => {
      dispatch(FailRequest(err.message))
    })
    // }, 2000);
  }
};

export const FetchUserObj = (code: any) => {
  return (dispatch: any) => {
    dispatch(MakeRequest());
    // setTimeout(() => {
    axios.get('http://localhost:8000/user/' + code).then(res => {
      const userlist = res.data;
      console.log(res.data);
      dispatch(GetUserObj(userlist));
    }).catch(err => {
      dispatch(FailRequest(err.message))
    })
    // }, 2000);
  }
};
