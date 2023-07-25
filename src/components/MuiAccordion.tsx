import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const theme = createTheme({
    palette: {
        primary: {
            main: "#505050",
            dark: "#555555",
            light: "#ffffff",
        },
    },
});
export interface MUIaccordionProps {
    content: Array<any>;
}

function MUIaccordion({ content }: MUIaccordionProps) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <div className="w-[70vw] mx-auto">
                    <Accordion
                        sx={{
                            bgcolor: "primary.main",
                            mx: "auto",
                            my: "0.1rem"
                        }}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography
                                sx={{
                                    mx: "auto",
                                    color: "primary.light",
                                    fontSize: "22px",
                                    fontWeight: 'bold'
                                }}
                            >
                                {content[0]}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ bgcolor: "primary.dark" }}>
                            {content[1]}
                        </AccordionDetails>
                    </Accordion>
                </div>
            </ThemeProvider>
        </>
    );
}

export default MUIaccordion;
