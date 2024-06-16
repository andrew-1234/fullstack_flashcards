import React from 'react';
import { List, 
  ListItem, 
  // ListItemText, 
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type FlashcardListProps = {
  flashcards: { question: string, answer: string }[];
};

const FlashcardList: React.FC<FlashcardListProps> = ({ flashcards }) => {
 return (
    <List>
      {flashcards.map((flashcard, index) => (
        <React.Fragment key={index}>
          <ListItem>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography>{flashcard.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{flashcard.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
};

export default FlashcardList;
