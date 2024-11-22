import React from 'react';
import { Text, View, Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
  return (
    <MainLayout>
      <View>
        <Text>About Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('./')}
        />
      </View>
    </MainLayout>
  );
};

export default AboutScreen;
