import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard";

function App() {

  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App