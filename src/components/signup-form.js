import React, { useEffect, useRef, useState } from "react";
import BrowserOnly from '@docusaurus/BrowserOnly';
import HCaptcha from "@hcaptcha/react-hcaptcha";

export default function SignupForm() {
    const [token, setToken] = useState(null);
    const [email, setEmail] = useState("");
    const captchaRef = useRef(null);

    const onSubmit = (event) => {
        event.preventDefault();
        captchaRef.current.execute();
    };

    const onExpire = () => {
        console.log("hCaptcha Token Expired");
    };

    const onError = (err) => {
        console.log(`hCaptcha Error: ${err}`);
    };

    useEffect(async () => {
        if (token) {
            var data = {
                email: email,
                captchaToken: token
            };

            // send message
            const response = await fetch("/api/email-signup", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
              });
            const results = await response.json();
            console.log(`Results:`, results);
        }
    }, [token, email]);

    return (
        <div id="signup" className="signup-form">
            <BrowserOnly fallback={<div>Loading...</div>}>
                {() => {
                    const signupConfirmed = window.location.href.endsWith('?signup-confirmed')
                    return !token && !signupConfirmed && <form onSubmit={onSubmit}>
                        <h3>Subscribe to Pglet newsletter for project updates and tutorials!</h3>
                        <input
                            type="email"
                            value={email}
                            placeholder="Your email address"
                            onChange={(evt) => setEmail(evt.target.value)}
                        />
                        <input type="submit" value="Submit" />
                        <HCaptcha
                            sitekey="450cf388-4fd0-4485-a786-dd0129a596ed"
                            size="invisible"
                            onVerify={setToken}
                            onError={onError}
                            onExpire={onExpire}
                            ref={captchaRef}
                        />
                    </form>
                    {token && !signupConfirmed && <div>Thank you! You will receive the confirmation email shortly.</div>}
                    {signupConfirmed && <div><span style={{fontSize:'25px', marginRight:'10px'}}>🎉</span>Congratulations! You have successfully subscribed to Pglet newsletter.</div>}}
                }
            </BrowserOnly>
        </div>
    );
}
