"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface AIFeedback {
  sentiment: string;
  keyTopics: string;
  suggestedActions: string;
}

export default function CallReport() {
  // Optional state to manage form Inputs
  const [customerName, setCustomerName] = useState<string>("");
  const [accountNumber, setAccountNumber] = useState<string>("");
  const [serviceType, setServiceType] = useState<string>("Internet");
  const [callType, setCallType] = useState<string>("Retention");
  const [callOutcome, setCallOutcome] = useState<string>("Retained");
  const [reason, setReason] = useState<string>("");
  const [callSummary, setCallSummary] = useState<string>("");

  // Example AI feedback state
  const [aiFeedback, setAiFeedback] = useState<AIFeedback>({
    sentiment: "Positive / Neutral / Negative",
    keyTopics: "Internet Speed, Billing",
    suggestedActions: "Offer discount, explain upgrade options",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Example payload
    const payload = {
      customerName,
      accountNumber,
      serviceType,
      callType,
      callOutcome,
      reason,
      callSummary,
      aiFeedback,
    };

    try {
      // Call your API to save the report
      const response = await fetch("/api/calls", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to save call report");
      }

      // Optionally redirect or show success message
      alert("Call report submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("Error submitting call report");
    }
  };

  return (
    <div className="p-16 space-y-6">
      <h1 className="text-2xl font-bold">New Call Report</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Customer Info */}
        <div className="flex gap-4 w-200">
          <Label>Customer Name</Label>
          <Input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </div>

        <div className="flex gap-4 w-200">
          <Label>Account Number</Label>
          <Input
            type="text"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            required
          />
        </div>

        <div className="flex gap-4">
          <Label>Service Type</Label>
          <select
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            required
          >
            <option>Internet</option>
            <option>TV</option>
            <option>Phone</option>
            <option>Bundle</option>
          </select>
        </div>

        {/* Call Details */}
        <div className="flex gap-4">
          <Label>Call Type</Label>
          <select
            value={callType}
            onChange={(e) => setCallType(e.target.value)}
            required
          >
            <option>Retention</option>
            <option>Billing</option>
            <option>Tech Support</option>
            <option>Complaint</option>
          </select>
        </div>

        <div className="flex gap-4">
          <Label>Call Outcome</Label>
          <select
            value={callOutcome}
            onChange={(e) => setCallOutcome(e.target.value)}
            required
          >
            <option>Retained</option>
            <option>Cancelled</option>
            <option>Issue Resolved</option>
            <option>Follow-up Required</option>
          </select>
        </div>

        <div className="flex gap-4">
          <Label>Reason for Cancellation / Complaint</Label>
          <Textarea
            className="w-120"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Type your message here."
          />
        </div>

        <div className="flex gap-4">
          <Label>Call Summary</Label>
          <Textarea
            className="w-120"
            value={callSummary}
            onChange={(e) => setCallSummary(e.target.value)}
            required
            placeholder="Type your message here."
          />
        </div>

        {/* AI Feedback Section */}
        <div className="bg-gray-50 p-4 rounded">
          <h2 className="font-semibold">AI Suggestions</h2>
          <p>Sentiment: {aiFeedback.sentiment}</p>
          <p>Key Topics: {aiFeedback.keyTopics}</p>
          <p>Suggested Actions: {aiFeedback.suggestedActions}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-4">
          <Button variant="outline" onClick={() => alert("Draft saved!")}>
            Save Draft
          </Button>
          <Button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Submit
          </Button>
          <Button variant="destructive" onClick={() => window.history.back()}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
