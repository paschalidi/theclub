import React from "react";
import ErrorSec from "../containers/Error";
import Page from "../common/components/Page";

export default function Error({ statusCode }) {
  return (
    <Page>
      <div>
        {statusCode ? (
          `An error ${statusCode} occurred on server`
        ) : (
          <ErrorSec />
        )}
      </div>
    </Page>
  );
}

Error.getInitialProps = ({ res, err }) => {
  // eslint-disable-next-line no-nested-ternary
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
