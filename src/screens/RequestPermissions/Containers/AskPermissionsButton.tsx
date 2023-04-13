import React from 'react';
import { useDispatch } from 'react-redux';

import Button from '~/components/Button';
import useNavigation from '~/hooks/useNavigation';
import { askUserForNotificationPermissions } from '~/redux/reducers/notification';
import { AppDispatch } from '~/redux/store';

export default function AskPermissionsButton() {
  const { handleNavigate } = useNavigation();
  const dispatch = useDispatch<AppDispatch>();

  const handleAcceptPermissions = async () => {
    await dispatch(askUserForNotificationPermissions());
    return handleNavigate('Login');
  };

  return <Button title="ACEITAR" onPress={handleAcceptPermissions} />;
}
