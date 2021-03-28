import React, { Fragment } from 'react';
import Link from 'next/link';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import GlideCarousel from 'common/components/GlideCarousel';
import GlideSlide from 'common/components/GlideCarousel/glideSlide';
import LeftBar from './leftBar';
import BannerWrapper, {
  ContentWrapper,
  TextArea,
  ImageArea,
} from './bannerSection.style';

import { bannerSlides } from '../../common/data';

const BannerSection = () => {
  const glideOptions = {
    type: 'carousel',
    perView: 1,
    gap: 0,
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
          <Link href="#1">
            <a className="learn__more-btn">
              <span className="hyphen" />
              <span className="btn_text">Κάνε εγγραφή τώρα.</span>
            </a>
          </Link>
        </TextArea>
        <ImageArea>
          <GlideCarousel
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
