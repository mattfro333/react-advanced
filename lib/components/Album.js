import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
// const nirvana = require('../.././public/62132b87818caafb83c402e1847ba360.png');

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  }
});

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Album(props) {
  // console.log(props);
  const { classes } = props;
let img1 = 'http://www.listingmore.com/wp-content/uploads/2017/04/fantastic-melted-crayon-art-ideas/2-best-melted-crayon-art-ideas.jpg';
let img2 = 'http://www.clker.com/cliparts/3/m/v/Y/E/V/small-red-apple-md.png';
let img3 = 'https://upload.wikimedia.org/wikipedia/en/3/3a/Tremonti_Dust_album_cover.jpg';
let img4 = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/4-44_album_cover.png';
let img5 = 'https://mcmasterinnovationpark.ca/userImages/AWP-Image-0818-2-1.JPG';
let img6 = 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_68585523.jpg?auto=format&q=60&fit=max&w=930';
let img7 = 'https://cdn.vox-cdn.com/thumbor/7BIv12_2npCtn5LdJSLp9h8mSgc=/0x109:493x438/920x613/filters:focal(0x109:493x438):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/49449809/Screen_Shot_2016-05-01_at_12.14.34_PM.0.0.png';
let img8 = 'http://2018.zawada.com.au/wp-content/uploads/2018/08/Flume_Skin-1.jpg';
let img9 = 'https://payload.cargocollective.com/1/4/158872/9666476/Tame-Impala-Currents-final-packshot-1200px_800.jpg';
let img10 = 'https://img.apmcdn.org/4f25ecdbbd7af5fed833153302515a94c990de11/uncropped/0a0f13-20130508-favorite-album-covers.jpg';
// let img11 = nirvana;
let array  = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
let image = '';
classes.image = image;
classes.src = array;
const set = function set(x, image){ if(x) return classes.image = array[x-1] }
console.log(CardActions);
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              PitchFork
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Top 10 Album Reviews
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                </Grid>
                <Grid item>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40}>
            {cards.map(card => (
              set(card, image),
              <Grid item key={card} sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={classes.image}
                    title="Image title"
                  />

                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button src={'https://pitchfork.com/'} size="small" color="primary">
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Album);
