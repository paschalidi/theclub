import React, { useState } from "react";
import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react";
import { BlogCard, Column, HR, Row, } from "../../../containers/ClientBlock/Card";
import Image from "../Image";
import Heading from "../Heading";
import Text from "../Text";
import { SectionHeader } from "../../../containers/WorkSection/workSection.style";
import { mapData } from "../../data";
import colors from "../../theme/charity/colors";
import { ComponentWrapper, MapWrapper, StyledImage } from "./Map.style";

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

  const markers = {
    0: {
      id: 0,
      latitude: 37.934201572147366,
      longitude: 23.7092749728358,
      shelter: "Cuerpo Suerte Fitness Lab",
      image: "/images/partner-cuerpo-suerte.jpeg",
      link: "https://cuerposuerte.gr/",
      gmLink: "https://goo.gl/maps/Wdz8TGrv7mgXy8zDA",
      address: "Αρκαδιουπόλεως 30 & Παμφυλίας, Παλαιό Φάληρο",
      phoneNumber: "+302121069691",
      description:
        "Το γυμναστήριο Cuerpo Suerte Fitness Lab είναι ένας σύγχρονος και άρτια εξοπλισμένος χώρος που επιτρέπει όχι μονο την ασφαλή εκγύμναση των ασκούμενων, αλλα και την αποκατάσταση τους απο οποιαδήποτε χρόνια πάθηση και μυοσκελετικό τραυματισμό. Στόχος του είναι οι ασκούμενοι ανεξαρτήτως φύλου, ηλικίας και φυσικής κατάστασης να είναι πάντα ικανοποιημένοι απο την άσκηση, τα οφέλη της και τα αποτελέσματα της καθώς και απο την φιλική και ευχάριστη ατμόσφαιρα του γυμναστηρίου.\n",
    },
  };

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
    } = markers[props.name];
    setSelectedPlace({
      shelter,
      image,
      link,
      description,
      gmLink,
      phoneNumber,
      address,
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
            flex: 1,
            marginLeft: 24,
            marginRight: 20,
            overflow: "scroll",
          }}
        >
          {markers &&
            Object.values(markers).map(
              (
                {
                  id,
                  image,
                  shelter,
                  description,
                  phoneNumber,
                  link,
                  address,
                  gmLink,
                },
                index,
                array
              ) => (
                <BlogCard key={id}>
                  <Row>
                    <Column css={{ flex: 0.7, justifyContent: "center" }}>
                      <StyledImage
                        src={image}
                        alt={`Venue ${shelter} Banner`}
                      />
                    </Column>
                    <Column css={{ flex: 1.3 }}>
                      <Row>
                        <Column css={{ flex: 1.5 }}>
                          <Heading as="h2" mb={12} mt={0} content={shelter} />
                        </Column>
                        <Column
                          css={{
                            flex: 0.5,
                            justifyContent: "flex-end",
                            alignItems: "flex-end",
                            marginRight: 16,
                            marginBottom: 2,
                          }}
                        >
                          <a
                            css={{ marginBottom: 12, color: colors.twitter }}
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            website
                          </a>
                        </Column>
                      </Row>
                      <p
                        css={{
                          fontSize: 14,
                          marginTop: 4,
                          color: colors.secondary,
                        }}
                      >
                        {description}
                      </p>
                      <a
                        css={{ color: colors.twitter }}
                        href={gmLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {address}
                      </a>

                      <a
                        css={{ paddingTop: 8, color: colors.twitter }}
                        href={`tel:${phoneNumber}`}
                      >
                        {phoneNumber}
                      </a>
                    </Column>
                  </Row>
                  {index + 1 !== array.length && <HR />}
                </BlogCard>
              )
            )}
        </div>
        <MapWrapper>
          <Map
            google={google}
            zoom={13}
            style={{
              width: "calc(50% - 24px)",
              height: "65vh",
            }}
            initialCenter={{
              lat: 37.9729,
              lng: 23.7256,
            }}
            onReady={(mapProps, map) => mapLoaded(mapProps, map)}
          >
            {/* there is a hack for the styles of the InfoWindow in the charity.style.js */}
            <InfoWindow
              marker={activeMarker}
              onClose={() => setShowingInfoWindow(false)}
              visible={showingInfoWindow}
            >
              <Image
                css={{ borderRadius: 2, width: "15vw" }}
                src={selectedPlace?.image}
                alt={`Venue ${selectedPlace?.shelter} Banner`}
              />
              <div
                style={{
                  padding: 16,
                }}
              >
                <Heading
                  as="h3"
                  mt={0}
                  mb={3}
                  content={selectedPlace?.shelter}
                  style={{
                    width: "calc(15vw - 36px)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                />
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
                    style={{
                      fontWeight: 400,
                      color: colors.twitter,
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
                    width: "calc(15vw - 36px)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  <a
                    style={{
                      fontWeight: 400,
                      color: colors.twitter,
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
                      color: colors.twitter,
                    }}
                    href={`tel:${selectedPlace?.phoneNumber}`}
                  >
                    {selectedPlace?.phoneNumber}
                  </a>
                </div>
              </div>
            </InfoWindow>
            {Object.values(markers).map((marker) => (
              <Marker
                icon={{
                  url: "/images/destination.svg",
                  scaledSize: new google.maps.Size(48, 48),
                }}
                title={marker.shelter}
                name={marker.id}
                key={marker.id}
                position={{ lat: marker.latitude, lng: marker.longitude }}
                onClick={onMarkerClick}
              />
            ))}
          </Map>
        </MapWrapper>
      </div>
    </ComponentWrapper>
  );
});
