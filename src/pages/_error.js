import React from "react";
import Head from "next/head";
import ErrorSec from "../containers/Error";
import { ResetCSS } from "../common/assets/css/style";

export default function Error({ statusCode }) {
  return (
    <>
      <Head>
        <title>404: Not found</title>
      </Head>
      <ResetCSS />
      <div>
        {statusCode ? (
          `An error ${statusCode} occurred on server`
        ) : (
          <ErrorSec />
        )}
      </div>
    </>
  );
}

Error.getInitialProps = ({ res, err }) => {
  // eslint-disable-next-line no-nested-ternary
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
