import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import { Box, Grid, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Collapse from '@mui/material/Collapse';
import { red } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import ComponentsLayout from './ComponentsLayout';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Blog = () => {
  const [expandedOne, setExpandedOne] = React.useState(false);
  const [expandedTwo, setExpandedTwo] = React.useState(false);
  const [expandedThree, setExpandedThree] = React.useState(false);
  const [expandedFour, setExpandedFour] = React.useState(false);

  const handleExpandClickOne = () => {
    setExpandedOne(!expandedOne);
  };

  const handleExpandClickTwo = () => {
    setExpandedTwo(!expandedTwo);
  };

  const handleExpandClickThree = () => {
    setExpandedThree(!expandedThree);
  };

  const handleExpandClickFour = () => {
    setExpandedFour(!expandedFour);
  };

  return (
    <ComponentsLayout>
      <Box sx={{ mt: 5 }}>
        <Grid container spacing={4}>
            {/* Difference between SQL and NoSQL */}
            <Grid item xs={12}>
              <Card sx={{ mb: 5 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      Q.
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="What is the difference between SQL and NoSQL?"
                  subheader="September 14, 2022"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Please share if you like.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <ExpandMore
                    expand={expandedOne}
                    onClick={handleExpandClickOne}
                    aria-expanded={expandedOne}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expandedOne} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography variant="h5" sx={{ mb: 5 }}>
                      What is the difference between SQL and NoSQL?
                    </Typography>
                    <Typography paragraph>
                      When it comes to choosing a database the biggest decisions is picking a relational (SQL) or non-relational (NoSQL) data structure. While both the databases are viable options still there are certain key differences between the two that users must keep in mind when making a decision. 
                    </Typography>
                    <Typography paragraph>
                      SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system. 
                        A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. This flexibility means that documents can be created without having defined structure first. Also each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go. 
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>

            {/* What is JWT, and how does it work */}
            <Grid item xs={12}>
              <Card sx={{ mb: 5 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      Q.
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="What is JWT, and how does it work?"
                  subheader="October 10, 2022"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Please share if you like.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <ExpandMore
                    expand={expandedTwo}
                    onClick={handleExpandClickTwo}
                    aria-expanded={expandedTwo}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expandedTwo} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography variant="h5" sx={{ mb: 5 }}>
                       What is JWT, and how does it work?
                    </Typography>
                    <Typography paragraph>
                      The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. 
                      JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.
                    </Typography>
                    <Typography paragraph>
                        Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>

            {/* What is the difference between javascript and NodeJS */}
            <Grid item xs={12}>
              <Card sx={{ mb: 5 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      Q.
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="What is the difference between javascript and NodeJS?"
                  subheader="October 10, 2022"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Please share if you like.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <ExpandMore
                    expand={expandedThree}
                    onClick={handleExpandClickThree}
                    aria-expanded={expandedThree}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expandedThree} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography variant="h5" sx={{ mb: 5 }}>
                      What is the difference between javascript and NodeJS?
                    </Typography>
                    <Typography paragraph>
                        JavaScript’s first version was launched in 1995 and it was developed by Brendan Eich of Netscape (then called LiveScript). As discussed earlier, JavaScript is a high-level programming language that has all the functionalities normally a programming language has. JavaScript is an Object-oriented programming language that can be used on the client-side as well as on the server-side and developers not only use it for creating web pages but also it is used for game development and mobile app development.
                    </Typography>
                    <Typography paragraph>
                        Node.js was first introduced in 2009 developed by Ryan Dahl and is a runtime environment for JavaScript built on Google’s v8 engine whose main purpose is to run JavaScript on the server and hence JavaScript can be executed outside of the browser. The nicest part about Node.js is that it never blocks I/O, is event-driven, and can be used to create highly scalable apps. In Node.js everything is a module and using these modules developers make use of Node.js in creating web APIs, Rest API servers, command-line applications, and real-time chat applications. 
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
            
            {/* How does NodeJS handle multiple requests at the same time? */}
            <Grid item xs={12}>
              <Card sx={{ mb: 5 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      Q.
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="How does NodeJS handle multiple requests at the time?"
                  subheader="December 05, 2021"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Please share if you like.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <ExpandMore
                    expand={expandedFour}
                    onClick={handleExpandClickFour}
                    aria-expanded={expandedFour}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expandedFour} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography variant="h5" sx={{ mb: 5 }}>
                      How does NodeJS handle multiple requests at the same time?
                    </Typography>
                    <Typography paragraph>
                     Given a NodeJS application, since Node is single threaded, say if processing involves a Promise.all that takes 8 seconds, does this mean that the client request that comes after this request would need to wait for eight seconds?
                        No. NodeJS event loop is single threaded. The entire server architecture for NodeJS is not single threaded.
                    </Typography>
                    <Typography paragraph>
                        Before getting into the Node server architecture, to take a look at typical multithreaded request response model, the web server would have multiple threads and when concurrent requests get to the webserver, the webserver picks threadOne from the threadPool and threadOne processes requestOne and responds to clientOne and when the second request comes in, the web server picks up the second thread from the threadPool and picks up requestTwo and processes it and responds to clientTwo. threadOne is responsible for all kinds of operations that requestOne demanded including doing any blocking IO operations.
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
        </Grid>
      </Box>
    </ComponentsLayout>
  )
}

export default Blog;
