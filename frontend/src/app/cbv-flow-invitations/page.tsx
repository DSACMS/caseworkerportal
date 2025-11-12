"use client";

import styles from "./page.module.css";
import { Title } from "@trussworks/react-uswds";
import { useLocale } from "@/context/LocaleContext";
import FormWrapper from "@/components/FormWrapper";
import type { DataStructType, FieldSetType } from "@/types/forms";

type CBVFlowInvitationsProps = {
  payIncomeDays?: number;
};

export default function CBVFlowInvitations({
  payIncomeDays = 30,
}: CBVFlowInvitationsProps) {
  const { t } = useLocale();

  const translate = (
    key: string,
    fallback: string,
    options?: Record<string, string | number>
  ) => {
    const result = t(key, options);
    return result === key ? fallback : result;
  };

  const renderHTML = (html: string) => (
    <span dangerouslySetInnerHTML={{ __html: html }} />
  );

  // Name Fieldset
  const nameFields: FieldSetType = {
    legend: translate(
      "en.caseworker.cbv_flow_invitations.invite.name_legend",
      "Applicant name"
    ),
    legendStyle: "large",
    children: [
      {
        label: {
          htmlFor: "cbv_applicant_first_name",
          text: translate(
            "en.caseworker.cbv_flow_invitations.invite.first_name",
            "First name"
          ),
        },
        textInput: {
          id: "cbv_applicant_first_name",
          name: "cbv_applicant[first_name]",
          type: "text",
        },
      },
      {
        label: {
          htmlFor: "cbv_applicant_middle_name",
          text: translate(
            "en.caseworker.cbv_flow_invitations.invite.middle_name",
            "Middle name"
          ),
        },
        textInput: {
          id: "cbv_applicant_middle_name",
          name: "cbv_applicant[middle_name]",
          type: "text",
        },
      },
      {
        label: {
          htmlFor: "cbv_applicant_last_name",
          text: translate(
            "en.caseworker.cbv_flow_invitations.invite.last_name",
            "Last name"
          ),
        },
        textInput: {
          id: "cbv_applicant_last_name",
          name: "cbv_applicant[last_name]",
          type: "text",
        },
      },
    ],
  };

  // Client details
  const detailKeys = [
    "case_number",
    "beacon_id",
    "agency_id_number",
    "client_id_number",
    "snap_application_date",
    "email_address",
  ];

  const detailFields: FieldSetType = {
    legend: translate(
      "en.caseworker.cbv_flow_invitations.invite.client_info",
      "Client information"
    ),
    legendStyle: "large",
    children: detailKeys.map((key) => ({
      label: {
        htmlFor: `cbv_applicant_${key}`,
        text: translate(
          `en.caseworker.cbv_flow_invitations.invite.${key}`,
          key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
        ),
      },
      textInput: {
        id: `cbv_applicant_${key}`,
        name: `cbv_applicant[${key}]`,
        type:
          key === "email_address"
            ? "email"
            : key === "snap_application_date"
            ? "date"
            : "text",
      },
    })),
  };

  // Language radio buttons
  const languageOptions = [
    { value: "en", label: "English" },
    { value: "es", label: "Spanish" },
    { value: "vi", label: "Vietnamese" },
    { value: "zh", label: "Chinese" },
  ];

  const languageFieldset: FieldSetType = {
    legend: translate(
      "en.caseworker.cbv_flow_invitations.invite.language_label",
      "Preferred language"
    ),
    legendStyle: "large",
    children: [
      {
        radioGroup: {
          name: "cbv_applicant[language]",
          options: languageOptions,
        },
      },
    ],
  };

  // Combine all fieldsets
  const formData: DataStructType = {
    fieldSets: [nameFields, detailFields, languageFieldset],
  };

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.innerWrapper} bg-base-lightest`}>
        <div className={styles.innerHeaderWrapper}>
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
                `Provide some details about the client so we can send them a link to verify their pay information. We'll request the past ${payIncomeDays} days of income, based on the client's application or recertification date.`,
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
