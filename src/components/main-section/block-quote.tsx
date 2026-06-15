import type { ComponentPropsWithoutRef } from "react";

type BlockQuoteProps = ComponentPropsWithoutRef<"blockquote">;

const BlockQuote = ({ children, ...props }: BlockQuoteProps) => {
  return <blockquote {...props}>{children}</blockquote>;
};

export { BlockQuote };
