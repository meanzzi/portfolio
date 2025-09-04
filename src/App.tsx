import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import StartPage from "./pages/StartPage";
import MainPage from "./pages/MainPage";

export default function App() {
  const [showStart, setShowStart] = useState(true);

  return (
    <AnimatePresence>
      {showStart ? (
        <StartPage key="start" onFinish={() => setShowStart(false)} />
      ) : (
        <motion.div
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <MainPage />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
