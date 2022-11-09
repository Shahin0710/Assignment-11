import { Box, Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import * as React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useNavigate } from 'react-router-dom';
import ComponentsLayout from './ComponentsLayout';
import PageTitle from './PageTitel';

const Home = function () {
    PageTitle('Home');
    const navigate = useNavigate();
    const [loadData, setLoadData] = React.useState([]);

    const handleSingleView = (id) =>{
        navigate(`/single_service/${id}`);
    }

    React.useEffect( () =>{
        fetch('http://localhost:8000/service_limit')
        .then( res => res.json())
        .then(data => setLoadData(data));
    }, [])

    return (
        <ComponentsLayout>
          <Box sx={{ my: 5 }}>
            <Grid container direction="row" spacing={4}>
            {loadData?.map((item) => (
              <Grid item xs={12} md={4} key={item?._id}>
                  <Card sx={{ maxWidth: 345 }}>
                  <PhotoProvider>
                    <div className="foo">
                        <PhotoView src={item?.img}>
                          <CardMedia
                            component="img"
                            height="580"
                            image={item?.img}
                            alt={item?.name}
                            sx={{ cursor: "pointer" }}
                          />
                        </PhotoView>
                    </div>
                  </PhotoProvider>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item?.name}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div" color="error">
                        100 pitches only ${item?.price}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item?.description.length > 100 ? item?.description.slice(0, 90).concat('...') : item?.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="large" onClick={() => handleSingleView(item?._id)}>View</Button>
                    </CardActions>
                  </Card>
              </Grid>
            ))}
            </Grid>
            <Box display="flex" justifyContent="center" sx={{ my: 5 }}>
                <Button onClick={() => navigate('/all_service')} variant="contained" color="secondary" size="large">
                    See All
                </Button>
            </Box>
          </Box>
        </ComponentsLayout>
    );
};

export default Home;
