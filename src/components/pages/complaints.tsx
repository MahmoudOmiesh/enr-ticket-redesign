import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Hash, Zap, CheckCircle, Clock, ChevronsRightIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

// Mock data to populate the tracker (replace with API call)
const mockComplaints = [
  {
    id: "4990",
    status: "New",
    topic: "Staff Behavior",
    summary:
      "Ticket agent was rude and unhelpful when asked about platform changes.",
    date: "1h ago",
  },
  {
    id: "4987",
    status: "In Progress",
    topic: "Website Booking Error",
    summary:
      "Could not select seating for ticket #X92A. Was double-charged on bank card.",
    date: "3h ago",
  },
  {
    id: "4982",
    status: "Resolved",
    topic: "Train Delay (Cairo-Alex)",
    summary:
      "Train was 45 minutes late with no announcement. Affected a connecting service.",
    date: "1d ago",
  },
];
export function Complaints() {
  return (
    <div className="w-full max-w-7xl mx-auto grid grid-cols-[1fr_1.5fr] gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold tracking-tight">
            Suggestions & Complaints
          </CardTitle>
          <CardDescription>
            We value your feedback. Please fill out the details below.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="gap-1">
              Name <span className="text-destructive">*</span>
            </Label>
            <Input id="name" placeholder="Enter your name" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="gap-1">
              Email <span className="text-destructive">*</span>
            </Label>
            <Input id="email" type="email" placeholder="name@example.com" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="comment" className="gap-1">
              Comment <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="comment"
              placeholder="Type your message here."
              className="min-h-[120px] resize-none"
            />
          </div>
        </CardContent>

        <CardFooter>
          <Button className="w-full">Send Feedback</Button>
        </CardFooter>
      </Card>

      {/* RIGHT COLUMN: The Public Transparency Tracker */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Your Previous Complaints</CardTitle>
          <CardDescription>
            See the status of your previous complaints and the actions taken by
            ENR.
          </CardDescription>
        </CardHeader>

        {/* The Tracker Feed */}
        <CardContent className="space-y-1">
          {mockComplaints.map((item) => (
            <TrackerItem
              key={item.id}
              status={item.status}
              ticketId={item.id}
              topic={item.topic}
              summary={item.summary}
              date={item.date}
            />
          ))}
        </CardContent>

        <CardFooter>
          <Button variant="link" className="pl-0!">
            View All Complaints <ChevronsRightIcon />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

function TrackerItem({
  status,
  ticketId,
  topic,
  summary,
  date,
}: {
  status: string;
  ticketId: string;
  topic: string;
  summary: string;
  date: string;
}) {
  let statusIcon;
  let statusColor;

  if (status === "Resolved") {
    statusIcon = <CheckCircle className="size-3" />;
    statusColor = "bg-green-500/50";
  } else if (status === "In Progress") {
    statusIcon = <Clock className="size-3" />;
    statusColor = "bg-amber-500/50";
  } else {
    statusIcon = <Zap className="size-3" />;
    statusColor = "bg-blue-500/50";
  }

  return (
    <div className="border-b border-gray-200 py-3 last:border-b-0">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <Badge className={cn(statusColor, "border-none text-foreground")}>
            {statusIcon}
            {status}
          </Badge>

          <span className="text-xs text-gray-500 font-mono flex items-center">
            <Hash className="w-3 h-3 mr-0.5" />
            {ticketId}
          </span>
        </div>
        <p className="text-xs text-gray-500">{date}</p>
      </div>

      <p className="text-sm font-semibold line-clamp-1">{topic}</p>

      <p className="text-sm text-muted-foreground line-clamp-2">{summary}</p>
    </div>
  );
}
