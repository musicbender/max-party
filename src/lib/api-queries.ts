import { useMutation, useQuery, UseQueryOptions } from 'react-query';
import { serverHostname } from './config';
import { Invite } from './types';

// get invite
const getInviteFetcher = (inviteId: string) => async (): Promise<Invite> => {
  const res = await fetch(`${serverHostname}/api/invite/${inviteId}`);
  const json = await res.json();

  if (json?.errors) {
    const { message } = json.errors[0];
    throw new Error(message);
  }

  if (!json?.fields) {
    throw new Error('Invite not found');
  }

  return json.fields;
};

export const useGetInviteQuery = <TData = Invite, TError = unknown>(
  inviteId: string,
  options?: UseQueryOptions<Promise<Invite>, TError, TData>,
) =>
  useQuery<Promise<Invite>, TError, TData>(
    ['getCaseStudy', inviteId],
    getInviteFetcher(inviteId),
    options,
  );

useGetInviteQuery.getKey = (inviteId: string) => ['getInvite', [inviteId]];

useGetInviteQuery.fetcher = getInviteFetcher;
