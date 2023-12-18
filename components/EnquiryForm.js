"use client";

import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Container from '@mui/material/Container';

export default function EnquiryForm() {
  const [selectedCourse, setSelectedCourse] = React.useState("");

  const courses = ["10th", "11th"];

  return (
    <Container>
        <Paper square variant="outlined" sx={{padding: {xs: "20px", md: "30px"}}}>
            <Typography variant="h4" sx={{marginBottom: "10px"}}>
                Enquiry Form
            </Typography>
            <Grid container spacing={6}>
                <Grid item xs={12} md={6}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="fullName"
                                name="fullName"
                                label="Full Name"
                                fullWidth
                                size="small"
                                autoComplete="off"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="email"
                                name="email"
                                label="Email"
                                type="email"
                                fullWidth
                                size="small"
                                autoComplete="off"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="schoolName"
                                name="schoolName"
                                label="School Name"
                                fullWidth
                                size="small"
                                autoComplete="off"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button size="large" variant="outlined">Submit</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="mobileNumber"
                                name="mobileNumber"
                                label="Mobile Number"
                                fullWidth
                                size="small"
                                autoComplete="off"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="address"
                                name="address"
                                label="Address"
                                fullWidth
                                size="small"
                                autoComplete="off"
                                variant="standard"
                                multiline
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth size="small" variant="standard">
                                <InputLabel id="demo-simple-select-label">Course</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={selectedCourse}
                                    label="Select Course"
                                    onChange={(e) => {
                                        setSelectedCourse(e.target.value);
                                    }}
                                    >
                                    {courses.map((course, index) => (
                                        <MenuItem key={index} value={course}>{course}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    </Container>
  );
}
