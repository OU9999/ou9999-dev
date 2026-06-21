import { NotFoundContent } from "@/components/common/not-found-content";
import { defaultLocale } from "@/i18n/config";

const NotFound = () => {
  return <NotFoundContent locale={defaultLocale} />;
};

export default NotFound;
