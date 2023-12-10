

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
    return (
        <Backdrop
            sx={{
                color: '#ffffff',
                zIndex: 999
            }}
            open={true}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    );
};

export default Loading;
