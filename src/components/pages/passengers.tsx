import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pencil,
  Trash2,
  UserPlusIcon,
  SearchIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";

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

export function Passengers() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="space-y-1">
            <CardTitle className="text-2xl">Passengers</CardTitle>
            <CardDescription>
              Manage passenger details, nationalities, and profiles.
            </CardDescription>
          </div>

          <Button>
            Add Passenger <UserPlusIcon />
          </Button>
        </CardHeader>

        <CardContent className="space-y-4">
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

          {/* Table Section */}
          <div className="rounded-md border border-gray-200 overflow-hidden">
            <Table>
              <TableHeader className="bg-gray-50/50">
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
          </div>

          {/* Pagination Section */}
        </CardContent>
        <CardFooter className="justify-between">
          <div className="text-xs text-gray-500">
            Showing <strong>1-2</strong> of <strong>2</strong> passengers
          </div>
          <div className="space-x-2">
            <Button variant="outline" size="sm" disabled>
              <ChevronLeftIcon className="size-4" />
            </Button>
            <Button variant="outline" size="sm">
              <ChevronRightIcon className="size-4" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
