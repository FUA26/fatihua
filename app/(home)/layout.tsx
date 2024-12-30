import type { ReactNode } from "react";
// import { HomeLayout } from 'fumadocs-ui/layouts/home';
// import { baseOptions } from '@/configs/layout.config';
import NavBar from "@/components/layouts/main-layout";

export default function Layout({
  children,
}: {
  children: ReactNode;
}): React.ReactElement {
  return (
    <main>
      <div className="flex flex-col-reverse md:flex-col w-full">
        <NavBar />
      </div>
      <div className="mt-8 md:mt-[81px] flex flex-col gap-12 md:gap-[150px] px-4 md:px-[100px]">
        {children}
      </div>
    </main>
  );
}
