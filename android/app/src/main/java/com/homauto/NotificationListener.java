package com.homauto;

import android.annotation.TargetApi;
import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.os.IBinder;
import android.service.notification.NotificationListenerService;
import android.service.notification.StatusBarNotification;

/**
 * Created by samim on 9/14/17.
 */

@TargetApi(Build.VERSION_CODES.JELLY_BEAN_MR2)
public class NotificationListener extends NotificationListenerService {
    String TAG = getClass().getSimpleName();

    @Override
    public IBinder onBind(Intent intent) {
        return super.onBind(intent);
    }

    @Override
    public void onNotificationPosted(StatusBarNotification sbn) {
        Intent service = new Intent(getApplicationContext(), HeadlessNotificationsService.class);
        Bundle bundle = bundleFrom(sbn);
        bundle.putString("action", "post");
        service.putExtras(bundle);
        startService(service);
    }

    @Override
    public void onNotificationRemoved(StatusBarNotification sbn) {
        Intent service = new Intent(getApplicationContext(), HeadlessNotificationsService.class);
        Bundle bundle = bundleFrom(sbn);
        bundle.putString("action", "remove");
        service.putExtras(bundle);
        startService(service);
    }

    private Bundle bundleFrom(StatusBarNotification sbn) {
        Bundle bundle = new Bundle();
        bundle.putString("packageName", sbn.getPackageName());
        bundle.putInt("id", sbn.getId());
        bundle.putBoolean("isClearable", sbn.isClearable());
        bundle.putBoolean("isOngoing", sbn.isOngoing());
        bundle.putLong("postTime", sbn.getPostTime());
        bundle.putString("tag", sbn.getTag());
        bundle.putString("category", sbn.getNotification().category);
        bundle.putInt("ledARGB", sbn.getNotification().ledARGB);
        bundle.putInt("ledOffMs", sbn.getNotification().ledOffMS);
        bundle.putInt("ledOnMs", sbn.getNotification().ledOnMS);
        bundle.putInt("color", sbn.getNotification().color);
        bundle.putInt("priority", sbn.getNotification().priority);
        bundle.putString("ticketText", (String) sbn.getNotification().tickerText);
        bundle.putLong("when", sbn.getNotification().when);
        bundle.putInt("visibility", sbn.getNotification().visibility);
        bundle.putLongArray("vibrate", sbn.getNotification().vibrate);
        bundle.putString("sound", String.valueOf(sbn.getNotification().sound));
        return bundle;
    }
}