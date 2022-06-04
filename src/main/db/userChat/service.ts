/**
 * UserMessageService will be exported and will be used by dev to fetch/update/create data in db
 */
class UserChatService {
  public UserMessage: any;

  constructor(UserMessage: any) {
    this.UserMessage = UserMessage;
  }

  /**
   *
   * @param {object} info
   * @returns created user
   */
  async sendMessage(info: any, opts: any) {
    this.UserMessage.requiredFields(info);
    return this.UserMessage.add(info, opts);
  }

  /**
   *
   * @param {object} info
   * @returns created user
   */
  async bulkAdd(info: any, opts: any) {
    await Promise.all(info.map((e: any) => this.UserMessage.requiredFields(e)));
    return this.UserMessage.bulkAdd(info, opts);
  }

  /**
   *
   * @param {objectId} _id
   * @param {object} info
   * @returns
   */
  async updateUser(playerId: any, info: any, opts: any) {
    return this.UserMessage.updateByCond(playerId, info, opts);
  }

  async getMessage(where: any) {
    try {
      return this.UserMessage.getOne(where);
    } catch (error: any) {
      throw new Error(error);
    }
  }
  async getMessages(where: any) {
    try {
      return this.UserMessage.get(where);
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

export = UserChatService;
