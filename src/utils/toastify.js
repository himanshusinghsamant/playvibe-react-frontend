import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const showSuccessToast = ({message = "Operation Successful!"}) => {
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000, // Closes after 3 seconds
  });
};

const showErrorToast = ({message= "Operation Failed!"}) => {
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
  });
};

export {
  showErrorToast,
  showSuccessToast
}
