"use client";

import AuthModal from "@/components/AuthModal";
import Modal from "@/components/Modal";
import UploadModal from "@/components/UploadModal";

import { useEffect, useState } from "react";

const ModelProvider = () => {
  const [isMounted, setIsModified] = useState(false);

  useEffect(() => {
    setIsModified(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
  <>
  <AuthModal/>
  <UploadModal/>
  </>
  )
};

export default ModelProvider;
