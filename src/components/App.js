import React, {useState} from "react";
import { withStyles } from "@material-ui/core/styles";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ImageIcon from "@material-ui/icons/Image";
import Button from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import { Paper, Typography, Grid, Card, CardHeader, CardContent, Avatar, List, ListItem, ListItemText, IconButton } from "@material-ui/core";

import App2 from './App2.js';
import Upload from './Upload.js';

const styles = () => ({
  root: {
    padding: "1px 50px",
    zIndex: 999,
    position: "absolute"
  },
  card: {
    display: "flex",
    height: "calc(600vh - 100px)"
  },
  rightBorder: {
    borderRight: "solid #d0D0D0 1px"
  },
  content: {
    marginTop: 0  },

  background: {
    position: "absolute", height: "300%", width: "100%", top: 0,  background: "#1a832e" 
  },

 // rightContainer: { 
 //   background: "url(https://cdn.pixabay.com/photo/2014/11/21/17/27/frog-540812_960_720.jpg) center center",
 //  flex: 1   },
//

// ===========================================

rightContainer: {  },
  
  heightAdjust: {
    display: "flex",
    background: "#e4f4e6 ",
    flexDirection: "column"   },

  paper: {
    background: "#d6f9dd",
    padding: 10   },

  information: {
    color: "#1a832e"   }
});

// ===========================================

const tela = ({ classes }) => (
  <div>
    <div className={classes.background} />
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Card className={classes.card}>
          <Grid container>
            <LeftContainer classes={classes} />
            <RightContainer classes={classes} />
          </Grid>
        </Card>
      </Grid>
    </Grid>
  </div>
);

const list = [
  { id: 1, name: "Leeminho20208     Seguindo", text: "Ator Coreano", image: <img src="./leeminho.png" alt=" " /> },
  { id: 2, name: "Janete Amaral", text: "Lorem ipsum", image: <WorkIcon /> },
  { id: 3, name: "Joana Acioly", text: "Lorem ipsum", image: <BeachAccessIcon /> }
];

const RightContainer = ({ classes }) => 
(
  <Grid item xs={4}>
    <CardHeader
      className={classes.rightBorder}
      avatar={
        <Avatar aria-label="Recipe" className={classes.avatar}>
         --  </Avatar>
           }
        />
    <CardHeader
      className={classes.rightBorder} >
        <Upload />
        
      </CardHeader>

    <Paper className={classes.paper} elevation={0}>
      <Typography className={classes.information} variant="subtitle2">
        Acesse nossa comunidade PhotoGrove e fique por dentro das novidades!
      </Typography>
    </Paper>

    <List>
      {list.map(item => (
        <ListItem>
          <Avatar>{item.image}</Avatar>
          <ListItemText primary={item.name} secondary={item.text} />
        </ListItem>
      ))}
    </List>

  </Grid>
);

// =======

const LeftContainer = ({ classes }) => (
  <Grid className={classes.heightAdjust} item xs={8}>
    <CardHeader
      avatar={
        <Avatar aria-label="Recipe" className={classes.avatar}>
          <ImageIcon />
        </Avatar>
      }
      action={
        <IconButton>
        <MoreVertIcon />
        </IconButton>
      }
      title="PhotoGrove - Compartilhamento de fotos e vídeos"
    />
    <CardContent className={[classes.rightContainer, classes.content]} />
    <App2 />
  </Grid>
);
export default withStyles(styles)(tela);