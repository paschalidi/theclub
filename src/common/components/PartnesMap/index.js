import React, { useState } from "react";
import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react";
import Icon from "react-icons-kit";
import { androidOpen } from "react-icons-kit/ionicons/androidOpen";
import {
  AA,
  BlogCard,
  Column,
  HeadingStyled,
  HR,
  Row,
} from "../../../containers/ClientBlock/Card";
import Image from "../Image";
import Heading from "../Heading";
import Text from "../Text";
import { SectionHeader } from "../../../containers/WorkSection/workSection.style";
import { mapData, partners } from "../../data";
import colors from "../../theme/charity/colors";
import { ComponentWrapper, MapWrapper, StyledImage } from "./Map.style";
import Link from "../Link";

const mapStyle = [
  {
    featureType: "landscape.natural",
    elementType: "geometry.fill",
    stylers: [{ visibility: "on" }, { color: "#e0efef" }],
  },
  {
    featureType: "poi",
    elementType: "all",
    stylers: [{ visibility: "off" }, { hue: "#1900ff" }, { color: "#c0e8e8" }],
  },
  {
    featureType: "poi",
    elementType: "geometry.fill",
    stylers: [{ visibility: "on" }, { hue: "#1900ff" }, { color: "#c0e8e8" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ lightness: 100 }, { visibility: "simplified" }],
  },
  {
    featureType: "road",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [{ visibility: "on" }, { lightness: 700 }],
  },
  { featureType: "water", elementType: "all", stylers: [{ color: "#7dcdcd" }] },
];

export const PartnesMap = GoogleApiWrapper({
  apiKey: "AIzaSyA9pd-V7sXOtfxHjtWkl5_cRawALAWCn4I",
})(({ google }) => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [activeMarker, setActiveMarker] = useState(null);
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);

  const mapLoaded = (mapProps, map) => {
    map.setOptions({
      styles: mapStyle,
    });
  };

  const onMarkerClick = (props, marker) => {
    const {
      image,
      link,
      description,
      shelter,
      gmLink,
      phoneNumber,
      address,
      slug,
    } = partners[props.name];
    setSelectedPlace({
      shelter,
      image,
      link,
      description,
      gmLink,
      phoneNumber,
      address,
      slug,
    });
    setActiveMarker(marker);
    setShowingInfoWindow(true);
  };
  const { title, slogan } = mapData;

  return (
    <ComponentWrapper id="locations">
      <SectionHeader>
        <Heading content={title} />
        <Text content={slogan} />
      </SectionHeader>
      <div
        css={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            flexBasis: "100%",
            minHeight: "65vh",
            maxHeight: "65vh",
            flex: 1,
            marginLeft: 24,
            marginRight: 20,
            overflow: "scroll",
          }}
        >
          {partners &&
            Object.values(partners).map(
              ({
                id,
                image,
                shelter,
                description,
                phoneNumber,
                address,
                slug,
              }) => (
                <BlogCard key={id} href={`/partner/${slug}`}>
                  <AA>
                    <Row>
                      <Column css={{ flex: 1, justifyContent: "center" }}>
                        <StyledImage
                          src={image}
                          alt={`Venue ${shelter} Banner`}
                        />
                      </Column>
                      <Column css={{ flex: 1, marginBottom: 12 }}>
                        <Row>
                          <Column
                            css={{
                              flex: 0.1,
                              justifyContent: "center",
                              alignItems: "flex-end",
                              marginRight: 8,
                            }}
                          >
                            <Icon
                              css={`
                                ${AA}:hover & {
                                  color: ${colors.hoverLink};
                                }
                              `}
                              size={20}
                              icon={androidOpen}
                            />
                          </Column>
                          <Column css={{ flex: 1.9 }}>
                            <HeadingStyled>{shelter}</HeadingStyled>
                          </Column>
                        </Row>

                        <p
                          css={`
                            font-size: 15px;
                            margin-top: 4px;
                            color: ${colors.headingLight};
                            display: -webkit-box;
                            overflow: hidden;
                            -webkit-line-clamp: 10;
                            lineheight: 1.4;
                            -webkit-box-orient: vertical;
                          `}
                        >
                          {description}
                        </p>
                        <div
                          css={{
                            color: colors.headingLight,
                            fontSize: 13,
                            marginBottom: 4,
                          }}
                        >
                          {address}
                        </div>

                        <div css={{ color: colors.headingLight, fontSize: 13 }}>
                          {phoneNumber}
                        </div>
                      </Column>
                    </Row>
                    <HR />
                  </AA>
                </BlogCard>
              )
            )}
        </div>
        <MapWrapper>
          <Map
            google={google}
            zoom={12}
            style={{
              width: "calc(50% - 24px)",
              height: "65vh",
            }}
            initialCenter={{
              lat: 37.98886809387591,
              lng: 23.732712594691073,
            }}
            onReady={(mapProps, map) => mapLoaded(mapProps, map)}
          >
            {/* there is a hack for the styles of the InfoWindow in the charity.style.js */}
            <InfoWindow
              marker={activeMarker}
              onClose={() => setShowingInfoWindow(false)}
              visible={showingInfoWindow}
            >
              <Link href={`/partner/${selectedPlace?.slug}`}>
                <Image
                  css={{ borderRadius: 2, width: "15vw" }}
                  src={selectedPlace?.image}
                  alt={`Venue ${selectedPlace?.shelter} Banner`}
                />
              </Link>
              <div
                style={{
                  padding: 12,
                }}
              >
                <Link href={`/partner/${selectedPlace?.slug}`}>
                  <Row>
                    <Column
                      css={{
                        flex: 0.1,
                        justifyContent: "center",
                        alignItems: "flex-start",
                        marginRight: 8,
                      }}
                    >
                      <Icon
                        css={`
                          margin-right: 8px;
                          &:hover {
                            color: ${colors.hoverLink};
                          }
                        `}
                        size={16}
                        icon={androidOpen}
                      />
                    </Column>
                    <Column css={{ flex: 1.9 }}>
                      <Heading
                        as="h3"
                        mt={0}
                        mb={0}
                        content={selectedPlace?.shelter}
                        style={{
                          width: "calc(15vw - 48px)",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      />
                    </Column>
                  </Row>
                </Link>

                <div
                  style={{
                    marginTop: 4,
                    width: "calc(15vw - 24px)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  <a
                    style={{
                      fontWeight: 400,
                      color: colors.hoverLink,
                    }}
                    href={selectedPlace?.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Επισκέψου το website
                  </a>
                </div>
                <div
                  style={{
                    marginTop: 4,
                    width: "calc(15vw - 24px)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  <a
                    style={{
                      fontWeight: 400,
                      color: colors.hoverLink,
                    }}
                    href={selectedPlace?.gmLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {selectedPlace?.address}
                  </a>
                </div>
                <div
                  style={{
                    marginTop: 4,
                    width: "calc(15vw - 36px)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  <a
                    css={{
                      fontWeight: 400,
                      color: colors.hoverLink,
                    }}
                    href={`tel:${selectedPlace?.phoneNumber}`}
                  >
                    {selectedPlace?.phoneNumber}
                  </a>
                </div>
              </div>
            </InfoWindow>
            {Object.values(partners).map((partner) => (
              <Marker
                icon={{
                  url: "/images/destination.svg",
                  scaledSize: new google.maps.Size(48, 48),
                }}
                title={partner.shelter}
                name={partner.slug}
                key={partner.id}
                position={{ lat: partner.latitude, lng: partner.longitude }}
                onClick={onMarkerClick}
              />
            ))}
          </Map>
        </MapWrapper>
      </div>
    </ComponentWrapper>
  );
});
