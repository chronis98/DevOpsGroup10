import type HttpClientInterface from "@/utils/HttpClient/Interface";
import type {HttpMethod} from "@/utils/HttpMethod";

export default class Fetch implements HttpClientInterface {
  send<Result>(url: string, method: HttpMethod, jsonBody: unknown): Promise<Result> {
    const options: RequestInit = {
      method
    };

    if (jsonBody !== undefined) {
      options.body = JSON.stringify(jsonBody)
    }

    return fetch(url, options).then(response => response.json() as Promise<Result>);
  }
}
