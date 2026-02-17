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
      subtitle="Please complete this form before your arrival to reduce wait times."
    >
      <div className="space-y-6">
        <FormInput label="Full Name" name="fullName" required placeholder="Legal name as on ID" />
        <FormInput label="Date of Birth" name="dob" type="date" required />
        <FormInput label="Phone" name="phone" type="tel" required placeholder="(317) 555-0000" />
        <FormInput label="Address" name="address" required placeholder="Street, City, State, ZIP" />
      </div>
      <div className="space-y-6">
        <h3 className="text-lg font-bold text-slate-800 border-b border-slate-200 pb-2">Insurance</h3>
        <FormSelect
          label="Carrier"
          name="carrier"
          options={["Anthem", "UHC", "Cigna", "Medicare", "Medicaid-IN", "Self-Pay"]}
        />
        <FormInput label="Member ID" name="memberId" placeholder="Insurance member ID" />
      </div>
      <div className="space-y-6">
        <h3 className="text-lg font-bold text-slate-800 border-b border-slate-200 pb-2">Clinical</h3>
        <FormTextArea
          label="Chief Complaint"
          name="chiefComplaint"
          placeholder="Briefly describe what brings you in today..."
          rows={4}
        />
      </div>
    </FormWrapper>
  );
}

export function DOTPhysicalForm() {
  return (
    <FormWrapper
      title="DOT Physical Pre-Registration"
      subtitle="Commercial driver medical examination preliminary data."
    >
      <div className="p-4 bg-amber-100 border border-amber-300 rounded-xl text-amber-900 text-sm font-medium">
        Bring your current medical card and list of medications.
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <FormInput label="Driver Name" name="driverName" required />
        <FormInput label="License #" name="licenseNumber" required />
        <FormInput label="State" name="state" required placeholder="e.g. IN" />
        <FormInput label="Employer" name="employer" />
      </div>
      <FormSelect
        label="Do you wear glasses?"
        name="wearsGlasses"
        options={["Yes", "No"]}
      />
    </FormWrapper>
  );
}

export function SportsPhysicalForm() {
  return (
    <FormWrapper
      title="Sports Physical Registration"
      subtitle="IHSAA Pre-Participation Physical Evaluation"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <FormInput label="Student Name" name="studentName" required />
        <FormInput label="School" name="school" required />
        <FormInput label="Grade Level" name="gradeLevel" required placeholder="e.g. 9, 10, 11, 12" />
        <FormInput label="Sport(s)" name="sports" placeholder="e.g. Football, Basketball" />
        <FormInput label="Parent Name" name="parentName" required />
      </div>
      <div className="space-y-6">
        <h3 className="text-lg font-bold text-slate-800 border-b border-slate-200 pb-2">History</h3>
        <FormSelect
          label="History of concussion?"
          name="concussionHistory"
          options={["Yes", "No"]}
        />
        <FormSelect
          label="Use of inhaler?"
          name="inhalerUse"
          options={["Yes", "No"]}
        />
      </div>
    </FormWrapper>
  );
}
