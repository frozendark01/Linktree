
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Profile = () => {
  return (
    <div className="flex flex-col items-center space-y-4 animate-fade-in">
      <Avatar className="w-32 h-32 border-2 border-white/20">
        <AvatarImage 
          src="/avatar.jpg" 
          alt="Profile"
          className="aspect-square object-cover"
        />
        <AvatarFallback>JS</AvatarFallback>
      </Avatar>
      <div className="text-center">
        <h1 className="text-2xl font-bold tracking-tight">Jane Smith</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Digital Creator & Developer
        </p>
      </div>
      <p className="text-sm text-center max-w-md text-muted-foreground">
        Building beautiful digital experiences. Follow my journey as I explore the
        intersection of design and technology.
      </p>
    </div>
  );
};

export default Profile;
