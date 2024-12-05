// Start of Selection
import * as React from "react";

export interface EmailTemplateProps {
  userData: {
    name: string;
    email: string;
    message: string;
    formType?: string;
    phone?: string;
    reasonOfPurchase?: string;
    size?: string;
    productName?: string;
    isConfirmation?: boolean;
    emailSubject?: string;
  };
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  userData,
}) => (
  <div
    style={{
      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      maxWidth: "600px",
      margin: "0 auto",
      padding: "32px",
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      border: "1px solid #eaeaea",
    }}
  >
    <div
      style={{
        textAlign: "center",
        marginBottom: "32px",
      }}
    >
      <h1
        style={{
          color: "#111111",
          fontSize: "24px",
          fontWeight: "600",
          margin: "0",
          padding: "0",
        }}
      >
        {userData.isConfirmation
          ? "New Inquiry Received"
          : userData.formType
          ? `New ${userData.formType} Inquiry`
          : `New Purchase Query`}
      </h1>
      {userData.productName && (
        <p
          style={{
            color: "#666666",
            fontSize: "16px",
            marginTop: "8px",
          }}
        >
          Product: {userData.productName}
        </p>
      )}
      {userData.emailSubject && (
        <p
          style={{
            color: "#666666",
            fontSize: "16px",
            marginTop: "4px",
            fontStyle: "italic",
          }}
        >
          Subject: {userData.emailSubject}
        </p>
      )}
    </div>

    <div
      style={{
        backgroundColor: "#fafafa",
        padding: "24px",
        borderRadius: "8px",
      }}
    >
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            <td
              style={{
                padding: "12px 0",
                color: "#666666",
                width: "140px",
                fontSize: "14px",
              }}
            >
              Name
            </td>
            <td style={{ padding: "12px 0", fontSize: "14px" }}>
              {userData.name}
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "12px 0",
                color: "#666666",
                fontSize: "14px",
              }}
            >
              Email
            </td>
            <td style={{ padding: "12px 0", fontSize: "14px" }}>
              {userData.email}
            </td>
          </tr>
          {userData.phone && (
            <tr>
              <td
                style={{
                  padding: "12px 0",
                  color: "#666666",
                  fontSize: "14px",
                }}
              >
                Phone
              </td>
              <td style={{ padding: "12px 0", fontSize: "14px" }}>
                {userData.phone}
              </td>
            </tr>
          )}
          {userData.reasonOfPurchase && (
            <tr>
              <td
                style={{
                  padding: "12px 0",
                  color: "#666666",
                  fontSize: "14px",
                }}
              >
                Purchase Reason
              </td>
              <td style={{ padding: "12px 0", fontSize: "14px" }}>
                {userData.reasonOfPurchase}
              </td>
            </tr>
          )}
          {userData.size && (
            <tr>
              <td
                style={{
                  padding: "12px 0",
                  color: "#666666",
                  fontSize: "14px",
                }}
              >
                Size Selected
              </td>
              <td style={{ padding: "12px 0", fontSize: "14px" }}>
                {userData.size}
              </td>
            </tr>
          )}
          {userData.emailSubject && (
            <tr>
              <td
                style={{
                  padding: "12px 0",
                  color: "#666666",
                  fontSize: "14px",
                }}
              >
                Subject
              </td>
              <td style={{ padding: "12px 0", fontSize: "14px" }}>
                {userData.emailSubject}
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div
        style={{
          marginTop: "24px",
          padding: "16px",
          backgroundColor: "#ffffff",
          borderRadius: "6px",
          border: "1px solid #eaeaea",
        }}
      >
        <p
          style={{
            color: "#666666",
            fontSize: "14px",
            margin: "0 0 8px 0",
          }}
        >
          Message
        </p>
        <p
          style={{
            fontSize: "14px",
            margin: "0",
            lineHeight: "1.5",
          }}
        >
          {userData.message}
        </p>
      </div>
    </div>

    <div
      style={{
        marginTop: "32px",
        textAlign: "center",
        color: "#666666",
        fontSize: "14px",
      }}
    >
      This is an automated notification from your website's contact system.
    </div>
  </div>
);
