"use client"

import * as React from 'react';
import Container from '@mui/material/Container';
import { signOut } from 'next-auth/react';
import { Button } from '@mui/material';

export default function AdminDashboard() {
  return (
      <Container component="main" maxWidth="xs">
        <h1> hello this is the dashboard</h1>
        <Button onClick={() => {
            signOut();
        }}>signOut</Button>
      </Container>
  );
}