import { useEffect } from "react";

export default function MailchimpForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "mcjs";
    script.src = "https://chimpstatic.com/mcjs-connected/js/users/bd6a35e506d88185b4482e5bf/fcfbc579898781a911eac5427.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="mailchimp-signup">
      <h3>Stay In The Loop</h3>
      <p>Be the first to know when new art drops, events go live, and articles release.</p>
      {/* Mailchimp should inject the form below if set up correctly */} 
    </div>
  );
}
