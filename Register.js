import React, { useState } from 'react';
import {
    Container,
    Grid,
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    FormGroup,
    FormLabel,
    RadioGroup,
    Radio,
    Select,
    MenuItem,
    InputLabel,
    Typography,
    TextareaAutosize,
} from '@mui/material';
import blueImage from './welcome.png';

const Register = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
        email: '',
        phone: '',
        dob: '',
        gender: '',
        hobbies: {
            reading: false,
            traveling: false,
            cooking: false,
            other: false,
        },
        profilePicture: null,
        country: '',
        bio: '',
        agree: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setForm((prevForm) => ({
                ...prevForm,
                hobbies: {
                    ...prevForm.hobbies,
                    [name]: checked,
                },
            }));
        } else if (type === 'file') {
            setForm((prevForm) => ({
                ...prevForm,
                profilePicture: e.target.files[0],
            }));
        } else {
            setForm((prevForm) => ({
                ...prevForm,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <div className="grid-container">
            <div className="sidebar" style={{ backgroundImage: `url(${blueImage})` }}>
                <h2>REGISTER NOW</h2>
            </div>
            <div className="main-content">
                <Container maxWidth="md" className="Container">
                    <Typography variant="h4">Registration Form</Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="firstName"
                                    label="Full Name"
                                    fullWidth
                                    margin="normal"
                                    value={form.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="lastName"
                                    label="Username"
                                    fullWidth
                                    margin="normal"
                                    value={form.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
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
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    type="password"
                                    fullWidth
                                    margin="normal"
                                    value={form.confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="email"
                                    label="Email Address"
                                    type="email"
                                    fullWidth
                                    margin="normal"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="phone"
                                    label="Phone Number"
                                    type="tel"
                                    fullWidth
                                    margin="normal"
                                    value={form.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="dob"
                                    label="Date of Birth"
                                    type="date"
                                    InputLabelProps={{ shrink: true }}
                                    fullWidth
                                    margin="normal"
                                    value={form.dob}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormLabel component="legend">Gender</FormLabel>
                                <RadioGroup
                                    name="gender"
                                    value={form.gender}
                                    onChange={handleChange}
                                    row
                                >
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </Grid>
                            <Grid item xs={12}>
                                <FormLabel component="legend">Hobbies</FormLabel>
                                <FormGroup row>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={form.hobbies.reading}
                                                onChange={handleChange}
                                                name="reading"
                                            />
                                        }
                                        label="Reading"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={form.hobbies.traveling}
                                                onChange={handleChange}
                                                name="traveling"
                                            />
                                        }
                                        label="Traveling"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={form.hobbies.cooking}
                                                onChange={handleChange}
                                                name="cooking"
                                            />
                                        }
                                        label="Cooking"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={form.hobbies.other}
                                                onChange={handleChange}
                                                name="other"
                                            />
                                        }
                                        label="Other"
                                    />
                                </FormGroup>
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" component="label">
                                    Upload Profile Picture
                                    <input type="file" hidden onChange={handleChange} name="profilePicture" />
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <InputLabel id="country-label">Country</InputLabel>
                                <Select
                                    labelId="country-label"
                                    name="country"
                                    value={form.country}
                                    onChange={handleChange}
                                    fullWidth
                                >
                                    <MenuItem value="USA">USA</MenuItem>
                                    <MenuItem value="Canada">Canada</MenuItem>
                                    <MenuItem value="UK">UK</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item xs={12}>
                                <TextareaAutosize
                                    name="bio"
                                    minRows={3}
                                    placeholder="Bio"
                                    style={{ width: '100%', marginTop: '16px' }}
                                    value={form.bio}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox checked={form.agree} onChange={handleChange} name="agree" />}
                                    label="I agree to all Terms and Conditions"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit" variant="contained" color="primary" fullWidth>
                                    Register
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

export default Register;
