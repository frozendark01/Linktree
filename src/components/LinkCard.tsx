
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface LinkCardProps {
  href: string;
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
  className?: string;
}

const LinkCard = ({ href, title, icon: Icon, className }: LinkCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full animate-slide-in"
    >
      <Card
        className={cn(
          "group relative overflow-hidden backdrop-blur-sm border border-white/10 bg-white/5 transition-all duration-300 hover:scale-[1.02] hover:bg-white/10",
          className
        )}
      >
        <div className="p-4 flex items-center justify-between">
          <span className="font-medium">{title}</span>
          {Icon && <Icon className="w-5 h-5 text-muted-foreground" />}
        </div>
      </Card>
    </a>
  );
};

export default LinkCard;
