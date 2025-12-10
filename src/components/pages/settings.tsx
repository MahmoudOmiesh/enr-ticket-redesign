import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertCircle,
  AlertTriangle,
  Bell,
  XIcon,
  ChevronsRightIcon,
  MailIcon,
  PhoneIcon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";

const notifications = [
  {
    id: 1,
    type: "info",
    message: "Your profile details were updated successfully.",
    time: "5m ago",
  },
  {
    id: 2,
    type: "warning",
    message: "Password change required: Your last update was 90 days ago.",
    time: "3h ago",
  },
  {
    id: 3,
    type: "success",
    message: "You have been successfully enrolled in the Regular profile.",
    time: "Yesterday",
  },
];

export function Settings() {
  return (
    <div className="w-full max-w-6xl mx-auto grid md:grid-cols-[1.5fr_1fr] gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Profile settings</CardTitle>
          <CardDescription>
            Manage your personal information and account details.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-1">
                Email <span className="text-red-500 text-xs">*</span>
              </Label>

              <InputGroup>
                <InputGroupInput
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  defaultValue="mahmoudomiesh2005@gmail.com"
                  disabled
                />
                <InputGroupAddon>
                  <MailIcon />
                </InputGroupAddon>
              </InputGroup>

              <p className="text-xs text-muted-foreground">
                This field cannot be changed.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-1">
                Phone <span className="text-red-500 text-xs">*</span>
              </Label>
              <InputGroup>
                <InputGroupInput
                  id="phone"
                  type="tel"
                  placeholder="Ex: 2010XXXXXXXXX"
                  defaultValue="+201025350661"
                />
                <InputGroupAddon>
                  <PhoneIcon />
                </InputGroupAddon>
              </InputGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="firstName" className="flex items-center gap-1">
                First Name <span className="text-red-500 text-xs">*</span>
              </Label>
              <Input id="firstName" defaultValue="Mahmoud" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="gender" className="flex items-center gap-1">
                Gender <span className="text-red-500 text-xs">*</span>
              </Label>
              <Select defaultValue="Male">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="secondName" className="flex items-center gap-1">
                Second Name <span className="text-red-500 text-xs">*</span>
              </Label>
              <Input id="secondName" defaultValue="Ahmed" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="nationality">Nationality</Label>
              <Input id="nationality" value="Egyptian" disabled />
            </div>

            {/* Family Name */}
            <div className="space-y-2">
              <Label htmlFor="familyName" className="flex items-center gap-1">
                Family Name <span className="text-red-500 text-xs">*</span>
              </Label>
              <Input id="familyName" defaultValue="Omiesh" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="profile" className="flex items-center gap-1">
                Profile
              </Label>
              <Input id="profile" value="Regular" disabled />
            </div>
          </div>
        </CardContent>

        <CardFooter className="gap-2">
          <Button>Save</Button>
          <Button variant="outline" className="ml-auto hidden md:inline-flex">
            Change Password
          </Button>
          <Button variant="destructive" className="hidden md:inline-flex">
            Delete Account
          </Button>
        </CardFooter>
      </Card>

      {/* --- Column 2: Notifications Center (1/3 width on large screens) --- */}
      <Notifications />
    </div>
  );
}

function Notifications() {
  const getIcon = (type: string) => {
    switch (type) {
      case "info":
        return <AlertCircle className="w-4 h-4 text-blue-500" />;
      case "warning":
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      default:
        return <Bell className="w-4 h-4 text-green-500" />;
    }
  };

  return (
    <Card className="self-start">
      <CardHeader>
        <CardTitle className="text-2xl">Notification Center</CardTitle>
        <CardDescription>
          Review recent account activity and system alerts.
        </CardDescription>
      </CardHeader>

      {/* List of Notifications */}
      <CardContent className="space-y-3">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className="flex items-start p-3 border rounded-lg gap-2"
          >
            <div className="mt-1">{getIcon(notif.type)}</div>
            <div className="grow">
              <p className="text-sm font-medium">{notif.message}</p>
              <p className="text-xs text-muted-foreground mt-1">{notif.time}</p>
            </div>

            <Button variant="ghost" size="sm" className="rounded-full">
              <XIcon />
            </Button>
          </div>
        ))}
      </CardContent>

      <CardFooter>
        <Button variant="link" className="text-sm pl-0!">
          View All Notifications <ChevronsRightIcon />
        </Button>
      </CardFooter>
    </Card>
  );
}
