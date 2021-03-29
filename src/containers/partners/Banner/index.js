import React, { Fragment, useState, useEffect } from 'react';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import { Icon } from 'react-icons-kit';
import { iosEmailOutline } from 'react-icons-kit/ionicons/iosEmailOutline';
import Heading from '../../../common/components/Heading';
import Text from '../../../common/components/Text';
import Image from '../../../common/components/Image';
import Button from '../../../common/components/Button';
import Input from '../../../common/components/Input';
import GlideCarousel from '../../../common/components/GlideCarousel';
import GlideSlide from '../../../common/components/GlideCarousel/glideSlide';
import { CircleLoader } from '../interior.style';
import BannerWrapper, {
  Container,
  ContentArea,
  FormWrapper,
  ButtonGroup,
  CarouselArea,
} from './banner.style';

import { bannerData } from '../../../common/data/partners';
import { Item, List } from "../../BranchSectionLeft/branchSection.style";

const Banner = () => {
  const { lists, title, text, carousel } = bannerData;
  const glideOptions = {
    type: 'carousel',
    autoplay: 2500,
    perView: 3,
    gap: 20,
    hoverpause: false,
    breakpoints: {
      1200: {
        perView: 2,
      },
      667: {
        perView: 2,
      },
      480: {
        perView: 1,
      },
    },
  };

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, []);

  const [state, setState] = useState({ email: '', valid: '' });
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const handleOnChange = (e) => {
    let value = '';
    if (e.target.value.match(emailRegex)) {
      if (e.target.value.length > 0) {
        value = e.target.value;
        setState({ ...state, email: value, valid: 'valid' });
      }
    } else {
      if (e.target.value.length > 0) {
        setState({ ...state, valid: 'invalid' });
      } else {
        setState({ ...state, valid: '' });
      }
    }
  };

  const handleSubscriptionForm = (e) => {
    e.preventDefault();
    if (state.email.match(emailRegex)) {
      console.log(state.email);
      setState({ email: '', valid: '' });
    }
  };

  return (
    <BannerWrapper>
      <Container>
        <ContentArea>
          <Fade bottom delay={30}>
            <Heading as="h1" content={title} />
            <Text content={text} />
            <List>
              {lists.map((item) => (
                <Item type="light" key={`list_key${item.id}`}>{item.text}</Item>
              ))}
            </List>
            <FormWrapper onSubmit={handleSubscriptionForm}>
              <ButtonGroup>
                <Button
                  onClick={()=>{ window.location = "https://forms.gle/gVe6rsUiMEAbvJW66"}}
                  type="submit"
                  colors="primaryWithBg"
                  title="Εικοινώνησε μαζί μας"
                />
              </ButtonGroup>
            </FormWrapper>
          </Fade>
        </ContentArea>
        {/* End of content section */}

        <CarouselArea>
          {loading ? (
            <GlideCarousel
              controls={true}
              bullets={true}
              carouselSelector="interior_carousel"
              options={glideOptions}
              nextButton={<span className="next_arrow" />}
              prevButton={<span className="prev_arrow" />}
            >
              <Fragment>
                {carousel.map((item) => (
                  <GlideSlide key={`carousel_key${item.id}`}>
                    {
                      item.link ?
                        <Link href={item.link}>
                          <a className="item_wrapper">
                            <Heading as="h4" content={item.title} />
                            <Image src={item.thumb_url} alt={item.title} />
                          </a>
                        </Link> :
                        <span className="item_wrapper">
                          <Heading as="h4" content={item.title} />
                          <Image src={item.thumb_url} alt={item.title} />
                        </span>
                    }
                  </GlideSlide>
                ))}
              </Fragment>
            </GlideCarousel>
          ) : (
            <CircleLoader>
              <div className="circle"></div>
              <div className="circle"></div>
            </CircleLoader>
          )}
        </CarouselArea>
        {/* End of carousel section */}
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
