"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { apiFetch } from "@/lib/api";

export default function CallReport() {
  // Optional state to manage form Inputs
  const [customer_name, setCustomerName] = useState<string>("");
  const [account_name, setAccountName] = useState<string>("");
  const [service_type, setServiceType] = useState<string>("Internet");
  const [reason, setReason] = useState<string>("Retention");
  const [retention_strategy, setRetentionStrategy] =
    useState<string>("Retained");
  const [offer_made, setOfferMade] = useState<string>("");
  const [call_outcome, setCallOutcome] = useState<string>("");
  const [supervisor_id, setSupervisorId] = useState<string>("1");
  const [team_id, setTeamId] = useState<string>("1");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Example payload
    const payload = {
      customer_name,
      account_name,
      service_type,
      reason,
      retention_strategy,
      offer_made,
      call_outcome,
      supervisor_id,
      team_id,
    };

    try {
      // Call your API to save the report
      const response = await apiFetch("/report/send", {
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
            value={customer_name}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </div>

        <div className="flex gap-4 w-200">
          <Label>Account Number</Label>
          <Input
            type="text"
            value={account_name}
            onChange={(e) => setAccountName(e.target.value)}
          />
        </div>

        <div className="flex gap-4">
          <Label>Service Type</Label>
          <select
            value={service_type}
            onChange={(e) => setServiceType(e.target.value)}
          >
            <option>Internet</option>
            <option>TV</option>
            <option>Phone</option>
            <option>Bundle</option>
          </select>
        </div>

        {/* Call Details */}
        <div className="flex gap-4">
          <Label>Reason</Label>
          <select value={reason} onChange={(e) => setReason(e.target.value)}>
            <option>Retention</option>
            <option>Billing</option>
            <option>Tech Support</option>
            <option>Complaint</option>
          </select>
        </div>

        {/* Call Details */}
        <div className="flex gap-4">
          <Label>Retention Stategy</Label>
          <select
            value={retention_strategy}
            onChange={(e) => setRetentionStrategy(e.target.value)}
          >
            <option>Retention</option>
            <option>Billing</option>
            <option>Tech Support</option>
            <option>Complaint</option>
          </select>
        </div>

        <div className="flex gap-4">
          <Label>Offer Made</Label>
          <select
            value={offer_made}
            onChange={(e) => setOfferMade(e.target.value)}
          >
            <option>10 off</option>
            <option>Free</option>
          </select>
        </div>

        <div className="flex gap-4">
          <Label>Call Outcome</Label>
          <select
            value={call_outcome}
            onChange={(e) => setCallOutcome(e.target.value)}
          >
            <option>Retained</option>
            <option>Cancelled</option>
            <option>Issue Resolved</option>
            <option>Follow-up Required</option>
          </select>
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
