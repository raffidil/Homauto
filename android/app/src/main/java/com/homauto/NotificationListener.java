package com.homauto;

import android.annotation.TargetApi;
import android.content.Intent;
import android.os.Build;
import android.os.IBinder;
import android.service.notification.NotificationListenerService;
import android.service.notification.StatusBarNotification;
import android.util.Log;

/**
 * Created by samim on 9/14/17.
 */

@TargetApi(Build.VERSION_CODES.JELLY_BEAN_MR2)
public class NotificationListener extends NotificationListenerService {
    private String TAG = "NeoLight";

    @Override
    public IBinder onBind(Intent intent) {
        return super.onBind(intent);
    }

    @Override
    public void onNotificationPosted(StatusBarNotification sbn){
        NeoLightNotificationService notificationSender = NeoLightNotificationService.getInstance();
        Log.d(TAG, "onNotificationPosted: ");
        if (notificationSender != null) {
            notificationSender.send(sbn);
        }
    }

    @Override
    public void onNotificationRemoved(StatusBarNotification sbn){
        NeoLightNotificationService notificationSender = NeoLightNotificationService.getInstance();
        Log.d(TAG, "onNotificationRemoved: ");
        if (notificationSender != null) {
            notificationSender.remove(sbn);
        }
    }
}