
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon: Icon, title, description, className }: FeatureCardProps) => {
  return (
    <Card className={`glass-card overflow-hidden ${className}`}>
      <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-nexus-purple/20 to-nexus-turquoise/20 rounded-full blur-xl" />
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-nexus-purple to-nexus-turquoise flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <CardTitle className="text-lg md:text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm md:text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
