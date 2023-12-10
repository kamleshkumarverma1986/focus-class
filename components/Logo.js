import { Box } from '@mui/material';
import LogoImg from "../public/images/logo.png"

const Logo = (props) => {
    return (
        <Box
            component="img"
            sx={{ display: "flex", height: 68, width: "auto" }}
            alt="Focus-Class"
            src={LogoImg.src}
            {...props}
        >
        </Box>
    )
}

export default Logo;