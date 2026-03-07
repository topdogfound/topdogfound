import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BlogAuthorCardProps {
  name: string;
  role: string;
  avatar: string;
}

export function BlogAuthorCard({ name, role, avatar }: BlogAuthorCardProps) {
  return (
    <Card className="border border-border/80">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">Author</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-3">
          <div className="relative size-11 rounded-full overflow-hidden border border-border">
            <Image src={avatar} alt={name} fill className="object-cover" sizes="44px" />
          </div>
          <div className="space-y-0.5">
            <p className="font-semibold text-sm text-foreground">{name}</p>
            <p className="text-xs text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
