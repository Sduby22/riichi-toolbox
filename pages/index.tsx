import type { NextPage } from "next";

import { useEffect } from "react";
import { useRouter } from "next/router";

const Page: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/test");
  });
  return <></>;
};

export default Page;
