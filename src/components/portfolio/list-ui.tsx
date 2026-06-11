import { cn } from "@/utils/tailwindUtil";

type ListBoxProps = React.HTMLAttributes<HTMLUListElement>;

const ListBox = ({ className, ...props }: ListBoxProps) => {
  return <ul className={cn("pl-4 mt-1 space-y-1", className)} {...props} />;
};

type ListItemProps = React.HTMLAttributes<HTMLLIElement>;

const ListItem = ({ className, ...props }: ListItemProps) => {
  return <li className={className} {...props} />;
};

export { ListBox, ListItem };
