import { Ref, forwardRef } from "react";

type ContentProps = {
  page: number;
};

const Content = ({ page }: ContentProps, ref: Ref<HTMLDivElement>) => (
  <div ref={ref}>{page}</div>
);

export default forwardRef<HTMLDivElement, ContentProps>(Content);
