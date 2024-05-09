import { cn } from "@/utils/tailwindUtil";

interface ListBoxProps extends React.HTMLAttributes<HTMLUListElement> {}

const ListBox = ({ className, ...props }: ListBoxProps) => {
  return (
    <ul
      className={cn("list-square pl-4 mt-1 space-y-1", className)}
      {...props}
    />
  );
};

interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {}

const ListItem = ({ className, ...props }: ListItemProps) => {
  return <li {...props} />;
};

export { ListBox, ListItem };
