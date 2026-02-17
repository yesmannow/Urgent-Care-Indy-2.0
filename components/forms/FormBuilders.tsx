"use client";

import {
  FormInput,
  FormSelect,
  FormTextArea,
  FormWrapper,
} from "@/components/ui/forms";

export function PatientIntakeForm() {
  return (
    <FormWrapper
      title="New Patient Registration"
      description="Please complete this form before your arrival to reduce wait times."
      onSubmit={() => console.log("Intake Submitted - Ready for iSalus Hook")}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <FormInput label="First Name" name="firstName" required />
        <FormInput label="Last Name" name="lastName" required />
        <FormInput label="Date of Birth" name="dob" type="date" required />
        <FormInput label="Phone Number" name="phone" type="tel" required />
      </div>
      <FormInput label="Email Address" name="email" type="email" required />
      <FormInput label="Home Address" name="address" required />
      <FormTextArea
        label="Reason for Visit / Main Symptoms"
        name="symptoms"
        placeholder="Briefly describe what brings you in today..."
      />
      <FormSelect
        label="Insurance Provider"
        name="insurance"
        options={[
          "Select...",
          "Anthem",
          "United HealthCare",
          "Cigna",
          "Medicare",
          "Medicaid (Indiana Only)",
          "Self-Pay / None",
        ]}
      />
    </FormWrapper>
  );
}

export function DOTPhysicalForm() {
  return (
    <FormWrapper
      title="DOT Physical Pre-Registration"
      description="Commercial Driver Medical Examination preliminary data."
      onSubmit={() => console.log("DOT Submitted")}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <FormInput label="Driver First Name" name="firstName" required />
        <FormInput label="Driver Last Name" name="lastName" required />
        <FormInput label="Driver License #" name="license" required />
        <FormSelect
          label="License State"
          name="state"
          options={["IN", "OH", "KY", "IL", "MI", "Other"]}
        />
      </div>
      <FormInput label="Employer / Carrier Name" name="employer" />
      <div className="p-4 bg-amber-50 rounded-lg border border-amber-200 text-sm text-amber-800">
        <strong>Note:</strong> Please bring your prescription glasses, hearing
        aids, and list of current medications to your appointment.
      </div>
    </FormWrapper>
  );
}

export function SportsPhysicalForm() {
  return (
    <FormWrapper
      title="Sports Physical Registration"
      description="IHSAA Pre-Participation Physical Evaluation Form."
      onSubmit={() => console.log("Sports Physical Submitted")}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <FormInput label="Student Name" name="studentName" required />
        <FormInput label="School" name="school" required />
        <FormInput label="Grade Level" name="grade" required />
        <FormSelect
          label="Sport(s)"
          name="sport"
          options={[
            "Football",
            "Basketball",
            "Soccer",
            "Track",
            "Baseball/Softball",
            "Other",
          ]}
        />
      </div>
      <FormTextArea
        label="Relevant Medical History"
        name="history"
        placeholder="Previous concussions, surgeries, or asthma..."
      />
    </FormWrapper>
  );
}
