import { PropsWithChildren } from "react";

export default function DocsLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col items-start justify-center w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10">
      {children}
    </div>
  );
}