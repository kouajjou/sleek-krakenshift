import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const VALID_EMAIL = "kouajjou@gmail.com";
const VALID_PASSWORD = "crossmoto6241";

const Index = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      if (values.email === VALID_EMAIL && values.password === VALID_PASSWORD) {
        toast({
          title: "Success",
          description: "Login successful!",
        });
        navigate("/dashboard");
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Invalid email or password.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Illustration */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-purple-100 via-purple-200 to-pink-200">
        <div className="w-full h-full flex items-center justify-center p-12">
          <img 
            src="/lovable-uploads/ece64c63-8dc0-4c1a-8038-9c409f712543.png" 
            alt="Kraken Shield" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-6">
          <img 
            src="https://assets.kraken.com/files/kraken-logo-light-mode.svg" 
            alt="Kraken Logo" 
            className="h-8"
          />
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-gray-800 flex items-center gap-2">
              <span>🌐</span>
              U.S. English
            </button>
            <Button 
              variant="ghost" 
              className="text-purple-600 hover:text-purple-700 hover:bg-purple-50"
            >
              Create Account
            </Button>
          </div>
        </div>

        {/* Form Container */}
        <div className="flex-1 flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center">
              <h1 className="text-2xl font-semibold text-gray-900">Sign in to Kraken</h1>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Email or username"
                          {...field}
                          className="h-12 bg-gray-50 border-gray-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder="Password"
                            type="password"
                            {...field}
                            className="h-12 bg-gray-50 border-gray-200"
                          />
                          <button
                            type="button"
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                          >
                            <Eye className="h-5 w-5" />
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Forgot</span>
                  <div className="space-x-1">
                    <a href="#" className="text-purple-600 hover:text-purple-700">password</a>
                    <span className="text-gray-600">or</span>
                    <a href="#" className="text-purple-600 hover:text-purple-700">username</a>
                    <span className="text-gray-600">?</span>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-purple-500 hover:bg-purple-600 text-white font-medium"
                  disabled={isLoading}
                >
                  Continue
                </Button>
              </form>
            </Form>

            <div className="text-center text-sm">
              <span className="text-gray-600">Need help? </span>
              <a href="#" className="text-purple-600 hover:text-purple-700">Contact Support</a>
            </div>

            <div className="flex justify-center space-x-4 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-700">Privacy Notice</a>
              <a href="#" className="hover:text-gray-700">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;