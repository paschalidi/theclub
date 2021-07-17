import React, { useRef, useState } from "react";
import { iosEmailOutline } from "react-icons-kit/ionicons/iosEmailOutline";
import { Icon } from "react-icons-kit";
import Heading from "../../common/components/Heading";
import Text from "../../common/components/Text";
import Image from "../../common/components/Image";
import GlideCarousel from "../../common/components/GlideCarousel";
import GlideSlide from "../../common/components/GlideCarousel/glideSlide";
import LeftBar from "./leftBar";
import BannerWrapper, {
  ContentWrapper,
  ImageArea,
  TextArea,
} from "./bannerSection.style";
import { ButtonGroup, FormWrapper } from "../partners/Banner/banner.style";

import { bannerSlides } from "../../common/data";
import Input from "../../common/components/Input";
import Button from "../../common/components/Button";

const Glide = ({ slides }) => {
  const glideOptions = {
    type: "carousel",
    autoplay: 2400,
    animationDuration: 700,
    animationTimingFunc: "cubic-bezier(0, 0, 0.58, 1)",
    perView: 1,
    gap: 0,
    hoverpause: false,
  };

  return (
    <GlideCarousel
      controls={false}
      carouselSelector="charitySlide"
      options={glideOptions}
      nextButton={<span className="next_arrow" />}
      prevButton={<span className="prev_arrow" />}
    >
      {slides.map((slide) => (
        <GlideSlide key={slide.id}>
          <Image src={slide.thumbUrl} alt={slide.alt} />
        </GlideSlide>
      ))}
    </GlideCarousel>
  );
};

const BannerSection = () => {
  const inputEl = useRef(null);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //eslint-disable-line

  const handleOnChange = (value) => {
    setEmail(value);
  };

  const handleSubscriptionForm = async (e) => {
    e.preventDefault();

    if (email.match(emailRegex)) {
      const res = await fetch("/api/email", {
        body: JSON.stringify({
          email: inputEl.current.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error: errorResponse } = await res.json();

      if (errorResponse) {
        setError(errorResponse);
        return;
      }

      setEmail("");
      setError("");
      setMessage(" Συγχαρητήρια! 🎉 Θα λάβετε ένα email επιβεβαίωσης σύντομα.");
    } else {
      setError("Το e-mail δεν ειναι έγκυρο. Δοκιμάστε άλλο email.");
    }
  };

  return (
    <BannerWrapper>
      <LeftBar text="SCROLL" offset={81} sectionId="#feature" />
      <ContentWrapper>
        <TextArea>
          <Heading
            as="h1"
            content="Μια συνδρομή για όλες τις αθλητικές σου δραστηριότητες"
          />
          <Heading
            as="h4"
            content="Απόκτησε πρόσβαση σε διαφορετικά προγράμματα, από γυμναστήρια και στούντιο γιόγκα μεχρι κολυμβητήρια και πολεμικές τέχνες. Επέλεξε αυτό που σου ταιριάζει κάθε φορά χωρίς δεσμεύσεις ή περιορισμούς."
          />
          {message !== "" ? (
            <Heading as="h3" content={message} />
          ) : (
            <>
              <Text
                style={{ fontWeight: "bold", textDecorationLine: "underline" }}
                content="Κάνε εγγραφή τώρα και κέρδισε 7 check-ins και δύο εβδομάδες δωρέαν!"
              />
              <FormWrapper onSubmit={handleSubscriptionForm}>
                <Input
                  ref={inputEl}
                  inputType="email"
                  htmlFor="remember"
                  id="remember"
                  placeholder="Πληκτρολογείστε το email σας εδώ"
                  icon={<Icon icon={iosEmailOutline} />}
                  iconPosition="left"
                  required
                  onChange={handleOnChange}
                  aria-label="email"
                />

                <div style={{ margin: "4px 0 8px 0 " }} className="formError">
                  {error.length ? (
                    <div>{error}</div>
                  ) : (
                    <div style={{ visibility: "hidden" }}>empty</div>
                  )}
                </div>
                <ButtonGroup>
                  <Button type="submit" title="ΓΡΑΨΟΥ ΤΩΡΑ" variant="outlined" />
                </ButtonGroup>
              </FormWrapper>
            </>
          )}
        </TextArea>
        <ImageArea>
          <Glide slides={bannerSlides} />
        </ImageArea>
      </ContentWrapper>
    </BannerWrapper>
  );
};

export default BannerSection;
