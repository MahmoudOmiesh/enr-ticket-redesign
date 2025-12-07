import * as React from "react";
import { Search, ChevronDownIcon, AlertCircleIcon } from "lucide-react";

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

export function BookTickets() {
  const [date, setDate] = React.useState<Date>();

  return (
    <div className="h-full px-4 py-8 flex flex-col gap-12 items-center">
      {/* Warning / Alert Banner */}
      <Alert variant="destructive" className="max-w-2xl">
        <AlertCircleIcon />
        <AlertTitle>Ticket Reservation Policy</AlertTitle>
        <AlertDescription>
          Online reservation is currently available for Egyptian nationality
          only. Ticket prices do not include additional services.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-[1fr_2fr] gap-8 max-w-6xl">
        {/* Booking Form Card */}
        <Card className="gap-8">
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
                        <ChevronDownIcon />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-(--radix-popover-trigger-width) overflow-hidden p-0"
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        selected={date}
                        classNames={{
                          root: "w-full",
                        }}
                        captionLayout="dropdown"
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
                <div>dadad</div>
              </TabsContent>
            </Tabs>
          </CardContent>

          <CardFooter>
            <Button size="lg" className="w-full">
              <Search /> Search Trains
            </Button>
          </CardFooter>
        </Card>

        {/* Hero Image / Content Area */}
        <div className="relative rounded-2xl overflow-hidden shadow-md">
          <img
            src="./hero.jpg"
            alt="Train in Egypt"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/95 to-black/50 flex flex-col justify-end p-8">
            <h1 className="text-4xl font-bold mb-2">Explore Egypt by Rail</h1>
            <p className="text-lg max-w-xl">
              Experience comfort and history combined. Book your journey across
              the Nile Valley today with our modern fleet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
