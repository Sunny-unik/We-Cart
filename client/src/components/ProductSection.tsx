import { ReactNode } from "react";

export default function ProductSection({
  children,
  title
}: {
  children: ReactNode;
  title: String;
}) {
  return (
    <div className="small-container">
      <h2 className="title">{title}</h2>
      <div className="row">{children}</div>
    </div>
  );
}
