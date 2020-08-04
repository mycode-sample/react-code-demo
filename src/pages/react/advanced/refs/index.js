import React from 'react';
import AutoFocusTextInput from './components/AutoFocusTextInput ';
import CallbackRef from './components/CallbackRef';
import Parent from './components/CallbackRef2';
import CustomFuncTextInput from './components/CustomFuncTextInput';
import CustomTextInput from './components/CustomTextInput';
import Demo from './components/Demo';

export default function Refs(props){
  return(
    <div>
      <p>refs</p>
      <Demo/>
      <hr/>
      <CustomTextInput/>
      <hr/>
      <AutoFocusTextInput/>
      <hr/>
      <CustomFuncTextInput/>
      <hr/>
      <CallbackRef/>
      <hr/>
      <Parent/>
    </div>
  );
}