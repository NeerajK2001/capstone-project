import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m1t7pmo",
        "template_dhg1cdk",
        form.current,
        "MzjPpyVMBYVOizxZf"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email Sent successfully!", {
            hideProgressBar: true,
          });
        },
        (error) => {
          console.log(error.text);
          toast.success("There is a problem in Sending Email", {
            hideProgressBar: true,
          });
        }
      );
    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <h2>Contact Us</h2>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Subject</label>
      <input type="text" name="user_subject" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Contact;
