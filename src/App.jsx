import { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";
const StudentManagement = lazy(() => import("./Component/StudentManagement"));

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Suspense fallback={<CircularProgress />}>
        <StudentManagement />
      </Suspense>
    </div>
  );
};

export default App;
