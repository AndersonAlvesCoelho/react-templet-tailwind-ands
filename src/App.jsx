import { Routes, Route } from "react-router-dom";

// Import pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import LayoutDashboard from "./layouts/LayoutDashboard";



function App() {

  return (
    <Routes>
      <Route exact path="/" element={<Login /> } />
      <Route exact path="/dashboard" element={<LayoutDashboard />}>
        <Route index element={<Dashboard />} />
        {/* <Route path="generation/:brand" element={<Generation />} /> */}
        {/* <Route path="investment/:brand" element={<Investment />} /> */}
      </Route>

      <Route path="*" element={<Dashboard />} />

    </Routes>
  );
}

export default App;
