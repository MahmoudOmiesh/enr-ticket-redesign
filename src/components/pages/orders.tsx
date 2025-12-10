import { useState } from "react";
import {
  Filter,
  Calendar,
  MoreHorizontal,
  ArrowUpDown,
  SearchIcon,
  ArrowRight,
  ChevronLeftIcon,
  ChevronRightIcon,
  FileTextIcon,
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

// --- MOCK DATA ---
const MOCK_TICKETS = [
  {
    id: "TKT-9281",
    passenger: "Mahmoud Omiesh",
    train: "Special 901",
    departure: "Cairo (08:00 AM)",
    arrival: "Alexandria (10:30 AM)",
    seat: "A12",
    price: 150.0,
    status: "Paid",
    date: "2024-05-12",
  },
  {
    id: "TKT-9282",
    passenger: "Mohamed Mahmoud",
    train: "Talgo 2009",
    departure: "Luxor (09:00 PM)",
    arrival: "Aswan (11:45 PM)",
    seat: "B04",
    price: 85.5,
    status: "Pending",
    date: "2024-05-13",
  },
];

export function Orders() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="space-y-1 mb-10">
        <div className="flex items-center gap-2">
          <span className="bg-primary text-primary-foreground rounded-full p-2">
            <FileTextIcon className="size-4" />
          </span>
          <h2 className="text-2xl font-bold tracking-tight">
            Orders & Tickets
          </h2>
        </div>
        <p className="text-muted-foreground text-sm hidden md:block">
          Manage train bookings, passenger details, and payment statuses.
        </p>
      </div>

      {/* 2. Filter Bar: Separated from the table, clean layout */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
        <div className="flex items-stretch gap-2">
          <InputGroup className="max-w-sm">
            <InputGroupInput
              id="email"
              type="search"
              placeholder="Filter passengers or ticket IDs..."
            />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>

          <Button
            variant="outline"
            size="sm"
            className="h-auto hidden md:inline-flex"
          >
            <Filter className="size-4" />
            Status
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-auto hidden md:inline-flex"
          >
            <Calendar className="size-4" />
            Date
          </Button>
        </div>

        <div className="flex items-center p-1 bg-slate-100 rounded-lg">
          {["All", "Paid", "Pending", "Cancelled"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                activeTab === tab
                  ? "bg-white text-slate-950 shadow-sm"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* 3. The Table: Clean, spacious, and scannable */}
      <Card className="overflow-hidden p-0">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="font-semibold">Ticket ID</TableHead>
                <TableHead className="font-semibold">
                  <div className="flex items-center cursor-pointer gap-2">
                    Status <ArrowUpDown className="size-4" />
                  </div>
                </TableHead>
                <TableHead className="font-semibold">Passenger</TableHead>
                <TableHead className="font-semibold">Route Info</TableHead>
                <TableHead className="font-semibold">Seat</TableHead>
                <TableHead className="font-semibold text-right">
                  Price
                </TableHead>
                <TableHead className="font-semibold text-right">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {MOCK_TICKETS.map((ticket) => {
                const departureMatch = ticket.departure.match(/\((.*?)\)/);
                const arrivalMatch = ticket.arrival.match(/\((.*?)\)/);

                return (
                  <TableRow key={ticket.id}>
                    <TableCell className="font-mono">{ticket.id}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          ticket.status === "Paid" ? "default" : "secondary"
                        }
                      >
                        {ticket.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium">{ticket.passenger}</span>
                        <span className="text-xs text-muted-foreground">
                          {ticket.date}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="flex flex-col">
                          <span className="font-medium">
                            {ticket.departure.split("(")[0]}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {departureMatch?.[1] ?? ""}
                          </span>
                        </div>

                        <div className="mx-2 text-muted-foreground">
                          <ArrowRight className="size-4" />
                        </div>

                        <div className="flex flex-col">
                          <span className="font-medium">
                            {ticket.arrival.split("(")[0]}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {arrivalMatch?.[1] ?? ""}
                          </span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="font-mono bg-slate-100 px-2 py-1 rounded text-xs">
                        {ticket.seat}
                      </span>
                    </TableCell>
                    <TableCell className="text-right font-medium font-mono">
                      ${ticket.price.toFixed(2)}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="size-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="flex items-center justify-between mt-6">
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-5</strong> of <strong>32</strong> orders
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
