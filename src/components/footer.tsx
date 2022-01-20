import React from "react"
import { Box, Container, Grid, Hidden, IconButton, Icon, Link, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link as GatsbyLink } from 'gatsby'
import WhiteLogo from './white-logo'

const useStyles = makeStyles((theme) => ({
  footer: {
    background: '#27378f',
    color: 'white',
  },
  grid: {
    margin: theme.spacing(0),
    flexGrow: 0,
    maxWidth: `100%`,
    flexBasis: `100%`
  }
}));

const Copyright = () =>
  <Typography variant='caption'>
    <br/>
    Copyright © NUS Students' Computing Club ·&nbsp;
    <Link component={GatsbyLink} to="/privacy" style={{color: 'white'}}>Privacy Policy</Link>
    <br/>
    Page designed by <Link target='_blank' rel="noreferrer" href='https://github.com/rish-16' style={{color: 'white', fontWeight: 'bold'}}>24th MC Tech Leads</Link>
  </Typography>;

const Footer: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.only('lg'));
  const lgDown = useMediaQuery(theme.breakpoints.down('lg'));
  return <footer className={classes.footer}>
    <Container fixed maxWidth={lgDown ? 'md' : 'lg'} disableGutters>
      <Box mt={4} p={4}></Box>
      <Grid container spacing={4} className={classes.grid}>
        <Grid item xs={12} lg={6} xl={4}>
          <Box pr={lg ? 1 : !lgDown ? 2 : 0}>
            <WhiteLogo></WhiteLogo>
            <IconButton aria-label="facebook" target='_blank' rel='noreferrer' href='https://www.facebook.com/nuscomputing'>
              <Icon className="fab fa-facebook" style={{ color: 'white' }} ></Icon>
            </IconButton>
            <IconButton aria-label="instagram" target='_blank' rel='noreferrer' href='https://www.instagram.com/NUSComputingClub'>
              <Icon className="fab fa-instagram" style={{ color: 'white' }} ></Icon>
            </IconButton>
            <IconButton aria-label="telegram" target='_blank' rel='noreferrer' href='https://t.me/nuscomputingclub'>
              <Icon className="fab fa-telegram" style={{ color: 'white' }} ></Icon>
            </IconButton>
            <IconButton aria-label="youtube" target='_blank' rel='noreferrer' href='https://www.youtube.com/channel/UCVd-qsSFF328UUqcNxudy0w'>
              <Icon className="fab fa-youtube" style={{ color: 'white' }} ></Icon>
            </IconButton>
            <IconButton aria-label="github" target='_blank' rel='noreferrer' href='https://github.com/NUSComputingDev'>
              <Icon className="fab fa-github" style={{ color: 'white' }} ></Icon>
            </IconButton>
            <IconButton aria-label="email" href='mailto:connect@nuscomputing.com'>
              <Icon className="fas fa-envelope" style={{ color: 'white' }} ></Icon>
            </IconButton>
            <Hidden smDown>
              <Copyright></Copyright>
            </Hidden>
          </Box>
        </Grid>
        <Grid item sm={12} md={6} xl={4}>
          <Box pl={lg || !lgDown ? 1 : 0} pr={!lgDown ? 1 : 0}>
            <Typography variant='h6'>
              Have feedback? Send it our way!
            </Typography>
            <Typography variant='body1'>
              <a target="_blank" style={{ "color": "white", "textDecoration": "none"}} href="feedback.nuscomputing.com">feedback.nuscomputing.com</a>
              {/* feedback.nuscomputing.com */}
            </Typography>
          </Box>
        </Grid>
        <Hidden mdDown xlUp>
          <Grid item md={6}></Grid>
        </Hidden>
        {/* <Grid item sm={12} md={6} xl={4}>
          <Box pl={lg || !lgDown ? 1 : 0}>
            <Box mt={0}>
              <Typography variant='h6'>
                Vision
              </Typography>
              <Typography variant='body1'>
                NUS Students’ Computing Club serves to continually support our faculty, to build close-knitted relationships
                among Computing Club members past and present and drive the charge for campus vibrancy.
              </Typography>
            </Box>
            <Box mt={4}>
              <Typography variant='h6'>
                Mission
              </Typography>
              <Typography variant='body1'>
                NUS Students’ Computing Club’s mission is to lead the strive for excellence and to continually advance,
                for the needs and welfare of our fellow students.
              </Typography>
            </Box>
          </Box>
        </Grid> */}
        <Grid item xs={12}>
          <Hidden mdUp>
              <Copyright></Copyright>
          </Hidden>
        </Grid>
      </Grid>
    </Container>
  </footer>
} 

export default Footer
