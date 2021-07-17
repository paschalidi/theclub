import React from "react";
import Icon from "react-icons-kit";
import { SocialProfileItem, SocialProfileWrapper } from "./socialProfile.style";

const SocialProfile = ({ items = [], className, iconSize = 25 }) => {
  const addAllClasses = ["social_profiles"];

  if (className) {
    addAllClasses.push(className);
  }

  return (
    <SocialProfileWrapper className={addAllClasses.join(" ")}>
      {items.map((item, index) => (
        <SocialProfileItem
          key={`social-item-${index}`}
          className="social_profile_item"
        >
          <a
            aria-label={`social icon ${item.name}`}
            href={item.url}
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon={item.icon} size={iconSize} />
          </a>
        </SocialProfileItem>
      ))}
    </SocialProfileWrapper>
  );
};

export default SocialProfile;
