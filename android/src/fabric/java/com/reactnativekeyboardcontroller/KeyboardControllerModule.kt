package com.reactnativekeyboardcontroller

import com.facebook.react.bridge.ReactApplicationContext
import com.reactnativekeyboardcontroller.modules.KeyboardControllerModuleImpl

class KeyboardControllerModule(mReactContext: ReactApplicationContext) : NativeKeyboardControllerSpec(mReactContext) {
  override fun getName(): String = KeyboardControllerModuleImpl.NAME

  override fun addListener(eventName: String?) {
    /* Required for RN built-in Event Emitter Calls. */
  }

  override fun removeListeners(count: Double) {
    /* Required for RN built-in Event Emitter Calls. */
  }
}
