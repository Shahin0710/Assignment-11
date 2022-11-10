import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import { useParams } from 'react-router-dom';
import ComponentsLayout from './ComponentsLayout';
import PageTitle from './PageTitel';

const ViewReview = () => {
    PageTitle('Review');
    const serviceId = useParams();
    const [loadData, setLoadData] = React.useState({});

    React.useEffect( () =>{
        fetch(`https://service-review-server-side-weld.vercel.app/comments/${serviceId?.id}`)
        .then( res => res.json())
        .then(data => setLoadData(data));
    }, [])

    // console.log(loadData);

  return (
    <ComponentsLayout>
        <Typography variant="h4" color="error" align="center" gutterBottom>
            View Review
        </Typography>
          <Box sx={{ my: 8, mx: 4 }}>
              <Typography variant="h5" align="center">
                Your Name: {loadData?.userName}
              </Typography>
              <Typography variant="h5" align="center">
                Your Email: {loadData?.userEmail}
              </Typography>
              <Typography variant="h5" align="center">
                Your Comment: {loadData?.text}
              </Typography>
          </Box>
    </ComponentsLayout>
  )
}

export default ViewReview;


