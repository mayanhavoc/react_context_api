import React, { Component } from 'react';
import { LanguageContext } from './context/LanguageContext';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { CssBaseline } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import { FormControlLabel } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles/FormStyles';

const languages = {
    english: {
        SignIn: 'Sign In',
        email: "Email",
        password: "Password",
        remember: "Remember Me",
    },
    french: {
        SignIn: 'Se connecter',
        email: "Adresse Èlectronique",
        password: "Mot de Passe",
        remember: "Se souvenir de moi",
    },
    spanish: {
        SignIn: 'Iniciar Sesión',
        email: "Correo Electrónico",
        password: "Contraseña",
        remember: "Recuérdame",
    },
};

class Form extends Component {
    static contextType = LanguageContext;
    render() {
        const { language, changeLanguage } = this.context;
        const { classes } = this.props;
        const { SignIn, email, password, remember } = languages[language];
        return (
            <main className={classes.main}>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography variant="h5">{SignIn}</Typography>
                    <Select value={language} onChange={changeLanguage}>
                        <MenuItem value="english">English</MenuItem>
                        <MenuItem value="spanish">Spanish</MenuItem>
                        <MenuItem value="french">French</MenuItem>
                    </Select>
                    <form className={classes.form}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">{email}</InputLabel>
                            <Input id="email" name="email" autoComplete="email" autoFocus />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">{password}</InputLabel>
                            <Input id="password" name="password" autoComplete="password" autoFocus />
                        </FormControl>
                        <FormControlLabel control={<Checkbox value="remember" color="primary" />} label={remember} />
                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                            {SignIn}
                        </Button>
                    </form>
                </Paper>
            </main>
        )
    }
}

export default withStyles(styles)(Form);
