import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export interface MUIaccordionProps {
    content: Array<string>;
}

function MUIaccordion({ content }: MUIaccordionProps) {
    return (
        <>
            
                <Accordion>
                    <AccordionSummary>
                        <Typography>{content[0]}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {content[1]}
                    </AccordionDetails>
                </Accordion>
            
        </>
    );
}

export default MUIaccordion;
