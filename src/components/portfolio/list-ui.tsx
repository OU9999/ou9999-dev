import { cn } from "@/utils/tailwind-util";

const ListBox = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLUListElement>) => {
  return <ul className={cn("pl-4 mt-1 space-y-1", className)} {...props} />;
};

const ListItem = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLLIElement>) => {
  return <li className={className} {...props} />;
};

export { ListBox, ListItem };
