import { motion } from "framer-motion";
import { useEffect } from "react";

interface StartPageProps {
  onFinish: () => void;
}

export default function StartPage({ onFinish }: StartPageProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="h-screen w-screen flex flex-col items-center justify-center bg-[#679258] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="text-center text-[2rem] md:text-[3rem] font-bold"
      >
        코드로 사용자와 세상을 연결하는 개발자
      </motion.div>
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center mt-4 text-[1.5rem] md:text-[2rem]"
      >
        프론트엔드 개발자 <span className="font-extrabold">김민지</span> 입니다
      </motion.div>
    </motion.div>
  );
}
