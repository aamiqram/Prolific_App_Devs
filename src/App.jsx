import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      {/* Global toast notifications */}
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
