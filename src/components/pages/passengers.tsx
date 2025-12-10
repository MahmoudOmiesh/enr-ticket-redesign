// Mock Data from your snippet
const passengers = [
  {
    id: "12345678901234",
    firstName: "Mahmoud",
    secondName: "Ahmed",
    familyName: "Omiesh",
    nationality: "Egyptian",
    profile: "Regular",
    gender: "Male",
  },
  {
    id: "12345678901235",
    firstName: "Mohamed",
    secondName: "Mahmoud",
    familyName: "Ahmed",
    nationality: "Egyptian",
    profile: "Regular",
    gender: "Male",
  },
];

import {
  SearchIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  UserPlusIcon,
  Pencil,
  Trash2,
  UsersIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { InputGroup } from "../ui/input-group";
import { InputGroupAddon, InputGroupInput } from "../ui/input-group";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { useIsMobile } from "@/hooks/use-mobile";

export function Passengers() {
  const isMobile = useIsMobile();

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="mb-10 flex items-center justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="bg-primary text-primary-foreground rounded-full p-2">
              <UsersIcon className="size-4" />
            </span>
            <h2 className="text-2xl font-bold tracking-tight">
              Your Passengers
            </h2>
          </div>
          <p className="text-muted-foreground text-sm hidden md:block">
            Manage passenger details, nationalities, and profiles.
          </p>
        </div>

        <Button size={isMobile ? "icon" : "default"}>
          {isMobile ? null : "Add Passenger"}
          <UserPlusIcon className="size-4" />
        </Button>
      </div>

      <div className="mb-4">
        <InputGroup className="max-w-sm">
          <InputGroupInput
            id="email"
            type="search"
            placeholder="Search by name, phone, or ID..."
          />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
        </InputGroup>
      </div>

      {/* 3. The Table: Clean, spacious, and scannable */}
      <Card className="overflow-hidden p-0">
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-gray-100">
              <TableRow>
                <TableHead className="font-semibold">First Name</TableHead>
                <TableHead className="font-semibold">Second Name</TableHead>
                <TableHead className="font-semibold">Family Name</TableHead>
                <TableHead className="font-semibold">Nationality</TableHead>
                <TableHead className="font-semibold">ID / Passport</TableHead>
                <TableHead className="font-semibold">Profile</TableHead>
                <TableHead className="text-right font-semibold">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {passengers.map((passenger) => (
                <TableRow
                  key={passenger.id}
                  className="hover:bg-gray-50/50 transition-colors"
                >
                  <TableCell className="font-medium">
                    {passenger.firstName}
                  </TableCell>
                  <TableCell>{passenger.secondName}</TableCell>
                  <TableCell>{passenger.familyName}</TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className="bg-blue-50 text-blue-700"
                    >
                      {passenger.nationality}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-mono text-xs">
                    {passenger.id}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{passenger.profile}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-8 text-muted-foreground"
                      >
                        <Pencil className="size-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-8 text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="size-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="flex items-center justify-between mt-6">
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-5</strong> of <strong>32</strong> passengers
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" disabled>
            <ChevronLeftIcon className="size-4" />
          </Button>
          <Button variant="outline" size="sm">
            <ChevronRightIcon className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
