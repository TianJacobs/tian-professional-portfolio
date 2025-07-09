
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [state, handleSubmit] = useForm("mjkrqjer");

  // Show success message when form is successfully submitted
  React.useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
    }
  }, [state.succeeded, toast]);

  if (state.succeeded) {
    return (
      <div className="text-center p-8">
        <h3 className="text-xl font-semibold mb-2">Thank you!</h3>
        <p className="text-muted-foreground">Your message has been sent successfully. I'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            required
            disabled={state.submitting}
          />
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
            className="text-sm text-destructive"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Your email"
            required
            disabled={state.submitting}
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            className="text-sm text-destructive"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Subject *</Label>
        <Input
          id="subject"
          name="subject"
          placeholder="Subject"
          required
          disabled={state.submitting}
        />
        <ValidationError 
          prefix="Subject" 
          field="subject"
          errors={state.errors}
          className="text-sm text-destructive"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your message"
          required
          rows={6}
          disabled={state.submitting}
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
          className="text-sm text-destructive"
        />
      </div>

      <Button 
        type="submit" 
        className="w-full" 
        disabled={state.submitting}
      >
        {state.submitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
