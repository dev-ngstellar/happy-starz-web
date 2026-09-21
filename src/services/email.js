import emailjs from "@emailjs/browser";
import { EMAIL_CONFIG } from "../config/emailconfig";

const sendEmail = async (templateId, templateParams) => {
  return emailjs.send(
    EMAIL_CONFIG.serviceId,
    templateId,
    {
      ...templateParams,
      to_email: EMAIL_CONFIG.recipientEmail,
    },
    {
      publicKey: EMAIL_CONFIG.publicKey,
    }
  );
};


/**
 * Programme / Admission Enquiry
 */
export const sendEnquiryEmail = async (formData) => {
  const templateParams = {
    parent_name: formData.parentName || "",
    child_name: formData.childName || "",
    child_grade: formData.childGrade || "",
    location: formData.location || "",
    course: formData.course || "",
    learning_mode: formData.learningMode || "",
    phone: formData.phone || "",
    whatsapp: formData.whatsapp || "",
    preferred_contact: formData.preferredContact || "",
  };

  try {
    return await sendEmail(
      EMAIL_CONFIG.templates.enquiry,
      templateParams
    );
  } catch (error) {
    console.error("Happy StarZ Academy enquiry email error:", error);
    throw error;
  }
};


/**
 * General Contact Message
 */
export const sendContactEmail = async (formData) => {
  const templateParams = {
    name: formData.name || "",
    phone: formData.phone || "",
    email: formData.email || "",
    preferred_contact: formData.preferredContact || "",
    message: formData.message || "",
  };

  try {
    return await sendEmail(
      EMAIL_CONFIG.templates.contact,
      templateParams
    );
  } catch (error) {
    console.error("Happy StarZ Academy contact email error:", error);
    throw error;
  }
};
