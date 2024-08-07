import * as React from 'react';
import { Html, Button, Head,Img } from "@react-email/components";

export function Email() {

  return (
    <Html lang="en">
      <Head>
        <title>We are Exitited to Wellcoming You</title>
     </Head>
     <Img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Cat" width="300" height="300" />
      <Button>Click me</Button>
    </Html>
  );
}

export default Email;