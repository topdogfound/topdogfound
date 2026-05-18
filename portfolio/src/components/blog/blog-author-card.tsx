import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BlogAuthorCardProps {
  name: string;
  role: string;
  avatar: string;
}

export function BlogAuthorCard({ name, role, avatar }: BlogAuthorCardProps) {
  return (
    <Card className="border border-border/80 p-4 sm:p-5 lg:p-4">
      <CardHeader className="mb-4">
        <CardTitle className="text-sm font-medium leading-none text-muted-foreground">
          Author
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-3.5">
          <div className="relative size-12 shrink-0 overflow-hidden rounded-full border border-border">
            <Image src={avatar} alt={name} fill className="object-cover" sizes="44px" />
          </div>
          <div className="min-w-0 space-y-1">
            <p className="truncate text-sm font-semibold leading-none text-foreground">
              {name}
            </p>
            <p className="truncate text-xs leading-none text-muted-foreground">
              {role}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
