export enum Attending {
  YES = 'yes',
  NO = 'no',
  UNKNOWN = 'unknown',
}

export type Invite = {
  inviteId?: string;
  name?: string;
  attending: Attending;
  adultsCount?: number;
  kidsCount?: number;
};
