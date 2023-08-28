import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider} from "@mui/material";
import NTNUAppBar from "./scenes/global/NTNUAppBar";
import "./scss/index.scss";
// import Form from "./components/Form";
import { Route, Routes } from "react-router-dom";
import TopNavbar from "./scenes/global/TopNavbar";
import SideNavbar from "./scenes/global/SideNavbar";
import Dashboard from "./scenes/dashboard";
// import Team from "./scenes/team";
// import Form from "./scenes/Form";
// import FAQ from "./scenes/faq";


function App() {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <NTNUAppBar />
                <div className="app">
                    <SideNavbar />
                    <main className="content">
                        <TopNavbar />
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            {/*<Route path="/team" element={<Team />} />*/}
                            {/*<Route path="/form" element={<Form />} />*/}
                            {/*<Route path="/faq" element={<FAQ />} />*/}
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
