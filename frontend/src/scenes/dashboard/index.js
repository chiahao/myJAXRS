import {Box, Typography, useTheme} from "@mui/material";
import { tokens } from "../../theme";

const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
      <Box m="20px">
          {/* HEADER */}
          <Box display="flex" justifyContent="space-between" alignItems="center">
              <Box mb="30px">
                  <Typography variant="h2" color={colors.grey[100]}>
                      系統總覽
                  </Typography>
                  <Typography variant="h5" color={colors.greenAccent[400]}>
                      顯示所有相關的申請資料
                  </Typography>
              </Box>
          </Box>

          {/* GRID */}
          <Box
              display="grid"
              gridTemplateColumns="repeat(12, 1fr)"
              gridAutoRows="140px"
              gap="20px"
          >
              {/* ROW 1 */}
              <Box
                  gridColumn="span 4"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
              >

              </Box>
          </Box>
      </Box>
    );
}

export default Dashboard;
