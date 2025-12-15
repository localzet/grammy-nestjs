import { BotConfig, Context, Middleware, PollingOptions } from "grammy";

export interface GrammyModuleOptions<C extends Context = Context> {
  token: string;
  botName?: string;
  options?: BotConfig<C>;
  pollingOptions?: PollingOptions | false;
  useWebhook?: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  include?: Function[];
  middlewares?: ReadonlyArray<Middleware<C>>;
  disableUpdates?: boolean;
}
