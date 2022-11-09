import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { Box, Grid, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import AlertMessage from './AlertMessage';
import ComponentsLayout from './ComponentsLayout';
import DeleteDialogBoxOpen from './DeleteDialogBoxOpen';

const Review = function () {
    const navigate = useNavigate();
    const {user} = React.useContext(AuthContext);
    const [commentData, setCommentData] = React.useState([]);

    const handleSingleView = (id) =>{
        navigate(`/comments/view/${id}`);
    }

    const handleSingleEdit = (id) =>{
        navigate(`/comments/edit/${id}`);
    }

    //  DELETE DIALOG BOX OPEN ACTION
    const [deleteOpenBox, setDeleteOpenBox] = React.useState(false);
    const [serviceId, setServiceId] = React.useState('');

    const handleDeleteNo = () => {
        setDeleteOpenBox(false);
    };

    const handleDeleteYes = () => {
        fetch(`http://localhost:8000/comments_delete/${serviceId}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        });
        setDeleteOpenBox(false);
        setMassage('Successfully Deleted');
        setSnackbarOpen(true);
    };

    const handleDelete = (id) => {
        setServiceId(id);
        setDeleteOpenBox(true);
    };
    //  DELETE DIALOG BOX CLOSE ACTION
    
    //  DELETE SUCCESS ALERT ACTION START
    const [massage, setMassage] = React.useState('');
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setSnackbarOpen(false);
    };
    //  DELETE SUCCESS ALERT ACTION END

    React.useEffect( () =>{
        fetch('http://localhost:8000/comments')
        .then( res => res.json())
        .then(data => setCommentData(data));
    }, [])

    return (
        <ComponentsLayout>
          <Box sx={{ my: 5 }}>
            <Grid container spacing={4}>
                {commentData?.filter((option) => option?.userEmail === user?.email).map((item) => (
                  <Grid item xs={12} md={6} key={item?._id}>
                      <Card sx={{ maxWidth: "full", mb: 2.5 }}>
                        <CardHeader
                          avatar={
                            <Avatar alt="P" src={item?.userImg} />
                          }
                          title={item?.userName}
                        />
                        <CardContent>
                          <Typography variant="body3" color="text.secondary">
                            {item?.text}
                          </Typography>
                        </CardContent>
                        <CardActions sx={{ my: 2.5 }}>
                          <Stack direction="row" spacing={2}>
                            <Button onClick={() => handleSingleView(item?._id)} variant="outlined" size="small" color="secondary" endIcon={<SendIcon />}>
                                View
                            </Button>
                            <Button onClick={() => handleSingleEdit(item?._id)} variant="outlined" size="small" color="success" endIcon={<SendIcon />}>
                                Edit
                            </Button>
                            <Button onClick={() => handleDelete(item?._id)} variant="outlined" size="small" color="error" startIcon={<DeleteIcon />}>
                                Delete
                            </Button>
                          </Stack>
                        </CardActions>
                      </Card>
                  </Grid>
                ))}
            </Grid>
          </Box>
          {/* DELETE DIALOG BOX OPEN */}
        <DeleteDialogBoxOpen deleteOpenBox={deleteOpenBox} handleDeleteNo={handleDeleteNo} handleDeleteYes={handleDeleteYes} />
          {/* DELETE SUCCESS MASSAGE */}
        <Snackbar
            open={snackbarOpen}
            autoHideDuration={6000}
            onClose={handleClose}
            message={massage}
            action={<AlertMessage handleClose={handleClose} />}
        />  
        </ComponentsLayout>
    );
};

export default Review;
