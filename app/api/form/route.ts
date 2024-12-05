import { EmailTemplate } from "@/app/Components/EmailTemplate/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const formData = await request.json();

  console.log(formData);

  try {
    // Determine form type and prepare email data
    const emailData = formData.formType
      ? {
          // Business inquiry form
          subject: `Business Inquiry`,
          userData: {
            name: formData.name,
            email: formData.email,
            emailSubject: formData.subject,
            message: formData.message,
            formType: formData.formType,
          },
        }
      : {
          // Purchase query form
          subject: `Purchase Query: ${formData.productName}`,
          userData: {
            name: formData.fullName,
            email: formData.email,
            phone: formData.phoneNumber,
            reasonOfPurchase: formData.reasonOfPurchase,
            size: formData.size,
            message: formData.message,
            productName: formData.productName,
          },
        };

    // Send email to admin
    const { data: adminEmailData, error: adminEmailError } =
      await resend.emails.send({
        from: "Inquiry <info@ufksolutions.com>",
        to: ["info@omarbazaz.com"],
        subject: emailData.subject,
        react: EmailTemplate({ userData: emailData.userData }),
      });

    if (adminEmailError) {
      return Response.json({ error: adminEmailError }, { status: 500 });
    }

    return Response.json({ adminEmailData });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
