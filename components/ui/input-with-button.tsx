import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PocketBase from "pocketbase";

// Initialize PocketBase client
const pb = new PocketBase("https://engage-dev.com/pb");

export function InputWithButton() {
  const [email, setEmail] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = { email };
      const record = await pb.collection("cook_form_submissions").create(data);
      console.log("Record created:", record);
      // Optionally, reset the form
      setEmail("");
      alert("Email submitted successfully!");
    } catch (error) {
      console.error("Error creating record:", error);
      alert("Failed to submit email. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-sm items-center space-x-2"
    >
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleInputChange}
        className="border-neutral-500"
      />
      <Button type="submit">Send</Button>
    </form>
  );
}
