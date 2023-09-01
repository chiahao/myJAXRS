import {Box, Typography, useTheme} from "@mui/material";
import { tokens } from "../theme";

const StateBox = ({title, icon, amount}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box width="100%" m="0 30px">
            <Box display="flex" justifyContent="space-between">
                <Box display="flex" sx={{ verticalAlign: 'center'}}>
                    <Box>
                        {icon}
                        <Typography
                            variant="h4"
                            sx={{ color: colors.grey[100] }}
                        >
                            {title}
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography
                        variant="h2"
                        sx={{ display: "block", color: colors.grey[100] }}
                    >
                        {amount}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default StateBox;