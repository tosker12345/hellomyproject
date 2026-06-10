
import { endpoint, internal } from "akanjs/signal";

import * as srv from "../srv";

export class SdkjInternal extends internal(srv.sdkj, () => ({})) {}

export class SdkjEndpoint extends endpoint(srv.sdkj, () => ({})) {}
  