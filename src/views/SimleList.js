import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 260,
        backgroundColor: theme.palette.background.paper,
        minHeight: 'calc(100vh - 64px)',
        borderRight: '1px solid #ddd',
    },
}));

export default function SimpleList() {
    const classes = useStyles();

    return (
        <List component="nav" className={classes.root}>
            <ListItem button>
                <ListItemText primary="REACT 01"/>
            </ListItem>

            <ListItem button>
                <ListItemText primary="REACT 02"/>
            </ListItem>

            <ListItem button>
                <ListItemText primary="REACT 03"/>
            </ListItem>
        </List>
    );
}