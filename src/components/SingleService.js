import { Box, Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import ComponentsLayout from './ComponentsLayout';

const SingleService = () => {
    const serviceId = useParams();
    const [loadData, setLoadData] = React.useState({});

      React.useEffect( () =>{
        fetch(`http://localhost:8000/service/${serviceId?.id}`)
        .then( res => res.json())
        .then(data => setLoadData(data));
    }, [])
    
    return (
        <ComponentsLayout>
          <Box display="flex" justifyContent="center" sx={{ my: 5 }}>
             <Grid item xs={12}>
                  <Card sx={{ maxWidth: 345 }}>
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
                  </Card>
              </Grid>
          </Box>
        </ComponentsLayout>
    );
};

export default SingleService;
