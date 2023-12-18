'use client'

import { useFormStatus } from 'react-dom'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
 
export function FormSubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="large" variant="outlined" endIcon={<SendIcon />} disabled={pending}>
        {pending? "Submitting...": "Submit"}
    </Button>
  )
}