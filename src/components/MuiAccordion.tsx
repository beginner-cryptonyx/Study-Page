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
                            my: "0.1rem",
                        }}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography
                                sx={{
                                    mx: "auto",
                                    color: "primary.light",
                                    fontSize: "22px",
                                    fontWeight: "bold",
                                }}
                            >
                                {content[0]}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails
                            style={{
                                backgroundImage:
                                    "linear-gradient(to right, #A200FF, #FF00DD, #A200FF)",
                                animation:
                                    "gradient_slide_left 3s ease infinite",
                                filter: "saturate(2%);",
                                // backdropFilter: "opacity(10%)"
                            }}
                            // sx={{ bgcolor: "primary.dark" }}
                            className="AccordionDetails backdrop-saturate-50"
                        >
                            {" "}
                            <div className=" h-[100%] w-[100%] fixed overflow-auto top-0 left-0 bg-black/60 -z-10"></div>

                            <div className="z-40">{content[1]}</div>

                        </AccordionDetails>
                    </Accordion>
                </div>
            </ThemeProvider>
        </>
    );
}

export default MUIaccordion;
