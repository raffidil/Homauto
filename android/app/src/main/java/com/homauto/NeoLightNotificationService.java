package com.homauto;

import android.annotation.TargetApi;
import android.os.Build;
import android.service.notification.StatusBarNotification;
import android.support.annotation.RequiresApi;
import android.util.Log;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import org.json.JSONException;
import org.json.JSONObject;

/**
 * Created by samim on 9/14/17.
 */

public class NeoLightNotificationService extends ReactContextBaseJavaModule{
    private Callback callback;

    public static NeoLightNotificationService getInstance() {
        return neoLightNotificationServiceInstance;
    }

    public static NeoLightNotificationService neoLightNotificationServiceInstance;

    public NeoLightNotificationService(ReactApplicationContext reactContext) {
        super(reactContext);
        NeoLightNotificationService.neoLightNotificationServiceInstance = this;
    }

    @Override
    public String getName() {
        return "NeoLightNotificationService";
    }

    @ReactMethod
    public void setCallback(Callback callback) {
        this.callback = callback;
    }

    @TargetApi(Build.VERSION_CODES.JELLY_BEAN_MR2)
    public void send(StatusBarNotification sbn) {
        Log.d("NeoLight", "sending " + sbn.toString() + " to " + callback);
        if (callback != null) {
            JSONObject jsonObject = mapFrom(sbn);
            try {
                jsonObject.put("action", "post");
            } catch (JSONException e) {
                Log.e("NeoLight", "send: ", e);
            }
            try {
                callback.invoke(jsonObject.toString());
            } catch (RuntimeException e) {
                Log.e("NeoLight", "send: ", e);
            }
        }
    }

    @RequiresApi(api = Build.VERSION_CODES.JELLY_BEAN_MR2)
    public void remove(StatusBarNotification sbn) {
        if (callback != null) {
            JSONObject jsonObject = mapFrom(sbn);
            try {
                jsonObject.put("action", "remove");
            } catch (JSONException e) {
                Log.e("NeoLight", "send: ", e);
            }
            try {
                callback.invoke(jsonObject.toString());
            } catch (RuntimeException e) {
                Log.e("NeoLight", "remove: ", e);
            }
        }
    }

    @RequiresApi(api = Build.VERSION_CODES.JELLY_BEAN_MR2)
    private JSONObject mapFrom(StatusBarNotification sbn) {
        JSONObject map = new JSONObject();

        try {
            map.put("packageName", sbn.getPackageName());
            map.put("id", sbn.getId());
            map.put("isClearable", sbn.isClearable());
            map.put("isOngoing", sbn.isOngoing());
            map.put("postTime", sbn.getPostTime());
            map.put("tag", sbn.getTag());
            map.put("category", sbn.getNotification().category);
            map.put("ledARGB", sbn.getNotification().ledARGB);
            map.put("ledOffMs", sbn.getNotification().ledOffMS);
            map.put("ledOnMs", sbn.getNotification().ledOnMS);
            map.put("color", sbn.getNotification().color);
            map.put("priority", sbn.getNotification().priority);
            map.put("ticketText", sbn.getNotification().tickerText);
            map.put("when", sbn.getNotification().when);
            map.put("visibility", sbn.getNotification().visibility);
            map.put("vibrate", sbn.getNotification().vibrate);
            map.put("sound", sbn.getNotification().sound);
        } catch (JSONException e) {
            Log.e("NeoLight", "send: ", e);
        }

        return map;
    }

}
