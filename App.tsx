import React from 'react';
import type { PropsWithChildren } from 'react';
import { Button, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'
import ButtonPressEvent from './src/components/button_press_event';
import UseStyleSheet from './src/components/add_style_sheet';
import InputHanling from './src/components/input_handler';
import FaltLists from './src/components/flate_list';
import GridWithDyamic from './src/components/grid_with_dynamic_data';
import SectionListReactNT from './src/components/section_list';
import Student from './src/components/class_comp';
import FlexStyle from './src/components/flex_style_css';
import CustomButton from './src/components/custombutton';
import CustomRadio from './src/components/radiobutton';
import DilogBox from './src/components/dilogbox';
import PrassableNT from './src/components/pressable';
import StatusBarNt from './src/components/status_bar';






function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>


      <View style={{ margin: 3, flex: 1 }}>
        {/* <ButtonPressEvent /> */}
        {/* <UseStyleSheet /> */}
        {/* <InputHanling /> */}
        {/* <FaltLists /> */}
        {/* <GridWithDyamic /> */}
        {/* <SectionListReactNT /> */}
        {/* <Student /> */}
        {/* <FlexStyle /> */}
        {/* <CustomButton /> */}
        {/* < CustomRadio /> */}
        {/* <DilogBox /> */}
        {/* <PrassableNT /> */}
        <StatusBarNt />
      </View>
    </>
  );
}

export default App;
