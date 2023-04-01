import type {HttpMethod} from "@/utils/HttpMethod";

export default interface Interface {
  send(url: string, method: HttpMethod, body?: unknown): Promise<unknown>;
}
