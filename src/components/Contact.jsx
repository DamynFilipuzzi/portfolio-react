import React, { useEffect, useRef } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

import validator from "validator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Label } from "@radix-ui/react-label";

export const Contact = () => {
  const form = useRef();
  const { toast } = useToast();

  const [showErrors, setErrors] = useState(false);
  const [nameIsValid, setNameError] = useState(false);
  const [emailIsValid, setEmailError] = useState(false);
  const [titleIsValid, setTitleError] = useState(false);
  const [msgIsValid, setMsgError] = useState(false);

  useEffect(() => {
    showErrors && nameIsValid && emailIsValid && titleIsValid && msgIsValid
      ? handleErrors()
      : null;
  });

  const handleErrors = () => {
    setErrors(!showErrors);
  };

  const handleName = () => {
    setNameError(!nameIsValid);
  };

  const handleEmail = () => {
    setEmailError(!emailIsValid);
  };

  const handleTitle = () => {
    setTitleError(!titleIsValid);
  };

  const handleMsg = () => {
    setMsgError(!msgIsValid);
  };

  function validateName(name) {
    if (!validator.isLength(name, 2)) {
      if (nameIsValid) {
        handleName();
      }
      return true;
    }
    if (!nameIsValid) {
      handleName();
    }
    return false;
  }

  function validateEmail(email) {
    if (!validator.isEmail(email)) {
      if (emailIsValid) {
        handleEmail();
      }
      return true;
    }
    if (!emailIsValid) {
      handleEmail();
    }
    return false;
  }

  function validateTitle(title) {
    if (validator.isEmpty(title)) {
      if (titleIsValid) {
        handleTitle();
      }
      return true;
    }
    if (!titleIsValid) {
      handleTitle();
    }
    return false;
  }

  function validateMsg(msg) {
    if (validator.isEmpty(msg)) {
      if (msgIsValid) {
        handleMsg();
      }
      return true;
    }
    if (!msgIsValid) {
      handleMsg();
    }
    return false;
  }

  function onChange(target) {
    if (showErrors) {
      switch (target.name) {
        case "name":
          validateName(target.value);
          break;
        case "email":
          validateEmail(target.value);
          break;
        case "title":
          validateTitle(target.value);
          break;
        case "message":
          validateMsg(target.value);
          break;
      }
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    let fail = false;

    if (validateName(e.target.name.value)) {
      fail = true;
    }
    if (validateEmail(e.target.email.value)) {
      fail = true;
    }
    if (validateTitle(e.target.title.value)) {
      fail = true;
    }
    if (validateMsg(e.target.message.value)) {
      fail = true;
    }
    if (fail) {
      showErrors ? null : handleErrors();
    } else {
      showErrors ? handleErrors() : null;
      // send email using emailjs package
      emailjs
        .sendForm(
          "service_7z9f6av",
          "template_ndoyuya",
          form.current,
          "YusSOw_TDB2VIYARa"
        )
        .then(
          (result) => {
            e.target.reset();
            grecaptcha.reset();
            toast({
              variant: "success",
              title: "Message Sent Successfully",
              description:
                "Thank you for you reaching out, I will try to get back to you as soon as possible!",
            });
          },
          (error) => {
            var response = grecaptcha.getResponse();
            if (response.length == 0) {
              toast({
                variant: "destructive",
                title: "Invalid ReCAPTCHA Response",
                description:
                  "Please make sure you tick off the 'I am not a robot' checkbox before you submit the contact form",
              });
            } else {
              toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description:
                  "There was a problem with your request, please refresh the page and try again.",
              });
            }
          }
        );
    }
  };

  return (
    <>
      <section id="contact" className="p-4">
        <div className="p-8 max-w-sm mx-auto">
          <h2 className="-skew-y-6 text-center text-4xl font-bold bg-white text-black">
            Contact Me
          </h2>
        </div>

        <div className="py-2 m-5 max-w-xl mx-auto bg-slate-800 ring-slate-900/5 rounded-xl overflow-hidden border-slate-800">
          <form ref={form} onSubmit={onSubmit}>
            <fieldset>
              <div className="grid grid-col-2 gap-4 w-full place-content-center p-4">
                <div className="col-span-1 sm:col-span-2 sm:mx-auto">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    name="name"
                    className="w-auto"
                    type="text"
                    placeholder="John Doe"
                    onChange={(e) => onChange(e.target)}
                  />
                </div>
                <div className="col-span-1 sm:col-span-2 sm:mx-auto">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    name="email"
                    className="w-auto"
                    type="email"
                    placeholder="Email"
                    onChange={(e) => onChange(e.target)}
                  />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    name="title"
                    className="w-full"
                    type="text"
                    placeholder="Add a Title"
                    onChange={(e) => onChange(e.target)}
                  />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    name="message"
                    className="w-full h-44 sm:h-60"
                    placeholder="Leave a Message"
                    onChange={(e) => onChange(e.target)}
                  />
                </div>
                {showErrors && (
                  <span className="bg-slate-900 rounded-lg border-white/20 border-2 py-2 px-6 col-span-2 place-self-center">
                    <ul className="text-sm text-slate-300 list-image-cross p-1">
                      {!nameIsValid && (
                        <li className="p-1">
                          Your <span className="font-bold underline">Name</span>{" "}
                          must be 2 or more characters long.
                        </li>
                      )}
                      {!emailIsValid && (
                        <li className="p-1">
                          You must enter a valid{" "}
                          <span className="font-bold underline">
                            Email Address
                          </span>
                          .
                        </li>
                      )}
                      {!titleIsValid && (
                        <li className="p-1">
                          Your{" "}
                          <span className="font-bold underline">Title</span>{" "}
                          cannot be empty.
                        </li>
                      )}
                      {!msgIsValid && (
                        <li className="p-1">
                          Your{" "}
                          <span className="font-bold underline">Message</span>{" "}
                          cannot be empty.
                        </li>
                      )}
                    </ul>
                  </span>
                )}
                <div className="col-span-2 place-self-center">
                  <div
                    className="g-recaptcha"
                    data-sitekey="6Lf6BjIpAAAAALmEEZpuI28moS8Q0zurI-0mxkcz"
                  ></div>
                </div>
                <div className="col-span-2 place-self-center">
                  <Button type="submit" value="Send" variant="secondary">
                    Send
                  </Button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </section>
    </>
  );
};
