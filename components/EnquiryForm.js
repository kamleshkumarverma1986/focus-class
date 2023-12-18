"use client";

import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Container from '@mui/material/Container';
import DialogBox from "./DialogBox";
import { useFormState } from "react-dom";
import { addEnquiry } from "@/actions/addEnquiry";
import FormSubmitButton from "./FormSubmitButton";

export default function EnquiryForm() {
  const formRef = React.useRef(null);
  const [state, formAction] = useFormState(addEnquiry, null);
  const [isOpen, setIsOpen] = React.useState(false);

  const [selectedClass, setSelectedClass] = React.useState("");
  const [selectedBoard, setSelectedBoard] = React.useState("");
  const [selectedGoal, setSelectedGoal] = React.useState("");

  React.useEffect(() => {
    if (state) {
        setIsOpen(true);
    }
  }, [state]);

  const classes = ["8th", "9th", "10th", "11th", "12th", "Other"];
  const boards = ["CBSE", "Other"];
  const goals = [
    "8th",
    "9th",
    "10th (NTSE)",
    "11th (JEE or NEET)",
    "12th (JEE or NEET)",
    "Dropper (JEE or NEET)",
    "Medical or Engineering",
  ];

  return (
    <Container>
        <Paper square variant="outlined" sx={{padding: {xs: "20px", md: "30px"}}}>
            <Typography variant="h4" sx={{marginBottom: "10px"}}>
                Enquiry Form
            </Typography>
            <form ref={formRef} action={async (formData) => {
                await formAction(formData);
                formRef?.current?.reset();
                setSelectedClass("")
                setSelectedBoard("");
                setSelectedGoal("");
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    required
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
                                    name="email"
                                    label="Email ID"
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
                                    name="address"
                                    label="Address"
                                    fullWidth
                                    size="small"
                                    autoComplete="off"
                                    variant="standard"
                                    multiline
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    name="schoolName"
                                    label="School Name"
                                    fullWidth
                                    size="small"
                                    autoComplete="off"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth size="small" variant="standard">
                                    <InputLabel id="currentClassId">Current Class</InputLabel>
                                    <Select
                                        labelId="currentClassId"
                                        name="currentClass"
                                        label="Current Class"
                                        value={selectedClass}
                                        onChange={(e) => setSelectedClass(e.target.value)}
                                        required
                                    >
                                        <MenuItem value={""}>Select Option</MenuItem>
                                        {classes.map((className, index) => (
                                            <MenuItem key={index} value={className}>{className}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth size="small" variant="standard">
                                    <InputLabel id="currentBoardId">Current Board</InputLabel>
                                    <Select
                                        labelId="currentBoardId"
                                        name="currentBoard"
                                        label="Current Board"
                                        value={selectedBoard}
                                        onChange={(e) => setSelectedBoard(e.target.value)}
                                        required
                                     >
                                        <MenuItem value={""}>Select Option</MenuItem>
                                        {boards.map((board, index) => (
                                            <MenuItem key={index} value={board}>{board}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth size="small" variant="standard">
                                    <InputLabel id="goalId">Goal</InputLabel>
                                    <Select
                                        labelId="goalId"
                                        name="goal"
                                        label="Goal"
                                        value={selectedGoal}
                                        onChange={(e) => setSelectedGoal(e.target.value)}
                                        required
                                    >
                                        <MenuItem value={""}>Select Option</MenuItem>
                                        {goals.map((goal, index) => (
                                            <MenuItem key={index} value={goal}>{goal}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <FormSubmitButton />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </Paper>
        <DialogBox
            isOpen={isOpen}
            handleClose={() => setIsOpen(false)}
            dialogTitle="Thanks for your enquiry!"
            dialogContentText="Thank you for your message. Our team will get back to you soon."
        />
    </Container>
  );
}
