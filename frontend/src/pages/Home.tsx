import { Box, Stack, Typography } from "@mui/material";
import QuestionBank from "../components/QuestionBank";
const Home = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontSize: 32,
          lineheight: 1.2,
          fontWeight: 750,
          letterSpacing: 1.1,
        }}
      >
        All Companies
      </Typography>
      <Typography sx={{ mt: 0.5, color: "#596276", fontSize: 15 }}>
        36 questions across React.js, JavaScript and Node.js
      </Typography>
      <Box sx={{ minHeight: "100vh", bgcolor: "#f4f5fa", p: { xs: 2, sm: 3 } }}>
        <Stack
          spacing={1.25}
          sx={{ width: "100%", maxWidth: 1380, mx: "auto" }}
        >
          <QuestionBank />
        </Stack>
      </Box>
    </Box>
  );
};
export default Home;
