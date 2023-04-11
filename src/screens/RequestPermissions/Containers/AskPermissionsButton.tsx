import React from 'react';
import { Platform, ActionSheetIOS, ToastAndroid, Linking } from 'react-native';
import { useDispatch } from 'react-redux';

import Button from '~/components/Button';
import useNavigation from '~/hooks/useNavigation';
import { askUserForNotificationPermissions } from '~/redux/reducers/notification';
import { AppDispatch } from '~/redux/store';

export default function AskPermissionsButton() {
  const { handleNavigate } = useNavigation();
  const dispatch = useDispatch<AppDispatch>();

  const handleAcceptPermissions = async () => {
    const granted = await dispatch(
      askUserForNotificationPermissions()
    ).unwrap();

    if (!granted) return notifyAboutPermissions();

    return handleNavigate('Login');
  };

  const notifyAboutPermissions = () => {
    if (Platform.OS === 'ios') {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          title: 'É necessário aceitar as permissões para continuar',
          options: ['Entendi', 'Voltar'],
        },
        (index) => {
          if (index === 0) return Linking.openSettings();
        }
      );
    }

    if (Platform.OS === 'android') {
      ToastAndroid.show(
        'É necessário aceitar as permissões para continuar',
        ToastAndroid.LONG
      );
    }
  };

  return <Button title="ACEITAR" onPress={handleAcceptPermissions} />;
}
