
import { serviceDictionary } from "akanjs/dictionary";

import type { SdkjEndpoint } from "./sdkj.signal";

export const dictionary = serviceDictionary(["en", "ko"])
  .endpoint<SdkjEndpoint>((fn) => ({}))
  .translate({});
