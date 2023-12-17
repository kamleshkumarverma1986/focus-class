import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardWidget from './CardWidget';
import { Container } from '@mui/material';

export default function CardContainer() {
  return (
    <Container>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={12} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(Array(6)).map((_, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <CardWidget />
                    </Grid>
                ))}
            </Grid>
        </Box>
    </Container>
    
  );
}