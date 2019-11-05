import { withStyles } from '@material-ui/core/styles';

const styles = withStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default styles;