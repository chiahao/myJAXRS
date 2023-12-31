import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataPeople } from "../../data/mockData";

const People = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        // { field: "id", headerName: "ID" },
        { field: "id", headerName: "ID", flex: 0.5 },
        { field: "IDNO", headerName: "身分證字號", flex: 1, cellClassName: "name-column--cell" },
        { field: "NAME", headerName: "姓名" , flex: 1},
        { field: "UNITN2", headerName: "單位", flex: 1, cellClassName: "name-column--cell" },
        {
          field: "STATUS",
          headerName: "目前狀態",
            flex: 1,
            cellClassName: "name-column--cell",
            renderCell: ({ row: { STATUS }}) => {
              return (
                <Box>
                    <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                        {
                            {
                                'NONE': '未有動作',
                                'LOGINED': '有登入記錄',
                                'W': '填寫中',
                                'P': '已送出',
                                'F': '審核完畢'
                            }[STATUS]
                        }
                    </Typography>
                </Box>
              );
            }
        }
    ];

    return (
        <Box m="20px">
            <Box
                mb="30px"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none"
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none"
                    }
                }}
            >
                <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "0 0 5px 0" }}
                >
                    人員清單
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[400]}>
                   條列所有已完成或未完成的申請表
                </Typography>
            </Box>
            <Box>
                <DataGrid rows={mockDataPeople}
                          columns={columns}
                          getRowId={(row) => row.id}
                          showCellVerticalBorder={false}
                          // showColumnVerticalBorder={false}
                />
            </Box>
        </Box>
    );
};

export default People;