// src/pages/faq.tsx
import * as React from 'react';
import { Container, Typography, Box, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemText } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQs: React.FC = () => {
  return (
    <Container maxWidth="md">
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: 'center',
          my: 4,
          py: 4,
          px: 2,
          backgroundColor: '#f5f5f5',
          borderRadius: 2,
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Frequently Asked Questions
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph>
          Find answers to the most common questions about Brighton Vibe.
        </Typography>
      </Box>

      {/* FAQ Sections */}
      <Box sx={{ my: 4 }}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6">What is Brighton Vibe?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              Brighton Vibe is a website dedicated to showcasing and championing local businesses in Brighton. It helps users discover the best venues and events in the city, providing a comprehensive resource for both locals and visitors.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6">How can I find venues and events?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              You can explore venues and events through our homepage, which features sections for popular and recently added venues, as well as a list of upcoming events. Each venue and event has its own detailed page with more information.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography variant="h6">How do I get my venue or event listed?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              If you are a venue owner or event organizer, you can contact us directly through our contact form to get your venue or event listed on Brighton Vibe. We’ll be happy to assist you with the listing process.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <Typography variant="h6">Is the information on the website accurate?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              We strive to provide the most accurate and up-to-date information on our website. However, we recommend contacting venues or event organizers directly for the latest details, as information may change over time.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5a-content"
            id="panel5a-header"
          >
            <Typography variant="h6">Can I use your API?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              Yes, our API is available for makers and academics upon request. Please reach out to us with your project details, and we'll provide the necessary access.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6a-content"
            id="panel6a-header"
          >
            <Typography variant="h6">How often is the venue and event information updated?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              We update our venue and event information regularly to ensure accuracy. However, due to the dynamic nature of events and business hours, we recommend checking directly with the venue or event organizer for the most current information.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel7a-content"
            id="panel7a-header"
          >
            <Typography variant="h6">How can I provide feedback or report issues?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              We value your feedback! If you have any suggestions or need to report issues, please use our contact form or email us directly. Your input helps us improve the website and the information we provide.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel8a-content"
            id="panel8a-header"
          >
            <Typography variant="h6">Are there any costs associated with using Brighton Vibe?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              No, Brighton Vibe is free to use for everyone. We aim to provide valuable information about local venues and events without any cost to our users.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* Additional Resources */}
      <Box sx={{ my: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Additional Resources
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Privacy Policy"
              secondary="Learn about how we handle your data."
              component="a"
              href="/privacy-policy"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Terms of Service"
              secondary="Understand the terms of using our site."
              component="a"
              href="/terms-of-service"
            />
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default FAQs;
