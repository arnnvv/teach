"use client";

import { FC, ReactNode } from "react";
import { Toaster } from "sonner";

interface ProviderProps {
  children: ReactNode;
}

const Providers: FC<ProviderProps> = ({
  children,
}: ProviderProps): JSX.Element => {
  return (
    <>
      <Toaster position="top-center" richColors />
      {children}
    </>
  );
};

export default Providers;
