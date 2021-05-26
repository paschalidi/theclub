import React, { useState, useEffect } from "react";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import { useRouter } from "next/router";
import Heading from "../../../common/components/Heading";
import Image from "../../../common/components/Image";
import Button from "../../../common/components/Button";
import GlideCarousel from "../../../common/components/GlideCarousel";
import GlideSlide from "../../../common/components/GlideCarousel/glideSlide";
import { CircleLoader } from "../interior.style";

import BannerWrapper, {
  Container,
  ContentArea,
  ButtonGroup,
  CarouselArea,
} from "./banner.style";

import { bannerData } from "../../../common/data/partners";
import { Item, List } from "../../BranchSectionLeft/branchSection.style";

const Banner = () => {
  const { lists, title, carousel } = bannerData;
  const glideOptions = {
    type: "carousel",
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

  const router = useRouter();
  return (
    <BannerWrapper>
      <Container>
        <ContentArea>
          <Fade bottom delay={10}>
            <Heading as="h1" content={title} />
            <List>
              {lists.map((item) => (
                <Item type="light" key={`list_key${item.id}`}>
                  {item.text}
                </Item>
              ))}
            </List>
            <ButtonGroup>
              <Button
                onClick={() => {
                  router.push("/partners-contact-form");
                }}
                type="submit"
                variant="outlined"
                title="ΣΥΜΠΛΗΡΩΣΤΕ ΤΗΝ ONLINE ΦΟΡΜΑ"
              />
            </ButtonGroup>
          </Fade>
        </ContentArea>

        <CarouselArea>
          {loading ? (
            <GlideCarousel
              controls
              bullets
              carouselSelector="interior_carousel"
              options={glideOptions}
              nextButton={<span className="next_arrow" />}
              prevButton={<span className="prev_arrow" />}
            >
              <>
                {carousel.map((item) => (
                  <GlideSlide key={`carousel_key${item.id}`}>
                    {item.link ? (
                      <Link href={item.link}>
                        <a className="item_wrapper">
                          <Heading as="h4" content={item.title} />
                          <Image src={item.thumbUrl} alt={item.title} />
                        </a>
                      </Link>
                    ) : (
                      <span className="item_wrapper">
                        <Heading as="h4" content={item.title} />
                        <Image src={item.thumbUrl} alt={item.title} />
                      </span>
                    )}
                  </GlideSlide>
                ))}
              </>
            </GlideCarousel>
          ) : (
            <CircleLoader>
              <div className="circle" />
              <div className="circle" />
            </CircleLoader>
          )}
        </CarouselArea>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
