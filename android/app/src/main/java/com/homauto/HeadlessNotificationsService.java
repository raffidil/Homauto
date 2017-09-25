package com.homauto;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;

import com.facebook.react.HeadlessJsTaskService;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.jstasks.HeadlessJsTaskConfig;

import javax.annotation.Nullable;

/**
 * Created by samim on 9/24/17.
 */

public class HeadlessNotificationsService extends HeadlessJsTaskService {
    String TAG = getClass().getSimpleName();

    @Nullable
    @Override
    protected HeadlessJsTaskConfig getTaskConfig(Intent intent) {
        Bundle extras = intent.getExtras();
        Log.d(TAG, "getTaskConfig: " + extras);
        if (extras != null) {
            return new HeadlessJsTaskConfig("NeoLightNotificationListener",
                    Arguments.fromBundle(extras), 5000, true);
        }
        return super.getTaskConfig(intent);
    }
}
