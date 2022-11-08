import { Box, Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import * as React from 'react';
import ComponentsLayout from './ComponentsLayout';

const Data = [
  {
    "id": "1",
    "category_id": "100",
    "name": "WEDDING / ENGAGEMENT / HOLUD",
    "img": "https://cdn.pixabay.com/photo/2019/04/27/14/00/indian-4160039_960_720.jpg",
    "price": 700,
    "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
   },
  {
    "id": "2",
    "category_id": "200",
    "name": "FASHION / PERSONAL / OUTDOOR",
    "img": "https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_960_720.jpg",
    "price": 450,
    "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
   },
  {
    "id": "3",
    "category_id": "300",
    "name": "BIRTHDAY / KIDS / NEW BORN & BABIES",
    "img": "https://cdn.pixabay.com/photo/2015/06/17/14/01/girl-812482_960_720.jpg",
    "price": 550,
    "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
   },
  {
    "id": "4",
    "category_id": "400",
    "name": "COMMERCIAL / PRODUCT / E-COMMERCE",
    "img": "https://media.istockphoto.com/id/1404648496/photo/woman-selling-her-clothes-online.jpg?s=2048x2048&w=is&k=20&c=BEHLwW7wchDwvLD4zuB9HKHrjqV1GVL4G-aYHZ7RbK0=",
    "price": 600,
    "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
   },
  {
    "id": "5",
    "category_id": "500",
    "name": "SPECIAL OCCASIONS / ANNIVERSARY",
    "img": "https://cdn.pixabay.com/photo/2017/10/26/17/53/wine-2891894_960_720.jpg",
    "price": 420,
    "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
   },
  {
    "id": "6",
    "category_id": "600",
    "name": "CORPORATE EVENTS / PARTY / SEMINAR",
    "img": "https://cdn.pixabay.com/photo/2017/08/06/05/27/people-2589091_960_720.jpg",
    "price": 420,
    "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
   },
]

const Home = function () {
    return (
        <ComponentsLayout>
          <Box sx={{ my: 5 }}>
            <Grid container direction="row" spacing={4}>
            {Data?.map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="580"
                      image={item?.img}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item?.name}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        {item?.price}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item?.description.length > 100 ? item?.description.slice(0, 90).concat('...') : item?.description.name}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="large">View</Button>
                    </CardActions>
                  </Card>
              </Grid>
            ))}
            </Grid>
            <Box display="flex" justifyContent="center" sx={{ my: 5 }}>
                <Button variant="contained" color="secondary" size="large">
                    See All
                </Button>
            </Box>
          </Box>
        </ComponentsLayout>
    );
};

export default Home;
