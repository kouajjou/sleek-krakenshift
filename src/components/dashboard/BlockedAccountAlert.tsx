import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface BlockedAccountAlertProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onLogout: () => void;
}

export const BlockedAccountAlert = ({ open, onOpenChange, onLogout }: BlockedAccountAlertProps) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="bg-[#1A1F2C] border-[#6E59A5]">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-[#F1F1F1] text-xl font-inter">
            Compte Bloqué / Account Blocked
          </AlertDialogTitle>
          <AlertDialogDescription className="text-[#F1F1F1] text-base font-inter">
            Votre compte est bloqué. Veuillez contacter le support pour débloquer votre compte.
            <br /><br />
            Your account is blocked. Please contact support to unlock your account.
            <br /><br />
            Support: <a href="mailto:support@kraken.com" className="text-[#9b87f5] hover:underline">support@kraken.com</a>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex flex-col gap-2">
          <Button 
            onClick={onLogout}
            className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white flex items-center justify-center gap-2 font-inter"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};