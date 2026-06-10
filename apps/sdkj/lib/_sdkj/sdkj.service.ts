
import { serve } from "akanjs/service";

export class SdkjService extends serve("sdkj" as const, { serverMode: "batch" }, () => ({})) {}
