import {
  Children,
  Fragment,
  isValidElement,
  type ComponentPropsWithoutRef,
  type ReactElement,
  type ReactNode,
} from "react";
import { TextRevealBlockquote } from "./text-reveal-blockquote";

type TextPart =
  | {
      type: "text";
      value: string;
    }
  | {
      type: "break";
    };

type MdxBlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

const maxRevealTokenCount = 32;
const supportedElementNames = new Set(["p", "span"]);

const isReactElement = (node: ReactNode): node is ReactElement<{
  children?: ReactNode;
}> => {
  return isValidElement(node);
};

const getPlainTextParts = (node: ReactNode): TextPart[] | null => {
  if (node === null || node === undefined || typeof node === "boolean") {
    return [];
  }

  if (typeof node === "string" || typeof node === "number") {
    return [{ type: "text", value: String(node) }];
  }

  if (Array.isArray(node)) {
    const parts: TextPart[] = [];

    for (const child of node) {
      const childParts = getPlainTextParts(child);

      if (!childParts) {
        return null;
      }

      parts.push(...childParts);
    }

    return parts;
  }

  if (!isReactElement(node)) {
    return null;
  }

  if (node.type === Fragment) {
    return getPlainTextParts(node.props.children);
  }

  if (node.type === "br") {
    return [{ type: "break" }];
  }

  if (typeof node.type !== "string" || !supportedElementNames.has(node.type)) {
    return null;
  }

  return getPlainTextParts(node.props.children);
};

const getRevealText = (parts: TextPart[]): string | null => {
  if (parts.some((part) => part.type === "break")) {
    return null;
  }

  const text = parts
    .map((part) => {
      if (part.type === "break") {
        return "";
      }

      return part.value;
    })
    .join("")
    .trim();
  const tokenCount = text.match(/\S+\s*/g)?.length ?? 0;

  if (tokenCount === 0 || tokenCount > maxRevealTokenCount) {
    return null;
  }

  return text;
};

const MdxBlockquote = ({ children, ...props }: MdxBlockquoteProps) => {
  const parts = getPlainTextParts(Children.toArray(children));
  const text = parts ? getRevealText(parts) : null;

  if (!text) {
    return <blockquote {...props}>{children}</blockquote>;
  }

  return <TextRevealBlockquote {...props} text={text} />;
};

export { MdxBlockquote };
