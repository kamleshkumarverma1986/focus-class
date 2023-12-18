import * as React from "react";
import { useFormStatus } from "react-dom";
import SendIcon from '@mui/icons-material/Send';
import Button from "@mui/material/Button";

export default function FormSubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" size="large" variant="outlined" endIcon={<SendIcon />} disabled={pending}>
            {pending ? "Submitting..." : "Submit"}
        </Button>
    )
}