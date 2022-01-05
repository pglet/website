import React, { useEffect, useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export default function SignupForm() {
    const [token, setToken] = useState(null);
    const [email, setEmail] = useState("");
    const captchaRef = useRef(null);

    const onSubmit = (event) => {
        event.preventDefault();
        // this reaches out to the hcaptcha library and runs the
        // execute function on it. you can use other functions as well
        // documented in the api:
        // https://docs.hcaptcha.com/configuration#jsapi
        captchaRef.current.execute();
    };

    const onExpire = () => {
        console.log("hCaptcha Token Expired");
    };

    const onError = (err) => {
        console.log(`hCaptcha Error: ${err}`);
    };

    useEffect(() => {
        if (token) {
            // Token is set, can submit here
            console.log(`User Email: ${email}`);
            console.log(`hCaptcha Token: ${token}`);
        }
    }, [token, email]);

    return (
        <>
        {!token && <form onSubmit={onSubmit}>
            <input
                type="email"
                value={email}
                placeholder="Email adddress"
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
        </form>}
        {token && <div>Thank you! You should receive subscribe confirmation shortly.</div>}
        </>
    );
}
