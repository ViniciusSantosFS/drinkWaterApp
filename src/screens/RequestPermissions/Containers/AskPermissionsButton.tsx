import React from 'react';
import { Platform, ActionSheetIOS, ToastAndroid, Linking } from 'react-native';

import Button from '~/components/Button';
import useNavigation from '~/hooks/useNavigation';
import * as Notifications from '~/services/notification';

export default function AskPermissionsButton() {
  const { handleNavigate } = useNavigation();

  const handleAcceptPermissions = async () => {
    if (Platform.OS === 'ios') {
      await Notifications.requestNotificationsPermissions();
    }

    const status = await Notifications.getPermissionsStatus();

    if (!status.granted) return notifyAboutPermissions();

    handleNavigate('Login');
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
