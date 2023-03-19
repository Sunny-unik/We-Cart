import { ReactNode } from "react";

export default function TestimonialSection({ children }: { children: ReactNode }) {
  return (
    <div className="testimonial">
      <div className="small-container">
        <div className="row">{children}</div>
      </div>
    </div>
  );
}
