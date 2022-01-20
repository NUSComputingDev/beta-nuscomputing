import React from 'react'
import BaseContainer from '../components/base-container'
import { Box, Link, Typography, Divider, makeStyles, useTheme } from '@material-ui/core'
import { Alert, AlertTitle } from '@material-ui/lab'
import { Link as GatsbyLink, useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

const useStyles = makeStyles((theme) => ({
  rounded: {
    borderRadius: 16,
  },
  instagramWidget: {
    width: '100%',
    border: '0px',
    overflow: 'hidden',
    margin: 0,
    [theme.breakpoints.down('sm')]: {
      height: '736px',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      height: '1270px',
    },
    [theme.breakpoints.only('xl')]: {
      height: '1800px',
    },
  }
}));

export default function Index() {
  function IndexPage() {
    const theme = useTheme();
    const classes = useStyles(theme);
    return (
      <div>
        <Box mb={8}>
          <Box mb={4}>
            <Typography variant='h3' color='textPrimary'>Welcome to NUS Computing!</Typography>
          </Box>
          {/* <StaticImage
            alt="NUS Computing Banner"
            src="../images/banner.png"
            placeholder="blurred"
            className={classes.rounded}/>
          <Alert severity="warning">
            <AlertTitle><strong>IFG Cancelled</strong></AlertTitle>
            Sadly, IFG recruitment has been halted as IFG has been cancelled.
          </Alert> */}
        </Box>
        <Divider/>
        <Box mt={8}>
          <Box mb={8}>
            <Typography variant='h3'>
              Events
            </Typography>
            <Typography variant='h6'>
              Throughout a typical academic year, we organize various events for our members.
              We have Freshmen Orientation Programmes specially designed to integrate the incoming
              freshmen into NUS, collaborative projects with our professors to provide additional
              assistance to weaker students, celebrations for graduating students, and many more events!
            </Typography>
          </Box>
            <Typography color='primary' variant='h4'>Freshmen Orientation Camps</Typography>
            <Box mt={4} mb={4}>
              <a href='/freshmen'>
                <StaticImage
                  alt="FOP banner"
                  src="../images/fopbanner.jpg"
                  placeholder="blurred"
                  className={classes.rounded} />
              </a>
            </Box>
            <Box mt={2} mb={4}>
              <Alert severity='warning'>
                <AlertTitle><strong>FOP Updates</strong></AlertTitle>
                We will soon update this site with more information on the Freshman Orientation Programme (FOP)
                as we receive information on COVID-19 guidelines from NUSSU and higher management. We appreciate your patience!
              </Alert>
            </Box>
            {/* <Typography variant='h6'>
              Incoming freshman, have a look at our&nbsp;
              <Link color='secondary' component={ GatsbyLink } to='/freshmen'>Freshmen Orientation Projects</Link> we have in store for you!
              <br></br>
              <br></br>
              <b>Kickstart your journey</b> in the School of Computing with our very own
              Freshman Orientation Programmes! With an exciting lineup of events during the summer, from (hybrid) camps to RAG parformances
              to a social night, you will be sure to get a summer's worth of fun with us! So come <u>join us and make everlasting friendships</u> with
              fellow freshmen and seniors alike this summer!
            </Typography> */}
        </Box>
        <Box mt={4}>
          <Divider></Divider>
        </Box>
        <Box mt={8}>
          <Typography variant='h3'>New to NUS?</Typography>
          <Typography variant='h6'>
            Check out our <Link color='secondary' component={ GatsbyLink } to='/guides'>Student Guides</Link> page to orientate yourself around some
            of the facilities and services NUS has to offer!
          </Typography>
        </Box>
        <Box mt={4}>
          <Divider></Divider>
        </Box>
        <Box mt={8}>
          <Box mb={4}>
            <Typography variant='h3'>Instagram</Typography>
            <Typography variant='h6'>
                Check us out at <Link color='secondary' href='https://www.instagram.com/nuscomputingclub/'>@nuscomputingclub</Link>
            </Typography>
          </Box>
          <iframe
            title="nuscomputing's instagram"
            src="https://cdn.lightwidget.com/widgets/2dc5ee7fb15559229812e0469d4f070c.html"
            scrolling="no"
            allowTransparency={true}
            className={classes.instagramWidget}>
          </iframe>
        </Box>
      </div>
    );
  }

  return <BaseContainer title='Home'>
    <IndexPage></IndexPage>
  </BaseContainer>
}
