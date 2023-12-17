import { Box } from '@mui/material';
import LogoImg from "../public/images/logo.png"

const Logo = (props) => {
    return (
        <Box
            component="img"
            sx={{ display: "flex", height: 50, width: "auto", cursor: "pointer" }}
            alt="Focus-Class"
            src={LogoImg.src}
            {...props}
        >
        </Box>
    )
}

export default Logo;