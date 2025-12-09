import * as React from "react";
import {
  Search,
  ChevronDownIcon,
  AlertCircleIcon,
  TrainFront,
  Clock,
  ArrowRight,
  Filter,
  ArrowUpDown,
  ChevronsRightIcon,
  MapPin,
  CircleDot,
  Armchair,
  User,
  X,
  Check,
  CreditCard,
  ChevronRight,
  ShoppingCart,
  UserPlus,
  Route,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const TRAIN_RESULTS = [
  {
    id: "901",
    train: {
      type: "Special",
      number: "901",
      badgeVariant: "default" as const,
      stations: ["Cairo", "Tanta", "Sidi Gaber", "Alexandria"],
    },
    from: {
      station: "Cairo",
      time: "08:00",
      date: "2024-08-12",
    },
    to: {
      station: "Alexandria",
      time: "10:30",
      date: "2024-08-12",
    },
    trip: {
      duration: "2h 30m",
      distance: 208,
    },
    seats: [
      {
        degree: "AC 1",
        price: 70,
        available: 42,
      },
      {
        degree: "AC 2",
        price: 55,
        available: 12,
      },
    ],
  },
  {
    id: "905",
    train: {
      type: "Talgo",
      number: "905",
      badgeVariant: "secondary" as const,
      stations: ["Cairo", "Alexandria"],
    },
    from: {
      station: "Cairo",
      time: "09:00",
      date: "2024-08-12",
    },
    to: {
      station: "Alexandria",
      time: "11:30",
      date: "2024-08-12",
    },
    trip: {
      duration: "2h 30m",
      distance: 208,
    },
    seats: [
      {
        degree: "VIP 1",
        price: 125,
        available: 8,
      },
      {
        degree: "VIP 2",
        price: 100,
        available: 20,
      },
    ],
  },
  // {
  //   id: "911",
  //   train: {
  //     type: "Express",
  //     number: "911",
  //     badgeVariant: "outline" as const,
  //     stations: ["Cairo", "Alexandria"],
  //   },
  //   from: {
  //     station: "Cairo",
  //     time: "10:00",
  //     date: "2024-08-12",
  //   },
  //   to: {
  //     station: "Alexandria",
  //     time: "13:00",
  //     date: "2024-08-12",
  //   },
  //   trip: {
  //     duration: "3h 00m",
  //     distance: 208,
  //   },
  //   seats: [
  //     {
  //       degree: "AC 1",
  //       price: 60,
  //       available: 0,
  //     },
  //     {
  //       degree: "AC 2",
  //       price: 45,
  //       available: 5,
  //     },
  //   ],
  // },
  // {
  //   id: "915",
  //   train: {
  //     type: "Special",
  //     number: "915",
  //     badgeVariant: "default" as const,
  //     stations: ["Cairo", "Alexandria"],
  //   },
  //   from: {
  //     station: "Cairo",
  //     time: "12:00",
  //     date: "2024-08-12",
  //   },
  //   to: {
  //     station: "Alexandria",
  //     time: "14:30",
  //     date: "2024-08-12",
  //   },
  //   trip: {
  //     duration: "2h 30m",
  //     distance: 208,
  //   },
  //   seats: [
  //     {
  //       degree: "AC 1",
  //       price: 70,
  //       available: 50,
  //     },
  //     {
  //       degree: "AC 2",
  //       price: 55,
  //       available: 30,
  //     },
  //   ],
  // },
  // {
  //   id: "2008",
  //   train: {
  //     type: "VIP",
  //     number: "2008",
  //     badgeVariant: "secondary" as const,
  //     stations: ["Cairo", "Alexandria"],
  //   },
  //   from: {
  //     station: "Cairo",
  //     time: "15:00",
  //     date: "2024-08-12",
  //   },
  //   to: {
  //     station: "Alexandria",
  //     time: "17:30",
  //     date: "2024-08-12",
  //   },
  //   trip: {
  //     duration: "2h 30m",
  //     distance: 208,
  //   },
  //   seats: [
  //     {
  //       degree: "VIP 1",
  //       price: 125,
  //       available: 2,
  //     },
  //     {
  //       degree: "VIP 2",
  //       price: 100,
  //       available: 0,
  //     },
  //   ],
  // },
];

export function BookTickets() {
  const [date, setDate] = React.useState<Date>();

  const [view, setView] = React.useState<"search" | "result" | "seat">(
    "search"
  );

  const switchToView = (view: "search" | "result" | "seat") => {
    setView(view);
  };

  return (
    <div className="h-full px-4 py-8 flex flex-col gap-12 items-center">
      {/* Warning / Alert Banner */}
      <Alert variant="destructive" className="max-w-2xl">
        <AlertCircleIcon className="h-4 w-4" />
        <AlertTitle>Ticket Reservation Policy</AlertTitle>
        <AlertDescription>
          Online reservation is currently available for Egyptian nationality
          only. Ticket prices do not include additional services.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 max-w-7xl w-full">
        {/* Booking Form Card */}
        <Card className="gap-8 h-fit">
          <CardHeader>
            <CardTitle>Book a Ticket</CardTitle>
            <CardDescription>
              Select your destination and travel dates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="oneway" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-2">
                <TabsTrigger value="oneway">One Way</TabsTrigger>
                <TabsTrigger value="roundtrip">Round Trip</TabsTrigger>
              </TabsList>

              <TabsContent value="oneway" className="space-y-4">
                <div className="space-y-2">
                  <Label>Departure Station</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select departure" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cairo">Cairo</SelectItem>
                      <SelectItem value="alex">Alexandria</SelectItem>
                      <SelectItem value="aswan">Aswan</SelectItem>
                      <SelectItem value="luxor">Luxor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Arrival Station</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select arrival" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cairo">Cairo</SelectItem>
                      <SelectItem value="alex">Alexandria</SelectItem>
                      <SelectItem value="aswan">Aswan</SelectItem>
                      <SelectItem value="luxor">Luxor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Departure Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        id="date"
                        className="w-full justify-between font-normal"
                      >
                        {date ? date.toLocaleDateString() : "Select date"}
                        <ChevronDownIcon className="h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        className="rounded-md border"
                        onSelect={(date) => {
                          setDate(date);
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-2">
                    <Label>Class</Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Any" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ac1">AC 1st Class</SelectItem>
                        <SelectItem value="ac2">AC 2nd Class</SelectItem>
                        <SelectItem value="vip">VIP</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Train No.</Label>
                    <Input placeholder="Optional" />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="roundtrip">
                <div className="py-8 text-center text-muted-foreground">
                  Round trip selection coming soon.
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>

          <CardFooter>
            <Button
              size="lg"
              className="w-full"
              onClick={() => switchToView("result")}
            >
              <Search className="mr-2 h-4 w-4" /> Search Trains
            </Button>
          </CardFooter>
        </Card>

        {/* Right Column: Hero Image OR Search Results */}
        {view === "search" && <HeroImage />}
        {view === "result" && <TrainResults switchToView={switchToView} />}
        {view === "seat" && <SeatSelection />}
      </div>
    </div>
  );
}

function HeroImage() {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-md h-full min-h-[500px]">
      <img
        src="./hero.jpg"
        alt="Train in Egypt"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/95 to-black/20 flex flex-col justify-end p-8">
        <h1 className="text-4xl font-bold mb-2 text-white">
          Explore Egypt by Rail
        </h1>
        <p className="text-lg max-w-xl text-white/90">
          Experience comfort and history combined. Book your journey across the
          Nile Valley today with our modern fleet.
        </p>
      </div>
    </div>
  );
}

function TrainResults({
  switchToView,
}: {
  switchToView: (view: "search" | "result" | "seat") => void;
}) {
  return (
    <div className="flex flex-col gap-6">
      {/* Results Header / Filters */}
      <div className="bg-card border rounded-xl p-4 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold">
            Cairo{" "}
            <ArrowRight className="inline mx-2 h-4 w-4 text-muted-foreground" />{" "}
            Alexandria
          </h2>
          <p className="text-sm text-muted-foreground">
            4 Trains found for 12 Aug, 2024
          </p>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Filter className="h-4 w-4" /> Filter
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <ArrowUpDown className="h-4 w-4" /> Sort
          </Button>
        </div>
      </div>

      {/* Results List */}
      <div className="flex flex-col gap-10">
        {TRAIN_RESULTS.map((train) => {
          return (
            <Card key={train.id}>
              <CardContent className="space-y-6">
                {/* Main Train Info Section */}
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <Badge variant={train.train.badgeVariant}>
                      {train.train.type}
                    </Badge>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <TrainFront className="h-4 w-4" /> #{train.train.number}
                    </span>
                  </div>

                  <Button onClick={() => switchToView("seat")}>
                    Select Seats <ChevronsRightIcon className="size-4" />
                  </Button>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="text-center min-w-[80px]">
                    <div className="text-2xl font-bold">{train.from.time}</div>
                    <div className="text-sm text-muted-foreground">
                      {train.from.station}
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col items-center px-4">
                    <div className="text-xs font-medium text-muted-foreground mb-1 flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {train.trip.duration}
                    </div>
                    <div className="w-full h-[2px] bg-border relative flex items-center justify-between">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                      <Route className="h-3 w-3" />
                      {train.trip.distance} km
                    </div>
                  </div>

                  <div className="text-center min-w-[80px]">
                    <div className="text-2xl font-bold">{train.to.time}</div>
                    <div className="text-sm text-muted-foreground">
                      {train.to.station}
                    </div>
                  </div>
                </div>

                {/* Stations Route */}
                <div className="flex items-center gap-2 py-3 px-4 bg-muted/40 rounded-lg overflow-x-auto">
                  {train.train.stations.map((station, idx) => (
                    <React.Fragment key={idx}>
                      <div className="flex items-center gap-1.5 shrink-0">
                        {idx === 0 ? (
                          <CircleDot className="h-4 w-4 text-primary" />
                        ) : idx === train.train.stations.length - 1 ? (
                          <MapPin className="h-4 w-4 text-primary" />
                        ) : (
                          <div className="h-2 w-2 rounded-full bg-muted-foreground/50" />
                        )}
                        <span
                          className={cn(
                            "text-sm whitespace-nowrap",
                            idx === 0 || idx === train.train.stations.length - 1
                              ? "font-medium"
                              : "text-muted-foreground"
                          )}
                        >
                          {station}
                        </span>
                      </div>
                      {idx < train.train.stations.length - 1 && (
                        <div className="h-px w-8 bg-border shrink-0" />
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Seats Section */}
                <div className="flex flex-wrap gap-3">
                  {train.seats.map((seat, idx) => {
                    const isSoldOut = seat.available === 0;
                    const isLow = seat.available > 0 && seat.available < 10;

                    return (
                      <div
                        key={idx}
                        className={cn(
                          "relative flex-1 min-w-[180px] rounded-xl border-2 p-4 flex items-start justify-between"
                        )}
                      >
                        <div>
                          <div className="flex items-center gap-1 font-semibold">
                            <Armchair className="size-4" />
                            {seat.degree}
                          </div>

                          <div
                            className={cn(
                              "text-xs mt-0.5",
                              isSoldOut
                                ? "text-muted-foreground"
                                : isLow
                                ? "text-orange-500 font-medium"
                                : "text-muted-foreground"
                            )}
                          >
                            {isSoldOut
                              ? "Sold out"
                              : isLow
                              ? `Only ${seat.available} left!`
                              : `${seat.available} available`}
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="text-xl font-bold text-primary">
                            {seat.price}
                          </div>
                          <div className="text-[10px] uppercase tracking-wide text-muted-foreground">
                            EGP
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

function SeatSelection() {
  // Mock data for the UI
  const selectedSeats = [
    {
      id: 1,
      class: "AC 1",
      price: 166,
      passenger: {
        name: "Mahmoud Ahmed",
        nationalId: "30501171602592",
        profile: "Regular",
      },
    },
    {
      id: 2,
      class: "AC 2",
      price: 131,
      passenger: null,
    },
  ];

  const totalPrice = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);

  return (
    <div className="space-y-12">
      {/* Train Summary Card */}
      <Card>
        <CardContent>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <TrainFront className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold">Train #902</span>
                <Badge>Special</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Dec 8, 2025 • 208 km journey
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="text-center min-w-[80px]">
              <div className="text-2xl font-bold">08:00</div>
              <div className="text-sm text-muted-foreground">Cairo</div>
            </div>

            <div className="flex-1 flex flex-col items-center px-4">
              <div className="text-xs font-medium text-muted-foreground mb-1 flex items-center gap-1">
                <Clock className="h-3 w-3" /> 2h 30m
              </div>
              <div className="w-full h-[2px] bg-border relative flex items-center justify-between">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                <Route className="h-3 w-3" />
                208 km
              </div>
            </div>

            <div className="text-center min-w-[80px]">
              <div className="text-2xl font-bold">10:30</div>
              <div className="text-sm text-muted-foreground">Alexandria</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Seat Class Selection */}
      <div className="grid grid-cols-2 gap-4">
        <button className="group relative p-5 rounded-2xl border-2 border-primary bg-primary/5 transition-all hover:shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Armchair className="w-5 h-5 text-primary" />
              <span className="font-bold text-lg">AC 1</span>
            </div>
            <Badge variant="secondary" className="text-xs">
              11 seats
            </Badge>
          </div>
          <p className="text-2xl font-bold text-primary">
            166.00 <span className="text-sm font-normal">EGP</span>
          </p>
          <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
            <Check className="w-3 h-3 text-primary-foreground" />
          </div>
        </button>

        <button className="group relative p-5 rounded-2xl border-2 border-muted bg-background transition-all hover:border-primary/50 hover:shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Armchair className="w-5 h-5 text-muted-foreground" />
              <span className="font-bold text-lg">AC 2</span>
            </div>
            <Badge variant="outline" className="text-xs">
              61 seats
            </Badge>
          </div>
          <p className="text-2xl font-bold">
            131.00{" "}
            <span className="text-sm font-normal text-muted-foreground">
              EGP
            </span>
          </p>
        </button>
      </div>

      {/* Selected Seats & Passengers */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Selected Seats</h3>
          <Button variant="outline" size="sm" className="gap-2">
            <UserPlus className="w-4 h-4" /> Add Passenger
          </Button>
        </div>

        <div className="space-y-6">
          {selectedSeats.map((seat) => (
            <Card
              key={seat.id}
              className={cn(
                "overflow-hidden transition-all p-0",
                seat.passenger
                  ? "border-emerald-200 bg-emerald-50/50 dark:border-emerald-900 dark:bg-emerald-950/20"
                  : "border-dashed border-2"
              )}
            >
              <CardContent className="p-0">
                <div className="flex items-center">
                  {/* Seat Class Badge */}
                  <div
                    className={cn(
                      "w-24 flex flex-col items-center justify-center p-4",
                      seat.passenger
                        ? "bg-emerald-100 dark:bg-emerald-900/30"
                        : "bg-muted/50"
                    )}
                  >
                    <Armchair className="w-6 h-6 mb-1 text-primary" />
                    <span className="font-bold">{seat.class}</span>
                    <span className="text-xs text-muted-foreground">
                      {seat.price} EGP
                    </span>
                  </div>

                  {/* Passenger Info */}
                  <div className="flex-1 p-5">
                    {seat.passenger ? (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Avatar className="w-12 h-12 border-2 border-emerald-200">
                            <AvatarFallback className="bg-emerald-100 text-emerald-700 font-semibold">
                              {seat.passenger.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-lg">
                              {seat.passenger.name}
                            </p>
                            <span className="text-sm text-muted-foreground">
                              ID: {seat.passenger.nationalId}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            Change
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-muted-foreground hover:text-destructive"
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between h-full">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full border-2 border-dashed border-muted-foreground/30 flex items-center justify-center">
                            <User className="w-5 h-5 text-muted-foreground/50" />
                          </div>
                          <div>
                            <p className="font-medium text-muted-foreground">
                              No passenger selected
                            </p>
                            <p className="text-sm text-muted-foreground/70">
                              Click to assign a passenger to this seat
                            </p>
                          </div>
                        </div>
                        <Button variant="outline" className="gap-2">
                          <UserPlus className="w-4 h-4" /> Select Passenger
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Order Summary & Actions */}
      <Card>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-primary" />
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Total Amount</p>
                <p className="text-3xl font-bold text-primary">
                  {totalPrice}.00{" "}
                  <span className="text-base font-normal text-muted-foreground">
                    EGP
                  </span>
                </p>
              </div>
            </div>

            <Button size="lg" className="gap-2 px-8" disabled>
              <CreditCard className="w-5 h-5" /> Continue to Payment
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
