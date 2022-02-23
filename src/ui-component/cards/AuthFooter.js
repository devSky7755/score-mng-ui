// material-ui
import { Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION ||============================== //

const AuthFooter = () => (
    <Stack direction="row" justifyContent="space-between">
        <Typography variant="subtitle2" component={Link} href="https://test.ui" target="_blank" underline="hover">
            test.ui
        </Typography>
    </Stack>
);

export default AuthFooter;
