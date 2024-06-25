import React, { useState } from 'react';
import { Container, Grid, TextField, Button, Typography } from '@mui/material';
import blueImage from './welcome.png';

const Login = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <div className="grid-container">
            <div className="sidebar" style={{ backgroundImage: `url(${blueImage})` }}>
                <h2>LOGIN NOW</h2>
            </div>
            <div className="main-content">
                <Container maxWidth="sm" className="Container">
                    <Typography variant="h4">User Login</Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    name="email"
                                    label="Email"
                                    type="email"
                                    fullWidth
                                    margin="normal"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="password"
                                    label="Password"
                                    type="password"
                                    fullWidth
                                    margin="normal"
                                    value={form.password}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit" variant="contained" color="primary" fullWidth>
                                    Login
                                </Button>
                                <Button type="reset" variant="outlined" color="secondary" fullWidth>
                                    Reset
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
            </div>
        </div>
    );
};

export default Login;
