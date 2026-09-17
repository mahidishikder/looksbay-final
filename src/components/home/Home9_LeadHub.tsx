"use client";

import React, { useState } from "react";
import InteractiveLeadHub from "@/components/shared/InteractiveLeadHub";
import ProjectOrderModal from "@/components/shared/ProjectOrderModal";

/**
 * 🏠 Home Component 9: Interactive Lead Hub & Order Modal
 * Light pastel aesthetic, general brief form, and full project scoping order modal
 */
export default function Home9_LeadHub() {
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  return (
    <>
      <InteractiveLeadHub onOpenOrderModal={() => setOrderModalOpen(true)} />
      <ProjectOrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
      />
    </>
  );
}
