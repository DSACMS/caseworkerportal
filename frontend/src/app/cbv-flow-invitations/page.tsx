"use client";

import styles from "./page.module.css";
import { Title } from "@trussworks/react-uswds";
import { useLocale } from "@/context/LocaleContext";
import FormWrapper from "@/components/FormWrapper";
import type { DataStructType, FieldSetType } from "@/types/forms";

type CBVFlowInvitationsProps = {
  payIncomeDays?: number;
};

export default function CBVFlowInvitations({ payIncomeDays = 30 }: CBVFlowInvitationsProps) {
  const { t } = useLocale();

  function renderHTML(html: string) {
    return <span dangerouslySetInnerHTML={{ __html: html }} />;
  }

  const translate = (key: string, fallback: string, options?: Record<string, any>) => {
    const result = t(key, options);
    return result === key ? fallback : result;
  };

  const presetNameFields: FieldSetType = {
    legend: "Name",
    legendStyle: "large",
    children: [
      {
        label: { htmlFor: "first-name", text: "First or given name" },
        span: { className: "usa-hint", text: "For example, Jose, Darren, or Mai" },
        textInput: { id: "first-name", name: "first-name", type: "text" },
      },
      {
        label: { htmlFor: "middle-name", text: "Middle name" },
        span: { className: "usa-hint", text: "For example, Martinez Gonzalez, Gu, or Smith" },
        textInput: { id: "middle-name", name: "middle-name", type: "text" },
      },
      {
        label: { htmlFor: "last-name", text: "Last name" },
        span: { className: "usa-hint", text: "For example, Smith, Chen, or Patel" },
        textInput: { id: "last-name", name: "last-name", type: "text" },
      },
    ],
  };

  const sandboxFieldKeys = [
    "agency_id_number",
    "beacon_id",
    "client_id_number",
    "email_address",
    "first_name",
    "middle_name",
    "last_name",
    "language_label",
    "snap_application_date",
  ];

  const sandboxFields: FieldSetType = {
    legend: translate(
      "en.caseworker.cbv_flow_invitations.sandbox.header",
      "Sandbox client information"
    ),
    legendStyle: "large",
    children: sandboxFieldKeys.map((key) => ({
      label: {
        htmlFor: key,
        text: translate(
          `en.caseworker.cbv_flow_invitations.sandbox.invite.${key}`,
          key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) 
        ),
      },
      span: { className: "usa-hint", text: "" }, 
      textInput: { id: key, name: key, type: key.includes("email") ? "email" : "text" },
    })),
  };

  const formData: DataStructType = {
    fieldSets: [presetNameFields, sandboxFields],
  };

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.innerWrapper} bg-base-lightest`}>
        <div className={`${styles.innerHeaderWrapper}`}>
          <Title className={styles.mainTitle}>
            <h1>
              {translate(
                "en.caseworker.cbv_flow_invitations.new.header",
                "Send an invite link"
              )}
            </h1>
          </Title>

          <p className={styles.description}>
            {renderHTML(
              translate(
                "en.caseworker.cbv_flow_invitations.new.description_html.default",
                `Provide some details about the client so we can send them a link to verify their pay information. We'll request the past ${payIncomeDays} days of income, based on the client's application/recertification date.`,
                { pay_income_days: payIncomeDays }
              )
            )}
          </p>
        </div>

        <FormWrapper data={formData} />
      </div>
    </div>
  );
}
