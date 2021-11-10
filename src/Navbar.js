import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { LanguageContext } from './context/LanguageContext';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/NavBarStyles';

const content = {
    english: {
        search: 'Search',
        flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    },
    french: {
        search: 'Chercher',
        flag: '🇫🇷',
    },
    spanish: {
        search: 'Buscar',
        flag: '🇬🇹',
    },
}


function Navbar(props)  {
        const { isDarkMode, toggleTheme } = useContext(ThemeContext);
        const { language } = useContext(LanguageContext);
        const { classes } = props;
        const { search, flag } = content[language];
        return (
            <div className={classes.root}>
                <AppBar title="Navbar" position="static" color={isDarkMode ? "default" : "primary"}>
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <span>{flag}</span>
                        </IconButton>
                        <Typography 
                            className={classes.title} 
                            variant="h6" 
                            color="inherit" 
                            noWrap>
                                App title
                        </Typography>
                        <Switch onChange={toggleTheme}/>
                        <div className={classes.grow} />
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder={`${search}...`} classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}/>
                        </div>
                    </Toolbar>
                </AppBar>         
            </div>
        )
    }

export default withStyles(styles)(Navbar);
