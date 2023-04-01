import {registry} from "tsyringe";
import DiToken from "@/di/DiToken";
import HttpClientFetch from "@/utils/HttpClient/Fetch";

@registry([
  { token: DiToken.HttpClient, useClass: HttpClientFetch }
])
class DiRegistry {}
