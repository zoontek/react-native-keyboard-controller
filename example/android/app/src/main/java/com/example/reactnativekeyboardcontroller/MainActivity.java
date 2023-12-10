package com.example.reactnativekeyboardcontroller;

import android.graphics.Color;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;

import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsControllerCompat;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;

public class MainActivity extends ReactActivity {
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "KeyboardControllerExample";
  }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. Here we use a util class {@link
   * DefaultReactActivityDelegate} which allows you to easily enable Fabric and Concurrent React
   * (aka React 18) with two boolean flags.
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new DefaultReactActivityDelegate(
        this,
        getMainComponentName(),
        // If you opted-in for the New Architecture, we enable the Fabric Renderer.
        DefaultNewArchitectureEntryPoint.getFabricEnabled());
  }

  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);

    // set up the edge-to-edge display
    final boolean darkContentBars = true;
    final Window window = getWindow();
    final View view = window.getDecorView();

    final WindowInsetsControllerCompat insetsController =
      new WindowInsetsControllerCompat(window, view);

    WindowCompat.setDecorFitsSystemWindows(window, false);

    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O_MR1) {
      window.clearFlags(
        WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS |
          WindowManager.LayoutParams.FLAG_TRANSLUCENT_NAVIGATION
      );

      window.setStatusBarColor(Color.TRANSPARENT);
      window.setNavigationBarColor(Color.TRANSPARENT);

      insetsController.setAppearanceLightStatusBars(darkContentBars);
      insetsController.setAppearanceLightNavigationBars(darkContentBars);

      if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
        window.setStatusBarContrastEnforced(false);
        window.setNavigationBarContrastEnforced(false);
      }
    } else if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
      window.clearFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS);
      window.addFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_NAVIGATION);

      window.setStatusBarColor(Color.TRANSPARENT);

      insetsController.setAppearanceLightStatusBars(darkContentBars);
    } else {
      window.addFlags(
        WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS |
          WindowManager.LayoutParams.FLAG_TRANSLUCENT_NAVIGATION
      );
    }
  }
}
