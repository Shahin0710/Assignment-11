import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import * as React from 'react';

const AlertMessage = ({handleClose}) => {
  return (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        Close
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  )
};

export default AlertMessage



 


//   return (
//     <div>
//       <Button onClick={handleClick}>Open simple snackbar</Button>

//     </div>
//   );
// }