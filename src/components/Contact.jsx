import React, { useRef } from "react";
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
    const [failResults, setParagraphValue] = useState("");
    const [showErrors, setErrors] = useState(false);

    const handleErrors = () => {
        setErrors(!showErrors);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        let fail = false;
        let failResponse = [];

        // Form Values Used for Data Validation
        const name = e.target.name.value;
        const email = e.target.email.value;
        const title = e.target.title.value;
        const msg = e.target.message.value;

        if (!validator.isLength(name, 2)) {
            failResponse.push(
                <li key={crypto.randomUUID()}>
                    {"Your Name must be 2 or more characters long."}
                </li>
            );
            fail = true;
        }
        if (!validator.isEmail(email)) {
            failResponse.push(
                <li key={crypto.randomUUID()}>
                    {"You must enter a valid Email Address."}
                </li>
            );
            fail = true;
        }
        if (validator.isEmpty(title)) {
            failResponse.push(
                <li key={crypto.randomUUID()}>
                    {"Your Title cannot be empty."}
                </li>
            );
            fail = true;
        }
        if (validator.isEmpty(msg)) {
            failResponse.push(
                <li key={crypto.randomUUID()}>
                    {"Your Message cannot be empty."}
                </li>
            );
            fail = true;
        }
        if (fail) {
            setParagraphValue(failResponse);
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
                        toast({
                            variant: "success",
                            title: "Message Sent Successfully",
                            description:
                                "Thank you for you reaching out, I will try to get back to you as soon as possible!",
                        });
                    },
                    (error) => {
                        toast({
                            variant: "destructive",
                            title: "Uh oh! Something went wrong.",
                            description:
                                "There was a problem with your request, please refresh the page and try again.",
                        });
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

                <div className="m-5 max-w-4xl mx-auto bg-slate-800 ring-slate-900/5 rounded-lg overflow-hidden border-slate-800">
                    <form ref={form} onSubmit={onSubmit}>
                        <fieldset>
                            <div className="grid grid-col-2 gap-4 w-full place-content-center p-4">
                                <div className="col-span-1 sm:col-span-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        name="name"
                                        className="w-auto"
                                        type="text"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="col-span-1 sm:col-span-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        name="email"
                                        className="w-auto"
                                        type="email"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="col-span-2">
                                    <Label htmlFor="title">Title</Label>
                                    <Input
                                        name="title"
                                        className="w-full"
                                        type="text"
                                        placeholder="Add a Title"
                                    />
                                </div>
                                <div className="col-span-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea
                                        name="message"
                                        className="w-full h-44 sm:h-60"
                                        placeholder="Leave a Message"
                                    />
                                </div>
                                {showErrors && (
                                    <span className="bg-slate-900 rounded-lg border-white/20 border-2 p-6 col-span-2 place-self-center">
                                        <ul className="text-sm text-red-600 list-disc">
                                            {failResults}
                                        </ul>
                                    </span>
                                )}
                                <div className="col-span-2 place-self-center">
                                    <Button
                                        type="submit"
                                        value="Send"
                                        variant="secondary"
                                    >
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
