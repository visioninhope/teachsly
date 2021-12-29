import { Storage } from "@aws-amplify/storage";
import { graphqlOperation } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";
import { CDN_DEV, CDN_PROD } from "../../constants/Storage";
import { LogLevel, LogTypes } from "../../enums/LogTypes";
import { createMedia } from "../../graphql/mutations";
import { Media as PlatformMedia } from "../../interfaces/Media";
import { Media } from "../../models";
import { Environment, getEnvironment } from "../../utils/EnvironmentUtils";
import Logger from "../../utils/Logger";
import GraphQLService, { GraphQLResultType } from "../GraphQLService";

class StorageService {
  private getExtensionType = (file: File) =>
    file.name.slice(((file.name.lastIndexOf(".") - 1) >>> 0) + 2);

  public uploadToS3 = async (file: File | undefined) => {
    try {
      if (!file) {
        return;
      }

      const fileExtension = this.getExtensionType(file);
      const fileName = `${uuidv4()}.${fileExtension}`;
      return await Storage.put(fileName, file, {
        // acl: "public-read", // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#upload-property
        metadata: { key: "Test" }, // (map<String>) A map of metadata to store with the object in S3.
        contentType: file.type,
      });
    } catch (error) {
      Logger.log(
        LogLevel.ERROR,
        LogTypes.StorageService,
        "Error when uploading media to S3",
        error
      );
    }
  };

  public persistMedia = async (media: PlatformMedia, file?: File) => {
    const fileUploaded = await this.uploadToS3(file);
    const { title, description, type, groups } = media;

    try {
      const link = fileUploaded ? this.getCDNLink(fileUploaded.key) : "";
      const media = new Media({
        title,
        description,
        link,
        type,
        groups,
      });

      const response = await GraphQLService.graphQL(
        graphqlOperation(createMedia, { input: media })
      );

      if (response) {
        const results = response as GraphQLResultType<Media>;
        return results?.data?.createMedia || null;
      }
    } catch (error) {
      Logger.log(
        LogLevel.ERROR,
        LogTypes.StorageService,
        "Error when uploading media to the database",
        error
      );
    }
  };

  private getCDNLink = (key: string) => {
    const cdnUrl =
      getEnvironment() === Environment.DEVELOPMENT ? CDN_DEV : CDN_PROD;

    return `${cdnUrl}${key}`;
  };
}

export default new StorageService();
