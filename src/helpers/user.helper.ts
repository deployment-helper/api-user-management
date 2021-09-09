import bcrypt from "bcrypt";
import { Octokit } from "@octokit/rest";

import { LoginProvider } from "../constants";
import { ErrorBadReq } from "../errors";

import { IUser } from "../models/model.interfaces";
import UserModel from "../models/user.model";
import { Github } from "./github.helper";

export class UserHelper {
  static async getUser(
    code: string,
    providerName: LoginProvider
  ): Promise<any> {
    if (providerName === LoginProvider.GITHUB) {
      const githubResp: any = await Github.getAccessToken(code);
      if (githubResp.access_token) {
        const octokit = new Octokit({
          auth: githubResp.access_token,
        });

        const { data } = await octokit.request("/user");

        return data;
      } else {
        throw new ErrorBadReq("Invalid Github code");
      }
    } else {
      throw new ErrorBadReq("Invalid Login provider");
    }
  }
}
