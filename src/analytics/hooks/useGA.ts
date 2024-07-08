import { useEffect } from "react";
import ReactGA from "react-ga4";

interface useGAPage {
  page: string;
  title: string;
}

const useGAPage = ({ page, title }: useGAPage) => {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page,
      title,
    });
  }, []);
};

export { useGAPage };
