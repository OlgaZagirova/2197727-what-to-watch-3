import { NameSpace } from './const';
import { State } from './state';
import { AuthorizationStatus } from './const';

export const getAuthorizationStatus = (state: Pick<State, NameSpace.User>): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getAvatarUrl = (state: Pick<State, NameSpace.User>): string => state[NameSpace.User].avatarUrl;
