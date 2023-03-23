import type {InjectionToken} from "tsyringe";
import type HttpClientInterface from "@/utils/HttpClient/Interface";

const DiToken = Object.freeze({
  HttpClient: Symbol("HttpClient") as InjectionToken<HttpClientInterface>
});

export default DiToken;
