"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight } from "lucide-react";
import { cloneElement, type ReactElement } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  budgetLabels,
  budgetValues,
  buildMailtoLink,
  contactFormDefaults,
  contactFormSchema,
  type ContactFormValues,
  interestLabels,
  interestValues,
} from "@/lib/contact";

type ContactFormProps = {
  onOpenDraft?: (href: string) => void;
};

export function ContactForm({ onOpenDraft }: ContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: contactFormDefaults,
    mode: "onBlur",
  });

  function openDraft(values: ContactFormValues) {
    const href = buildMailtoLink(values);
    if (onOpenDraft) {
      onOpenDraft(href);
      return;
    }
    window.location.assign(href);
  }

  return (
    <form
      className="grid gap-5"
      noValidate
      onSubmit={handleSubmit(openDraft)}
      aria-label="Project enquiry"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Name" error={errors.name?.message} required>
          <Input
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            {...register("name")}
          />
        </FormField>
        <FormField
          label="Work email"
          error={errors.email?.message}
          required
        >
          <Input
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            {...register("email")}
          />
        </FormField>
      </div>

      <FormField label="Company (optional)" error={errors.company?.message}>
        <Input
          autoComplete="organization"
          aria-invalid={Boolean(errors.company)}
          {...register("company")}
        />
      </FormField>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          label="Project type"
          error={errors.interest?.message}
          required
        >
          <select
            className="form-select"
            aria-invalid={Boolean(errors.interest)}
            {...register("interest")}
          >
            {interestValues.map((value) => (
              <option key={value} value={value}>
                {interestLabels[value]}
              </option>
            ))}
          </select>
        </FormField>
        <FormField
          label="Estimated budget"
          error={errors.budget?.message}
          required
        >
          <select
            className="form-select"
            aria-invalid={Boolean(errors.budget)}
            {...register("budget")}
          >
            {budgetValues.map((value) => (
              <option key={value} value={value}>
                {budgetLabels[value]}
              </option>
            ))}
          </select>
        </FormField>
      </div>

      <FormField
        label="What should the system help you do?"
        error={errors.details?.message}
        required
      >
        <Textarea
          rows={6}
          aria-invalid={Boolean(errors.details)}
          placeholder="Describe the workflow, who uses it, and what a useful outcome looks like."
          {...register("details")}
        />
      </FormField>

      <div className="flex flex-col items-start gap-3 pt-2 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" className="h-12 px-5">
          Open email draft
          <ArrowUpRight aria-hidden="true" />
        </Button>
        <p className="max-w-sm text-sm text-muted-foreground">
          This opens your email application with the project details filled in.
          Nothing is submitted through this website.
        </p>
      </div>
    </form>
  );
}

function FormField({
  label,
  error,
  required = false,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: ReactElement<{
    id?: string;
    "aria-describedby"?: string;
    "aria-required"?: boolean;
  }>;
}) {
  const id = `field-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  const errorId = `${id}-error`;

  return (
    <div className="grid gap-2">
      <Label htmlFor={id} className="text-sm font-semibold">
        {label}
      </Label>
      {cloneElement(children, {
        id,
        "aria-describedby": error ? errorId : undefined,
        "aria-required": required || undefined,
      })}
      {error ? (
        <p id={errorId} role="alert" className="text-sm text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
