import React from "react";
import { View} from "react-native";


<View style={{width:'100%',height:"100%",flex:1,alignItems:'center',justifyContent:'center'}}>
  <Calendar
markerTypes={[missMarker]}
markedDates={[...checkedMarker, ...missedMarkers]}
darkTheme={{
  markerColor: habit.Color,
  markerTextColor: getTextColorForBgHex(habit.Color),
}}
lightTheme={{
  markerColor: habit.Color,
  markerTextColor: getTextColorForBgHex(habit.Color),
}}
onMonthChangeListener={(
  previousMonth,
  previousYear,
  month,
  year,
) => {
  getTimelineData(
    habit,
    month,
    year,
    setCheckedMarker,
    setMissedMarker,
  );
}}
/>          
  </View>