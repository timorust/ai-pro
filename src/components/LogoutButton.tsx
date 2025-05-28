"use client";

import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "sonner";

import { useRouter } from "next/navigation";
import { logOutAction } from '@/actions/users'

function LogOutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogOut = async () => {
    setLoading(true);

    const {errorMessage} = await logOutAction();

 if (!errorMessage) {
  toast.success("Success", {
    description: "You have been logged out",
    className: "bg-green-100 text-green-800 border border-green-300",
  });
  router.push("/");
} else {
  toast.error(errorMessage, {
    description: "You exit from system",
    className: "bg-red-100 text-red-800 border border-red-300",
  });
}

    setLoading(false);
  };

  return (
    <Button
      variant="outline"
      onClick={handleLogOut}
      disabled={loading}
      className="w-24"
    >
      {loading ? <Loader2 className="animate-spin" /> : "Log Out"}
    </Button>
  );
}

export default LogOutButton;
