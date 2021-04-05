import React from "react";
import Link from "next/link";
import Text from "../../../common/components/Text";
import CopyrightWrapper from "./copyright.style";

import { socialProfile } from "../../../common/data/partners";

const Copyright = () => (
  <CopyrightWrapper className="copyright_section">
    <ul>
      {socialProfile.map((profile) => (
        <li key={`profile_key_${profile.id}`}>
          <Link href="#1">
            <a>
              <i className={profile.icon} />
            </a>
          </Link>
        </li>
      ))}
    </ul>
    <Text content="Copyrights 2021 Urbanfit" />
  </CopyrightWrapper>
);

export default Copyright;
