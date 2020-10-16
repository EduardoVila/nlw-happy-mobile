import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetails';
import OrphanageData from './pages/CreateOrphanage/OrphanageData';
import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition';
import Header from './components/Header';

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' } }}>
        <Screen 
          name="OrphanagesMap" 
          component={OrphanagesMap} 
        />
        <Screen 
          options={{ headerShown: true, header: () => <Header showCancel={false} title="Orfanato"/> }}
          name="OrphanageDetails"
          component={OrphanageDetails}
        />
        <Screen
          options={{ headerShown: true, header: () => <Header title="Selecione no mapa"/> }}
          name="SelectMapPosition"
          component={SelectMapPosition}
        />
        <Screen
          options={{ headerShown: true, header: () => <Header title="Informe os dados"/> }}
          name="OrphanageData"
          component={OrphanageData}
        />
      </Navigator>
    </NavigationContainer>
  )
}