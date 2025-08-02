"use client";

import { toast } from "sonner"; // or '@/components/ui/use-toast' if using that version
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  const handleSave = () => {
    // Simulate save
    toast.success("Settings saved successfully!");
  };

  return (
    <div className="space-y-6">
      <Card className="bg-gray-900 border-gray-800 text-white">
        <CardHeader>
          <CardTitle>Admin Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="Admin Name"
                className="mt-1 bg-gray-800 text-white"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="admin@example.com"
                className="mt-1 bg-gray-800 text-white"
              />
            </div>
            <div>
              <Label htmlFor="alert">Alert Threshold</Label>
              <Input
                id="alert"
                placeholder="E.g. 20% battery"
                className="mt-1 bg-gray-800 text-white"
              />
            </div>
          </div>

          <Button onClick={handleSave} className="mt-4" variant="default">
            Save Settings
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
