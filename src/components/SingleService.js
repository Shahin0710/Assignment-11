import { Box, Grid, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import ComponentsLayout from './ComponentsLayout';
import DialogBox from './DialogBox';

const SingleService = () => {
    const {user} = React.useContext(AuthContext);
    const navigate = useNavigate();
    const serviceId = useParams();
    const [loadData, setLoadData] = React.useState({});

    // DIALOG BOX OPEN FUNCTION START 
    const [dialogOpen, setDialogOpen] = React.useState(false);

    const handleDialogOpen = () => {
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    const handleLogin = () => {
        setDialogOpen(false);
        navigate('/login');
    };
    // DIALOG BOX OPEN FUNCTION END 

      React.useEffect( () =>{
        fetch(`http://localhost:8000/service/${serviceId?.id}`)
        .then( res => res.json())
        .then(data => setLoadData(data));
    }, [])
    
    return (
        <ComponentsLayout>
          <Box sx={{ my: 5 }}>
            <Grid container spacing={4}>
              {/* SINGLE SERVICE VIEW SECTION  */}
             <Grid item xs={12} md={4}>
                  <Card sx={{ maxWidth: "full" }}>
                    <CardMedia
                      component="img"
                      height="full"
                      image={loadData?.img}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {loadData?.name}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div" color="error">
                        100 pitches only ${loadData?.price}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {loadData?.description}
                      </Typography>
                    </CardContent>
                      <Box display="flex" justifyContent="center" sx={{ mx: 2.5, mb: 2.5 }}>
                        {user?.email ? 
                            <Button onClick={() => navigate('/add_review')} fullWidth variant="contained">Add Review</Button>
                            :
                            <Button onClick={handleDialogOpen} fullWidth variant="contained">Add Review</Button>
                        }
                      </Box>
                  </Card>
              </Grid>
              {/* REVIEW SECTION  */}
              <Grid item xs={12} md={8}>
                  <Card sx={{ maxWidth: "full" }}>
                    <CardHeader
                      avatar={
                        <Avatar alt="P" src="/static/images/avatar/1.jpg" />
                      }
                      title={loadData?.name}
                    />
                    <CardContent>
                      <Typography variant="body3" color="text.secondary">
                        {loadData?.description}
                      </Typography>
                    </CardContent>
                  </Card>
              </Grid>
            </Grid>
          </Box>
          <DialogBox dialogOpen={dialogOpen} handleDialogClose={handleDialogClose} handleLogin={handleLogin}/>
        </ComponentsLayout>
    );
};

export default SingleService;
