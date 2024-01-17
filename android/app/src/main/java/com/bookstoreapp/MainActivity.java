package com.bookstoreapp;

import android.os.Bundle;
import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;
import com.google.firebase.remoteconfig.FirebaseRemoteConfig;
import com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings;

public class MainActivity extends ReactActivity {
        // FirebaseRemoteConfig mFirebaseRemoteConfig = FirebaseRemoteConfig.getInstance();
        // FirebaseRemoteConfigSettings configSettings = new FirebaseRemoteConfigSettings.Builder()
        //   .setMinimumFetchIntervalInSeconds(60)
        //   .build();
        //   mFirebaseRemoteConfig.setConfigSettingsAsync(configSettings);
        // // mFirebaseRemoteConfig.setConfigSettingsAsync(configSettings);
        // mFirebaseRemoteConfig.setDefaultsAsync(R.xml.remote_config_defaults);
        // public String key = "show_data_home_screen";
        // boolean result = mFirebaseRemoteConfig.getBoolean(key);
        // System.out.print("Result " + result);
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "BookStoreApp";
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
    protected void onCreate(Bundle savedInstanceState) {
      // System.out.print("Result " + result);
      // if (result) {
        
      // }
      SplashScreen.show(this);  // Add this here
          super.onCreate(savedInstanceState);
    }

// private void fetchRemoteConfigDetails() {
//   firebaseRemoteConfig.fetchAndActivate()
//         .addOnCompleteListener(this, new OnCompleteListener<Boolean>() {
//             @Override
//             public void onComplete(@NonNull Task<Boolean> task) {
//                 if (task.isSuccessful()) {
//                     boolean updated = task.getResult();
//                     Log.d(TAG, "Config params updated: " + updated);
//                     Toast.makeText(MainActivity.this, "Fetch and activate succeeded",
//                             Toast.LENGTH_SHORT).show();

//                 } else {
//                     Toast.makeText(MainActivity.this, "Fetch failed",
//                             Toast.LENGTH_SHORT).show();
//                 }
//                 displayWelcomeMessage();
//             }
//         });
//   }
}
