import React from 'react';
// import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core/styles';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memories.png';
// import useStyles from './styles'

const App = () => {

    // const classes = useStyles();
    // return (
    //     <Container maxwidth="lg">
    //         <AppBar position="static" color="inherit">
    //             <Typography variant="h2" align="center">Memories</Typography>
    //             <img src={memories} alt="memories" height="60" />
    //         </AppBar>
    //         <Grow in>
    //             <Container>
    //                 <Grid container justify="space-between" alignItems="stretch" spacing="{3}">
    //                     <Grid item xs={12} sm={7}>
    //                         <Posts />
    //                     </Grid>
    //                     <Grid item xs={12} sm={4}>
    //                         <Form />
    //                     </Grid>
    //                 </Grid>
    //             </Container>
    //         </Grow>
    //     </Container>
    // )
    return (
        <div className="container">
            <div className="title">
                <h1>MEMORIES</h1>
            </div>
            <img src={memories} alt="" />
            <div className="grow">
                <div className="container">
                    <div className="item">
                        <h4>Posts</h4>
                    </div>
                    <div className="item">
                        <h5>Post</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;