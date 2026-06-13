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

interface PullQuotePayload {
  attribution?: string;
  text: string;
}

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

const getDirectChildren = (children: ReactNode): ReactNode[] => {
  return Children.toArray(children).filter((child) => {
    if (typeof child !== "string") {
      return true;
    }

    return child.trim().length > 0;
  });
};

const getTextFromElement = (node: ReactNode): string | null => {
  const parts = getPlainTextParts(node);

  if (!parts) {
    return null;
  }

  return getRevealText(parts);
};

const getPullQuotePayload = (
  children: ReactNode,
): PullQuotePayload | null => {
  const directChildren = getDirectChildren(children);
  const paragraphChildren = directChildren.filter((child) => {
    return isReactElement(child) && child.type === "p";
  });

  if (directChildren.length === 1 && paragraphChildren.length === 1) {
    const quoteText = getTextFromElement(paragraphChildren[0]);

    if (!quoteText) {
      return null;
    }

    return { text: quoteText };
  }

  if (directChildren.length === 2 && paragraphChildren.length === 2) {
    const quoteText = getTextFromElement(paragraphChildren[0]);
    const attribution = getTextFromElement(paragraphChildren[1]);

    if (!quoteText || !attribution) {
      return null;
    }

    return { attribution, text: quoteText };
  }

  return null;
};

const MdxBlockquote = ({ children, ...props }: MdxBlockquoteProps) => {
  const payload = getPullQuotePayload(children);

  if (!payload) {
    return <blockquote {...props}>{children}</blockquote>;
  }

  return <TextRevealBlockquote {...props} {...payload} />;
};

export { MdxBlockquote };
