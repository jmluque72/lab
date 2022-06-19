import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kql2myn', '', form.current, 'i-oJm5q2oNQX6W_he')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (


<body style="align-items: center;">
  <div style="text-align: center;">
    <img src="https://publiceventsenjoy.s3.amazonaws.com/registro1-01.png"
        style="height: auto;width:500px" />
    </div>
    <div style="text-align: center;">
      <div style="padding-top: 30px;  text-align: center;">
        <p style='padding-top: 5px;color:#101b3f;font-size:20px;margin:0;text-decoration:underline #101b3f;font-family:Montserrat-SemiBold'>Usuario:</p>
        <p style='padding-top: 5px;font-size:24px;font-weight: bold; margin:0;margin-left:10px;color:#101b3f !important;font-family:Montserrat-SemiBold;text-decoration:none;'>{{email}}</p>
      </div>

    </div>
    <div style="text-align: center;">
      <p style='padding-top: 10px;color:#101b3f;font-size:20px; margin:0;text-decoration:underline #101b3f;font-family:Montserrat-SemiBold'>Contraseña:</p>
      <p style='padding-top: 5px;font-size:24px;font-weight: bold; margin:0;margin-left:10px;color:#101b3f;font-family:Montserrat-SemiBold'>zoovet</p>
    </div>
    <div style="padding-top: 30px;  text-align: center;">
      <a href='https://www.diadelveterinariozoovet.com.ar/'>
        <img src="https://publiceventsenjoy.s3.amazonaws.com/buttonLogin.svg"
        style="height: auto;width: 200px;" />
      </a>
    </div>
    <div style="padding-top: 30px;  text-align: center;">
      <img src="https://publiceventsenjoy.s3.amazonaws.com/registro2-01.png"
          style="height: auto;width:500px" />
      </div>
</body>

  );
};