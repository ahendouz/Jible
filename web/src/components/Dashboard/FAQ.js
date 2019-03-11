import React from "react";
import styled from "styled-components";

const FAQ = () => {
  const styles = {
    width: " 100%",
    minHeight: " 30rem"
  };
  return (
    <FAQStyle style={styles}>
      <p style={{ paddingBottom: "1.4rem" }}>
        Man bun pabst umami blog fingerstache meditation thundercats organic
        single-origin coffee offal kogi. Farm-to-table cred occupy ethical craft
        beer ugh. Cornhole plaid wayfarers tattooed, heirloom hoodie hexagon
        ramps. Hammock meggings sriracha snackwave ethical. Gochujang biodiesel
        VHS, street art offal neutra gastropub flexitarian. Wolf fanny pack
        squid 8-bit locavore hammock.
      </p>

      <p style={{ paddingBottom: "1.4rem" }}>
        Quinoa keffiyeh tattooed whatever. Keytar woke polaroid, everyday carry
        fam slow-carb unicorn taxidermy readymade hammock. Tumeric cardigan
        actually vegan quinoa blue bottle neutra. YOLO vaporware squid quinoa,
        cred neutra chillwave godard tacos humblebrag master cleanse kitsch
        succulents salvia hell of. Crucifix kinfolk actually disrupt, cardigan
        fanny pack cornhole semiotics venmo chia green juice coloring book kogi
        pitchfork. Austin gastropub bicycle rights church-key, keffiyeh vice
        enamel pin tilde ugh cred helvetica. Meh pop-up migas, tilde four dollar
        toast etsy plaid quinoa bushwick cronut poutine.
      </p>

      <p style={{ paddingBottom: "1.4rem" }}>
        Poke fingerstache unicorn enamel pin taxidermy, put a bird on it yr
        ennui. La croix flannel pop-up sriracha typewriter beard. Man braid
        gastropub iPhone drinking vinegar. Jianbing enamel pin cray, shaman
        vaporware kogi letterpress chambray hella put a bird on it lomo jean
        shorts roof party. Seitan aesthetic enamel pin, DIY before they sold out
        chia echo park keytar copper mug ramps sustainable. Jianbing poke
        mumblecore etsy drinking vinegar deep v gastropub, chambray roof party
        pickled pop-up.
      </p>

      <p style={{ paddingBottom: "1.4rem" }}>
        Small batch cloud bread tacos schlitz marfa. YOLO vexillologist etsy
        enamel pin actually photo booth farm-to-table flexitarian butcher tumblr
        taiyaki activated charcoal brooklyn chartreuse. Adaptogen vaporware
        gentrify, iPhone air plant green juice bespoke hexagon. Post-ironic
        cold-pressed actually mixtape kitsch artisan intelligentsia photo booth
        tousled cornhole bicycle rights shaman woke vexillologist. You probably
        haven't heard of them kickstarter bushwick post-ironic tilde enamel pin,
        intelligentsia swag mustache yr venmo photo booth.
      </p>
    </FAQStyle>
  );
};

export default FAQ;

const FAQStyle = styled.div`
  width: 100%;
  min-height: 30rem;
  > p {
    padding-bottom: 1.4rem;
    padding-bottom: 1.4rem;
    font-family: Light;
    font-size: 1.4rem;
  }
`;
