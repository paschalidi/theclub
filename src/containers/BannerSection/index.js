import React, { Fragment, useState, useRef } from 'react';
import { iosEmailOutline } from 'react-icons-kit/ionicons/iosEmailOutline';

import Heading from '../../common/components/Heading';
import Image from '../../common/components/Image';
import GlideCarousel from '../../common/components/GlideCarousel';
import GlideSlide from 'common/components/GlideCarousel/glideSlide';
import LeftBar from './leftBar';
import BannerWrapper, {
  ContentWrapper,
  TextArea,
  ImageArea,
} from './bannerSection.style';
import {
  FormWrapper,
  ButtonGroup,
} from '../partners/Banner/banner.style';

import { bannerSlides } from '../../common/data';
import { Icon } from "react-icons-kit";
import Input from "../../common/components/Input";
import Button from "../../common/components/Button";


const BannerSection = () => {
  const glideOptions = {
    type: 'carousel',
    perView: 1,
    gap: 0,
    hoverpause: false,
    autoplay: 2500,
  };
  const inputEl = useRef(null);
  const [message, setMessage] = useState('');
  const [state, setState] = useState({ email: '', valid: '', error: false });
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //eslint-disable-line

  const handleOnChange = (value) => {
    if (value.match(emailRegex)) {
      if (value.length > 0) {
        setState({ ...state, email: value, valid: 'valid' });
      }
    } else {
      if (value.length > 0) {
        setState({ ...state, email: value, valid: 'invalid' });
      } else {
        setState({ ...state, email: value, valid: '' });
      }
    }
  };


  const handleSubscriptionForm =  async(e) => {
    e.preventDefault();

    if (state.email.match(emailRegex)) {
      const res = await fetch('/api/email', {
        body: JSON.stringify({
          email: inputEl.current.value
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })

      const { error } = await res.json();

      if (error) {
        setState({ ...state, error: error });
        return;
      }

      setState({ email: '', valid: '', error: '' });
      setMessage('Συγχαρητήρια! 🎉 Θα λάβετε ενα mail με την έκπτωση σύντομα!');
    } else{
      setState({ ...state, error: 'Το e-mail δεν ειναι έγκυρο. Δοκιμάστε άλλο email.' });
    }
  };

  return (
    <BannerWrapper>
      <LeftBar text="SCROLL DOWN" offset={81} sectionId="#feature" />
      <ContentWrapper>
        <TextArea>
          <Heading
            content="Με μία συνδρομή μονο"
          />
          <Heading
            as="h4"
            content="Με μία συνδρομή, έχεις πρόσβαση στα καλύτερα γυμναστήρια, πισίνες, αθλητικά κέντρα, εγκαταστάσεις χορού και άλλα πακέτα δραστηριοτήτων ευεξίας, προσαρμοσμένα στις δικές σου προτιμήσεις ενώ παράλληλα γλυτώνεις χρήματα και χρόνο."
          />
          {
            message !== ''
              ?
              <Heading
                as="h3"
                content={message}
              />
              :
              <FormWrapper onSubmit={handleSubscriptionForm}>
                <Input
                  ref={inputEl}
                  className={state.valid}
                  type="email"
                  placeholder="Πληκτρολογείστε το email σας εδώ"
                  icon={<Icon icon={iosEmailOutline} />}
                  iconPosition="left"
                  required={true}
                  onChange={handleOnChange}
                  aria-label="email"
                />

                <div style={{margin: "8px 0"}}>
                  {state.error.length ? <div className='formError'>{state.error}</div> : <div style={{visibility: 'hidden'}}>empty</div>}
                </div>
                <ButtonGroup>
                  <Button
                    type="submit"
                    colors="primaryWithBg"
                    title="ΣΤΕΙΛΤΕ ΜΑΣ ΜΥΝΗΜΑ"
                  />
                </ButtonGroup>
              </FormWrapper>
          }

        </TextArea>
        <ImageArea>
          <GlideCarousel
            controls={false}
            carouselSelector="charitySlide"
            options={glideOptions}
            nextButton={<span className="next_arrow" />}
            prevButton={<span className="prev_arrow" />}
          >
            <Fragment>
              {bannerSlides.map((slide) => (
                <GlideSlide key={slide.id}>
                  <Image src={slide.thumb_url} alt="Charity Landing" />
                </GlideSlide>
              ))}
            </Fragment>
          </GlideCarousel>
        </ImageArea>
      </ContentWrapper>
    </BannerWrapper>
  );
};

export default BannerSection;
