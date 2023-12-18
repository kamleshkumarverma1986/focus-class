import { Paper, Container, Box, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Paper sx={{
            marginTop: 'calc(10% + 60px)',
            width: '100%',
            position: 'fixed',
            bottom: 0,
            width: '100%',
            zIndex: 9999,
        }} square variant="outlined">
            <Container maxWidth="lg">
                <Box
                    sx={{
                        flexGrow: 1,
                        justifyContent: "center",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Typography variant="caption" color="initial">
                        Copyright ©2023. Focus Class Limited
                    </Typography>
                </Box>
            </Container>
        </Paper>
    );
}