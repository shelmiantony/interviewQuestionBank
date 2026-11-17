import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface Question {
  id: number;
  title: string;
  answer: string;
  company: string;
}
const QuestionBank = ({ company }: { company?: string }) => {
  const [expanded, setExpanded] = useState<number | false>(1);
  const questions: Question[] = [
    {
      id: 1,
      title: "What is the virtual DOM and how does React use it?",
      answer:
        "The virtual DOM is a lightweight in-memory copy of the real DOM. When state changes, React builds a new tree, compares it with the previous one and applies only the minimal changes to the real DOM.",
      company: "TCS",
    },
    {
      id: 2,
      title: "What is the difference between state and props?",
      answer:
        "Props are read-only values passed into a component by its parent. State is data owned by a component; updating it causes React to render the component again.",
      company: "Infosys",
    },
    {
      id: 3,
      title: "When does useEffect run, and what does the dependency array do?",
      answer:
        "useEffect runs after a render. Its dependency array controls when it runs again: an empty array runs after the initial mount, while listed dependencies trigger it when their values change.",
      company: "Wipro",
    },
    {
      id: 4,
      title: "Why do list items need a key?",
      answer:
        "A key gives each item a stable identity, helping React match items between renders and update the list efficiently. Prefer a unique, stable ID over an array index.",
      company: "Cognizant",
    },
    {
      id: 5,
      title:
        "What is the difference between controlled and uncontrolled components?",
      answer:
        "A controlled input gets its value from React state and updates through an event handler. An uncontrolled input stores its value in the DOM and is typically accessed with a ref.",
      company: "Accenture",
    },
    {
      id: 6,
      title: "How do useMemo and useCallback differ?",
      answer:
        "useMemo caches the result of a calculation, while useCallback caches a function reference. Use them when avoiding repeated work or preventing unnecessary renders is useful.",
      company: "Zoho",
    },
  ];
  return (
    <>
      {questions.filter((item) => !company || item.company === company).map((item) => {
        const isExpanded = expanded === item.id;
        return (
          <Accordion
            key={item.id}
            expanded={isExpanded}
            onChange={(_, open) => setExpanded(open ? item.id : false)}
            elevation={0}
            disableGutters
            sx={{
              border: `1px solid ${isExpanded ? "#5146e5" : "#dce0eb"}`,
              borderRadius: "12px !important",
              overflow: "hidden",
              "&:before": { display: "none" },
            }}
          >
            <AccordionSummary
              expandIcon={
                <Box
                  sx={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    bgcolor: "#eef0ff",
                    color: "#4338ca",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  {isExpanded ? (
                    <RemoveIcon fontSize="small" />
                  ) : (
                    <AddIcon fontSize="small" />
                  )}
                </Box>
              }
              aria-controls={`item-${item.id}-content`}
              id={`item-${item.id}-header`}
              sx={{
                minHeight: 60,
                px: { xs: 2, sm: 2.5 },
                bgcolor: isExpanded ? "#f2f3ff" : "#fff",
                "& .Mui-expanded": { minHeight: 60 },
                "& .MuiAccordionSummary-content": {
                  alignItems: "center",
                  gap: 1.5,
                  my: 1.5,
                },
                "& .MuiAccordionSummary-content.Mui-expanded": { my: 1.5 },
                "& .MuiAccordionSummary-expandIconWrapper": {
                  transform: "none !important",
                },
              }}
            >
              <Typography
                sx={{ flex: 1, fontWeight: 600, fontSize: { xs: 15, sm: 16 } }}
              >
                {item.title}
              </Typography>
              <Chip
                label={item.company}
                size="small"
                sx={{
                  bgcolor: "#eef0ff",
                  color: "#3832ad",
                  fontWeight: 500,
                  display: { xs: "none", sm: "inline-flex" },
                }}
              />
            </AccordionSummary>
            <AccordionDetails
              id={`question-${item.id}-content`}
              sx={{ px: { xs: 2, sm: 2.5 }, pt: 0, pb: 2.5, bgcolor: "#fff" }}
            >
              <Typography sx={{ color: "#383d4d", lineHeight: 1.55 }}>
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
};
export default QuestionBank;
