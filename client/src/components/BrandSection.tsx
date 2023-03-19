import { ReactNode } from "react";

export default function Brands({ children }: { children: ReactNode }) {
  return (
    <div className="brands">
      <div className="small-container">
        <div className="row">{children}</div>
      </div>
    </div>
  );
}
