import { cn } from "@/utils/tailwindUtil";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const PortfolioCard = ({ className, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-lg shadow-sm border border-slate-300 dark:border-slate-600",
        className
      )}
      {...props}
    />
  );
};

export default PortfolioCard;
