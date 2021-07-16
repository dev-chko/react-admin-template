import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import TrendingFlat from '@material-ui/icons/TrendingFlat';

const useStyles = makeStyles(theme => ({
    root: {
        padding: 30,
    },
}));

function Posts(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                {posts.map(post => (
                    <Grid item xs={16} sm={6} md={4} key={post.title}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Post Image"
                                    height="160"
                                    image={post.image}
                                    title="Post Image"
                                />
                                <CardContent>
                                    <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                                        REACT 01
                                    </Typography>
                                    <Typography variant="h5" component="h2" gutterBottom>
                                        {post.title}
                                    </Typography>
                                    <Typography variant="body2" component="p">{post.excerpt}</Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Read More <TrendingFlat/>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Posts;