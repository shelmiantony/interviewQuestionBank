import { useState } from "react";
import { Box, ButtonBase, Stack, Typography } from "@mui/material";
import QuestionBank from "../components/QuestionBank";

const companies = [
  { name: "TCS", count: 9 },
  { name: "Infosys", count: 8 },
  { name: "Wipro", count: 6 },
  { name: "Cognizant", count: 5 },
  { name: "Accenture", count: 4 },
  { name: "Zoho", count: 4 },
];

const Home = () => {
  const [selectedCompany, setSelectedCompany] = useState("All companies");

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f4f5fa", color: "#111827" }}>
      <Box
        component="aside"
        aria-label="Question bank navigation"
        sx={{
          position: { xs: "relative", md: "fixed" },
          inset: { md: "0 auto 0 0" },
          width: { xs: "100%", md: 260 },
          minHeight: { xs: "auto", md: "100vh" },
          bgcolor: "#fff",
          borderRight: { md: "1px solid #e0e3ed" },
          borderBottom: { xs: "1px solid #e0e3ed", md: 0 },
          px: 2.75,
          py: 3.25,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ px: 1.5, mb: 3.5 }}>
          <Box sx={{ width: 36, height: 36, borderRadius: "9px", bgcolor: "#4338d5", color: "white", display: "grid", placeItems: "center", fontWeight: 700, fontSize: 17 }}>Q</Box>
          <Typography sx={{ fontSize: 16, fontWeight: 700 }}>Question Bank</Typography>
        </Stack>

        <Typography sx={{ px: 1.5, mb: 0.8, color: "#596276", fontSize: 12, fontWeight: 700, letterSpacing: 1.1 }}>
          COMPANIES ATTENDED
        </Typography>
        <Stack component="nav" aria-label="Filter by company" spacing={0.4}>
          {[{ name: "All companies", count: 36 }, ...companies].map((company) => {
            const selected = selectedCompany === company.name;
            return (
              <ButtonBase
                key={company.name}
                onClick={() => setSelectedCompany(company.name)}
                aria-current={selected ? "page" : undefined}
                sx={{
                  minHeight: 44,
                  width: "100%",
                  px: 1.5,
                  borderRadius: 2.5,
                  display: "flex",
                  justifyContent: "flex-start",
                  gap: 1.5,
                  textAlign: "left",
                  bgcolor: selected ? "#eef0ff" : "transparent",
                  color: selected ? "#4938d7" : "#18213a",
                  "&:hover": { bgcolor: selected ? "#eef0ff" : "#f6f7fb" },
                }}
              >
                <Box sx={{ width: 27, height: 27, flex: "0 0 27px", borderRadius: "7px", bgcolor: selected ? "#4938d7" : "#eef0ff", color: selected ? "#fff" : "#4938d7", display: "grid", placeItems: "center", fontWeight: 700, fontSize: 12 }}>
                  {company.name === "All companies" ? "All" : company.name[0]}
                </Box>
                <Typography sx={{ flex: 1, fontSize: 14, color: "inherit" }}>{company.name}</Typography>
                <Typography sx={{ fontSize: 13, color: "inherit" }}>{company.count}</Typography>
              </ButtonBase>
            );
          })}
        </Stack>

        <Box sx={{ mt: { xs: 3, md: "auto" }, pt: 1.75, px: 1.5, borderTop: "1px solid #dce0eb" }}>
          <Typography sx={{ color: "#596276", fontSize: 13, mb: 0.4 }}>Viewing as guest</Typography>
          <Typography component="a" href="/admin/login" sx={{ color: "#4338d5", fontSize: 14, fontWeight: 700, textDecoration: "underline" }}>Admin log in</Typography>
        </Box>
      </Box>

      <Box component="main" sx={{ ml: { md: "260px" }, minHeight: "100vh", p: { xs: 2, sm: 3.5, md: 5 } }}>
        <Stack spacing={2} sx={{ width: "100%", maxWidth: 1000, mx: "auto" }}>
          <Box sx={{ mb: 0.75 }}>
            <Typography variant="h4" component="h1" sx={{ fontSize: { xs: 26, sm: 32 }, lineHeight: 1.2, fontWeight: 750, letterSpacing: 0.2 }}>
              {selectedCompany}
            </Typography>
            <Typography sx={{ mt: 0.5, color: "#596276", fontSize: 15 }}>
              {selectedCompany === "All companies" ? "36 questions across React.js, JavaScript and Node.js" : `Questions asked at ${selectedCompany}`}
            </Typography>
          </Box>
          <QuestionBank company={selectedCompany === "All companies" ? undefined : selectedCompany} />
        </Stack>
      </Box>
    </Box>
  );
};

export default Home;
