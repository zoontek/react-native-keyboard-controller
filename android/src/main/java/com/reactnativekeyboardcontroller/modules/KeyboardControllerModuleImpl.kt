package com.reactnativekeyboardcontroller.modules

import android.app.Activity
import android.graphics.Color
import android.os.Build
import android.view.WindowManager
import androidx.core.view.WindowCompat
import androidx.core.view.WindowInsetsControllerCompat

class KeyboardControllerModuleImpl {
  companion object {
    const val NAME = "KeyboardController"

    fun init(activity: Activity, styles: String) {
      val haveDarkContent = "dark-content" == styles
      val window = activity.window
      val insetsController = WindowInsetsControllerCompat(window, window.decorView)

      WindowCompat.setDecorFitsSystemWindows(window, false)

      if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O_MR1) {
        window.clearFlags(
          WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS or
            WindowManager.LayoutParams.FLAG_TRANSLUCENT_NAVIGATION
        )

        window.statusBarColor = Color.TRANSPARENT
        window.navigationBarColor = Color.TRANSPARENT

        insetsController.isAppearanceLightStatusBars = haveDarkContent
        insetsController.isAppearanceLightNavigationBars = haveDarkContent

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
          window.isStatusBarContrastEnforced = false
          window.isNavigationBarContrastEnforced = false
        }
      } else if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
        window.clearFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS)
        window.addFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_NAVIGATION)

        window.statusBarColor = Color.TRANSPARENT

        insetsController.isAppearanceLightStatusBars = haveDarkContent
      } else {
        window.addFlags(
          WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS or
            WindowManager.LayoutParams.FLAG_TRANSLUCENT_NAVIGATION
        )
      }
    }
  }
}
