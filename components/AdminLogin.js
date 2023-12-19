"use client"

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Copyright from './Copyright';
import LoadingButton from '@mui/lab/LoadingButton';
import { useFetch } from '@/hooks/useFetch';
import AlertBox from "./AlertBox";

const initialFormData = {
    mobileNumber: "",
    otp: "",
}

export default function AdminLogin() {
    const [isAlertOpen, setIsAlertOpen] = React.useState(false);
    const [alertProps, setAlertProps] = React.useState(null);

    const [sendOtp, isOtpSending, otpData, otpError] = useFetch("/api/send-otp");
    const [adminLogin, isLogging, loginData, loginError] = useFetch("/api/admin-login");

    const [formData, setFormData] = React.useState(initialFormData);
    const [isOtpSent, setIsOtpSent ] = React.useState(false);

    React.useEffect(() => {
        if (otpData) {
            setIsOtpSent(true);
        }
    }, [otpData]);

    React.useEffect(() => {
        if (otpError || loginError) {
            setIsAlertOpen(true);
            setAlertProps(otpError || loginError);
        }
    }, [otpError, loginError]);

    const sendOtpToMobileNumber = () => {
        sendOtp({
            method: "POST",
            body: JSON.stringify({mobileNumber: formData.mobileNumber})
        });
    }

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        if (!isOtpSent) {
            sendOtpToMobileNumber();
        } else {
            adminLogin({
                method: "POST",
                body: JSON.stringify(formData)
            });
        }
    };

    const handleFormChange = (event) => {
        const data = {...formData};
        data[event.target.name] = event.target.value;
        setFormData(data);
    }

    const onMobileNumberChangeHandler = () => {
        setFormData(initialFormData);
        setIsOtpSent(false);
    }

  return (
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Admin Panel Login
          </Typography>
          <Box component="form" onSubmit={handleLoginSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              type="number"
              inputProps={{
                  inputMode: "numeric",
                  onInput: (e) => e.target.value = e.target.value.slice(0, 10),
                  onChange : (e) => {
                      if(e.target.value.length !== 10) {
                          e.target.setCustomValidity('Please enter valid mobile number')
                      } else {
                          e.target.setCustomValidity('')
                      }
                  },
              }}
              margin="normal"
              required
              focused
              fullWidth
              id="mobileNumber"
              name="mobileNumber"
              label="Enter Admin Mobile Number"
              helperText="We will send OTP on your Mobile Number"
              autoComplete="mobileNumber"
              value={formData.mobileNumber}
              onChange={event => handleFormChange(event)}
              disabled={isOtpSent}
            />
            {isOtpSent && (
                <>
                    <TextField
                        variant="standard"
                        type="number"
                        inputProps={{
                            inputMode: "numeric",
                        }}
                        margin="normal"
                        required
                        fullWidth
                        id="otp"
                        label="Enter OTP"
                        name="otp"
                        helperText={`OTP sent to: ${formData.mobileNumber}`}
                        autoComplete="otp"
                        value={formData.otp}
                        onChange={event => handleFormChange(event)}
                        inputRef={input => input && input.focus()}
                    />
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}>
                        <LoadingButton
                            size="small"
                            loading={isOtpSending}
                            variant="text"
                            sx={{ml: 0, textTransform: "capitalize", fontSize: 11, p: 0}}
                            onClick={sendOtpToMobileNumber}
                        >
                            Resend OTP
                        </LoadingButton>
                        <Button
                            size="small"
                            variant="text"
                            sx={{ml: 0, textTransform: "capitalize", fontSize: 11, p: 0}}
                            onClick={onMobileNumberChangeHandler}
                        >
                            Change Mobile Number
                        </Button>
                    </Box>
                </>
            )}
            <LoadingButton
              size="large"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              loading={isLogging || isOtpSending}
            >
              {isOtpSent? "Admin Login": "Send OTP"}
            </LoadingButton>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
        <AlertBox
            isOpen={isAlertOpen}
            handleClose={() => setIsAlertOpen(false)}
            {...alertProps}
        />
      </Container>
  );
}