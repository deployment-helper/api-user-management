import https from "https";
import { TextEncoder } from "util";
import { parseQueryString } from "../util";

import { Config } from "config";

export class Github {
  static getAccessToken(code: String): Promise<String> {
    const data = {
      client_id: Config.GITHUB_CLIENT_ID,
      client_secret: Config.GITHUB_CLIENT_SECRET,
      code: code,
    };
    const encodedData = new TextEncoder().encode(JSON.stringify(data));
    const options = {
      hostname: "github.com",
      port: 443,
      path: "/login/oauth/access_token",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": encodedData.length,
      },
    };

    return new Promise((resolve: Function, reject: Function) => {
      const req = https.request(options, (res) => {
        const respData: string[] = [];

        res.on("data", (d) => {
          respData.push(d);
        });

        res.on("end", () => {
          resolve(parseQueryString(respData.join()));
        });
      });

      req.on("error", (error) => {
        reject(error);
      });

      req.write(encodedData);
      req.end();
    });
  }
}
