import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const theme = createTheme({
    palette: {
        primary: {
            main: "#505050",
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
                            textAlign: 'center'
                        }}
                    >
                        <AccordionSummary>
                            <Typography>{content[0]}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>{content[1]}</AccordionDetails>
                    </Accordion>
                </div>
            </ThemeProvider>
        </>
    );
}

export default MUIaccordion;
