import { useNavigation as useNativeNavigation } from '@react-navigation/native';

import { HookNavigationProp, StackParamsList } from '~/router';

export default function useNavigation() {
  const navigation = useNativeNavigation<HookNavigationProp>();
  const handleNavigate = (screen: keyof StackParamsList) =>
    navigation.navigate(screen);

  return { handleNavigate };
}
