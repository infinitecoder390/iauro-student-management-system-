import { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";
const StudentManagement = lazy(() => import("./Component/StudentManagement"));
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Toaster position="top-right" />
      <Suspense fallback={<CircularProgress />}>
        <StudentManagement />
      </Suspense>
    </div>
  );
};

export default App;
