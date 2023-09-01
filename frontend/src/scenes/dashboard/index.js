import {Box, Typography, useTheme} from "@mui/material";
import { tokens } from "../../theme";
import StateBox from "../../components/StateBox";
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import InventoryIcon from '@mui/icons-material/Inventory';

const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
      <Box m="20px">
          {/* HEADER */}
          <Box display="flex" justifyContent="space-between" alignItems="center">
              <Box mb="30px">
                  <Typography variant="h2" color={colors.grey[100]} sx={{ m: "0 0 10px 0"}}>
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
                  border="1"
                  borderColor="green"
              >
                  <StateBox
                      title="待簽核"
                      icon={
                        <NoteAltIcon
                            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                        />
                      }
                      amount={5}
                  >
                  </StateBox>
              </Box>
              <Box
                  gridColumn="span 4"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border="1"
                  borderColor="green"
              >
                  <StateBox
                      title="本月已簽核"
                      icon={
                          <InventoryIcon
                              sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                          />
                      }
                      amount={0}
                  >
                  </StateBox>
              </Box>
              <Box
                  gridColumn="span 4"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border="1"
                  borderColor="green"
              >
                  <StateBox
                      title="全部已簽核"
                      icon={
                          <InventoryIcon
                              sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                          />
                      }
                      amount={'99+'}
                  >
                  </StateBox>
              </Box>
          </Box>
      </Box>
    );
}

export default Dashboard;
